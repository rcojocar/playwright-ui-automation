import { test, expect } from '../SauceLab/test-fixtures';

test('add the three most expensive products to cart', async ({
  loginPage,
  inventoryPage,
  headerControl,
  cartPage,
  checkoutPage,
  checkoutStepTwoPage,
  checkoutCompletePage
  }) => {
  await loginPage.login();

  const mostExpensiveProducts =
    await inventoryPage.getMostExpensiveProducts();

  for (const product of mostExpensiveProducts) {
    await inventoryPage.addProductToCart(product.name);
  }

  await headerControl.openCart();

  const cartProducts = await cartPage.getCartProducts();

  expect(cartProducts).toHaveLength(3);

  for (const expectedProduct of mostExpensiveProducts) {
    const matchingProduct = cartProducts.find(
      cartProduct => cartProduct.name === expectedProduct.name
    );

    expect(matchingProduct).toBeDefined();
    expect(matchingProduct?.price).toBe(expectedProduct.price);
  }

  await cartPage.goToCheckout();
  await checkoutPage.fillCheckoutInformation();
  await checkoutPage.continueCheckout();

  const expectedItemTotal = mostExpensiveProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  const actualItemTotal =
    await checkoutStepTwoPage.getCheckoutItemTotal();

  expect(actualItemTotal).toBeCloseTo(expectedItemTotal, 2);

  await checkoutStepTwoPage.finishCheckout();
  await checkoutCompletePage.backHome();
})


test('sort products by price ascending and descending', async ({
  loginPage,
  inventoryPage
}) => {
  await loginPage.login();

  await inventoryPage.sortByPriceAscending();

  const ascendingPrices = await inventoryPage.getDisplayedPrices();
  const expectedAscendingPrices = [...ascendingPrices].sort(
    (a, b) => a - b
  );

  expect(ascendingPrices).toEqual(expectedAscendingPrices);

  await inventoryPage.sortByPriceDescending();

  const descendingPrices = await inventoryPage.getDisplayedPrices();
  const expectedDescendingPrices = [...descendingPrices].sort(
    (a, b) => b - a
  );

  expect(descendingPrices).toEqual(expectedDescendingPrices);
});
;