export async function waitForElement(page, locator) {
  await page.locator(locator).waitFor({ state: 'visible' });
}