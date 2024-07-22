# Playwright-task

## Summary

This repository includes 5 automated test cases written using the Playwright framework and TypeScript. The tests verify the functionality of elements on the main page as well as on the login page of the website [Redmine](https://www.redmine.org/). These tests ensure that critical elements and features of the website are working as expected.

## Requirements

- Node.js v14 or higher
- npm (Node Package Manager)
- Playwright
- TypeScript

## Steps to Install

1. Clone the repository:
    ```sh
    git clone https://github.com/haite4/playwright-task.git
    ```
2. Navigate to the project directory:
    ```sh 
    cd playwright-task
    ```
3. Install dependencies:
    ```sh
    npm install playwright --save-dev
    npx playwright install-deps
    npm install 
    ``` 

## Steps to Launch

1. **Run all Playwright tests**:
    ```sh
    npm run test
    ```
2. **Run tests with a specific browser**:
    - For Chromium:
        ```sh
        npm run test:chromium
        ```
    - For Firefox:
        ```sh
        npm run test:firefox
        ```
    - For WebKit:
        ```sh
        npm run test:webkit
        ```

3. **Run specific test cases**:
    - For Login Page tests:
        ```sh
        npm run test:login:run
        ```
    - For Main Page tests:
        ```sh
        npm run test:mainpage:run
        ```

## Steps to Create the Report

1. Generate the Allure report:
    ```sh
    npm run allure:generate
    ```
2. Serve the Allure report:
    ```sh
    npm run allure:open
    ```