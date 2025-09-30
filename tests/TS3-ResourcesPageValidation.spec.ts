import { test, expect } from '@playwright/test';

test.describe('Resource Page Functionality', async () => {
  test.beforeEach(async({page})=>{
    await page.goto('https://vagdevimahendrada.github.io/BMICalculator/');
    await expect.soft(page).toHaveURL("https://vagdevimahendrada.github.io/BMICalculator/");
    await page.getByRole('link', { name: 'Resources' }).click();
    const headingtext = page.locator("//h1[text()='Health Resources']");
    await expect.soft(headingtext).toHaveText("Health Resources");
  })

  test.afterEach(async ({ page }, testInfo) => {  
    await page.close();
  });

  test('Verify "WHO - Obsesity and Overweight Facts wellness" link',async({page,context})=>{
    const [page1] = await Promise.all([
      context.waitForEvent('page'),
      page.click("//a[contains(text(),'Obesity and')]")
    ]);
    
    await page1.waitForLoadState();
    await expect.soft(page1).toHaveURL("https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight");
    await page1.close()
  })
  
  test('Verify "CDC - BMI Information" link',async({page,context})=>{
    const [page2] = await Promise.all([
      context.waitForEvent('page'),
      page.click("//a[contains(text(),'BMI Information')]")
    ]);
    await page2.waitForLoadState();
    await expect.soft(page2).toHaveURL("https://www.cdc.gov/bmi/about/?CDC_AAref_Val=https://www.cdc.gov/healthyweight/assessing/bmi/index.html");
    await page2.close()
  })

  test('Verify "What to do if you are underweight?" link',async({page,context})=>{
    const [page3] = await Promise.all([
      context.waitForEvent('page'),
      page.click("//a[contains(text(),'What to do')]")
    ]);
    
    await page3.waitForLoadState();
    await expect.soft(page3).toHaveURL("https://www.healthdirect.gov.au/what-to-do-if-you-are-underweight");
    await page3.close()
  })

});