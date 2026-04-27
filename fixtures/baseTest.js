import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth/LoginPage';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await page.goto("https://example.com/login");

    await login.login("admin", "password");

    await use(page);
  }
});

export { expect } from '@playwright/test';