import { test, expect,chromium } from '@playwright/test';

test('test', async () => {
  const browser = await chromium.launch({headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://vagdevimahendrada.github.io/BMICalculator/');
  await expect.soft(page).toHaveURL("https://vagdevimahendrada.github.io/BMICalculator/");
  await page.getByRole('link', { name: 'Resources' }).click();
  const headingtext = page.locator("//h1[text()='Health Resources']");
  await expect.soft(headingtext).toHaveText("Health Resources");
  const [page1] = await Promise.all([
    context.waitForEvent('page'),
    page.click("//a[contains(text(),'Obesity and')]")
  ]);
  await page1.waitForLoadState();

  await expect.soft(page1).toHaveURL("https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight");
  await page1.close();

  const [page2] = await Promise.all([
    context.waitForEvent('page'),
    page.click("//a[contains(text(),'BMI Information')]")
  ]);
  await page2.waitForLoadState();
  await expect.soft(page2).toHaveURL("https://www.cdc.gov/bmi/about/?CDC_AAref_Val=https://www.cdc.gov/healthyweight/assessing/bmi/index.html");
  await page2.close();

  const [page3] = await Promise.all([
    context.waitForEvent('page'),
    page.click("//a[contains(text(),'What to do')]")
  ]);
  await page3.waitForLoadState();
  await expect.soft(page3).toHaveURL("https://www.healthdirect.gov.au/what-to-do-if-you-are-underweight");
  await page3.close();

  await browser.close();
});