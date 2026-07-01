import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { standardUser } from '../src/data/users';

test.describe('Login', () => {
  test('standard user can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login(standardUser);

    await expect(page).toHaveURL(/inventory\.html/);
  });
});
