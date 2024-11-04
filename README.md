# orangehrm-typescript-playwright
This is a UI automation framework built using [Playwright](https://playwright.dev/) to test the web application [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/) and its various pages.

## Project Structure

```
orangehrm-typescript-playwright/
├── /tests/                          # Contains all test case files
│   ├── loginTest.spec.ts            # Test file for Login page
│   └── ...
├── /pageObjects/                    # Contains Page Object Model files
│   ├── loginPage.ts                 # Page Object Model for Login page
│   └── ...
├── playwright.config.ts             # Playwright configuration file
├── package.json                     # Node.js project configuration file
├── package-lock.json                # Node package lock file (auto-generated)
└── README.md                        # This file
```

## Prerequisites

To get started, you need to have the following installed on your machine:

    Node.js (14.x, 16.x, or 18.x)
    npm (comes with Node.js)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/qaespence/orangehrm-typescript-playwright
cd orangehrm-typescript-playwright
```

2. Install the dependencies: Once inside the project folder, run the following command to install all necessary packages:
```bash
npm install
```
This will install Playwright and other dependencies as defined in the package.json file.

3. Install Playwright Browsers: Playwright requires browser binaries to run tests. You can install them by running:
```bash
npx playwright install
```

## Running Tests

You can run the tests using Playwright's CLI commands. By default, Playwright will run tests headlessly (without opening a browser window). You can adjust this by modifying the playwright.config.ts file.

1. Run All Tests: To run all tests:

```bash
npx playwright test
```

2. Run a Specific Test File: To run a specific test file, for example, the add_remove_elements.spec.js:

```bash
npx playwright test tests/loginTest.spec.ts
```

3. Run Tests with the Browser Open: By default, the tests run in headless mode (without opening the browser). To run them with the browser visible:

```bash
npx playwright test --headed
```

4. Generate HTML Reports: To generate an HTML report after running tests:

```bash
npx playwright show-report
```

5. Run Tests in Debug Mode: To run tests in debug mode, where you can inspect each step:

```bash
npx playwright test --debug
```

## Configuration

Playwright Configuration: You can modify the playwright.config.ts file to change global settings like browser type, base URL, viewport size, and more.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
