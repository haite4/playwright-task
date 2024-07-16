# Playwright-task

## Summary

This repository includes automated tests written using Playwright and TypeScript. The tests verify the functionality of elements on the main page as well as on the login page.

## Requirements

- Node.js v14 or higher
- npm (Node Package Manager)
- Playwright
- TypeScript

## Step to install 

1. Clone the repository:
    ```sh
    git clone https://github.com/haite4/playwright-task.git
    ```
2. Navigate to the project directory:
    ```sh 
    cd .
    ```
3. Install dependencies:
    ```sh
    npm install playwright --save-dev
    npx playwright install-deps
    npm install 
    ``` 


## Steps to Launch

1.  ```sh
    npx playwright test
    ```
2. To run tests with a specific browser (Chromium, Firefox, WebKit), use:
    ```sh
    npx playwright test --project=chromium
    npx playwright test --project=firefox
    npx playwright test --project=webkit
    ```
## Steps to Create the Report

1. Generate the Allure report:
    ```sh
    npx allure generate ./allure-results --clean -o ./allure-report
    ```
2. Serve the Allure report:
    ```sh
    npx allure open ./allure-report
    ```
