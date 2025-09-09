import { test, expect } from '@playwright/test';

test('acessando pagina do playwright', async ({ page }) => {
  //actions
  await page.goto('https://playwright.dev/');

  // Locators
  const titulo = page.locator('.navbar__inner .navbar__title');
  const botaoGetStarted = page.getByText('Get started');
  await botaoGetStarted.click();

  // expects / verificações
  await expect(titulo).toHaveText('Playwright');
  await expect(page.getByText('Get started')).toBeVisible();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
  
});