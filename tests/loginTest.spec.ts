import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test('Valid login', async ({ page }) => {
    await loginPage.enterUsername('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLogin();

    // Verify successful login
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  });

  test('Invalid login', async ({ page }) => {
    await loginPage.enterUsername('invalidUser');
    await loginPage.enterPassword('invalidPass');
    await loginPage.clickLogin();
    
    // Check if the "Invalid credentials" message exists
    const errorMessage = await loginPage.getErrorMessageInvalidCredentials();
    await expect(errorMessage).toHaveCount(1);  // Ensure the element exists
    
    // Verify that the error message is visible
    await expect(errorMessage).toBeVisible();  // Ensure the element is visible
  });

  test('Username missing', async ({ page }) => {
    await loginPage.enterUsername('a');
    await loginPage.clearUsername();
    
    // Check if the "Required" message exists
    const errorMessage = await loginPage.getErrorMessageMissingCredentials();
    await expect(errorMessage).toHaveCount(1);  // Ensure the element exists
    
    // Verify that the error message is visible
    await expect(errorMessage).toBeVisible();  // Ensure the element is visible
  });

  test('Password missing', async ({ page }) => {
    await loginPage.enterPassword('a');
    await loginPage.clearPassword();
    
    // Check if the "Required" message exists
    const errorMessage = await loginPage.getErrorMessageMissingCredentials();
    await expect(errorMessage).toHaveCount(1);  // Ensure the element exists
    
    // Verify that the error message is visible
    await expect(errorMessage).toBeVisible();  // Ensure the element is visible
  });

  test('Both Username and Password missing', async ({ page }) => {
    await loginPage.enterUsername('a');
    await loginPage.clearUsername();
    await loginPage.enterPassword('a');
    await loginPage.clearPassword();
    
    // Check if the "Required" messages exist
    const errorMessage = await loginPage.getErrorMessageMissingCredentials();
    await expect(errorMessage).toHaveCount(2);  // Ensure the elements exists
  });

});
