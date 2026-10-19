# Playwright Test Automation

## Overview

This project contains automated UI tests for two web applications:

-Sauce Demo - product sorting, shopping cart, and checkout workflows.
-UI Testing Playground - scrolling and clicking, file upload, dropdown selection, and nested frames.

The tests are written in TypeScript using Playwright Test. The project uses the Page Object Model (POM) to separate page interactions from test logic and fixtures to reuse page objects.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm
- Visual Studio Code (recommended)

## Installation

1. Clone the repository.
2. Open a terminal in the project root.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Install the Playwright browsers:

   ```bash
   npx playwright install
   ```

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/sauce-demo.spec.ts
npx playwright test tests/ui-testing-playground-scroll.spec.ts
npx playwright test tests/ui-testing-playground-upload.spec.ts
npx playwright test tests/ui-testing-playground-select.spec.ts
npx playwright test tests/ui-testing-playwright-frames.spec.ts
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Open the HTML test report:

```bash
npx playwright show-report
```

* Also, on Visual Studio Code, the tests can be run directly from the Test Explorer

## Project Structure

```
-- SauceLab/
    -- Common/       # Shared page functionality and controls
    -- Pages/        # Sauce Demo page objects
    -- test-fixtures.ts
-- UITestingPlayground/
     -- Common/       # Shared UI Testing Playground functionality
     -- Pages/        # Page objects for each scenario
     -- TestingFiles/ # Files used by upload tests
-- tests/            # Automated test scenarios
-- playwright.config.ts 
-- package.json
-- README.md
```

## Test Scenarios

### Sauce Demo
- Log in and identify the three most expensive products dynamically.
- Add the selected products to the cart and verify their names and prices.
- Complete checkout and verify the item total and order confirmation.
- Verify product prices can be sorted in ascending and descending order.

### UI Testing Playground
- Scroll to and click four buttons, then verify the success message.
- Upload two files and verify the upload confirmation.(the files are in the TestingFiles folder)
- Select the required language, city, product, color, and fruit, then verify the resulting text.
- Click four buttons in both the outer and inner frames and verify the result after each click.

## Design Approach

- Page Object Model: Locators and page interactions are encapsulated in page classes.
- Fixtures: Reusable page objects are provided to tests.
- DRY(Don't Repeat Yourself): Common functionality is shared where appropriate.
- Assertions: Tests verify expected UI results rather than only performing actions.


## Useful tips
 - In the playwright.config.ts file in defineConfig you can switch the headless property from false to true in order to run the tests headless
 - In the playwright.config.ts file in defineConfig, we use the ignoreHTTPErrors for the uitestingplayground page in order to interact with it