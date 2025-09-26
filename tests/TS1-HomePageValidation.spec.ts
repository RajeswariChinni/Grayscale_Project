import { test, expect } from '@playwright/test';
test.describe('BMI Calculator UI Tests', () => {
  const Url = 'https://vagdevimahendrada.github.io/BMICalculator/'; 
  test.beforeEach(async ({ page }) => {
    await page.goto(Url);
  });

  test.afterEach(async ({ page }, testInfo) => {  
    await page.waitForTimeout(2000);
    await testInfo.attach(`Screenshot - ${testInfo.title}`, {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
    
    await page.close();
  });

  test('Verify page heading and layout @smoke @regression', async ({ page }) => {
    const heading = page.locator('//h1[text()=" BMI CALCULATOR"]'); 
    await expect.soft(heading).toBeVisible();
    await expect.soft(heading).toHaveText(/BMI Calculator/i);

    const layoutContainer = page.locator('//button[text()="Start Your BMI Check"]'); 
    await expect.soft(layoutContainer).toBeVisible();
  });

  test('Verify Start Your BMI Check button visibility', async ({ page }) => {
    const startButton = page.locator('//button[text()="Start Your BMI Check"]'); 
    await expect.soft(startButton).toBeVisible();
    await expect.soft(startButton).toHaveText(/Start Your BMI Check/i);
  });

  test('Verify Start Your BMI Check button functionality @smoke @regression', async ({ page }) => {
    const startButton = page.locator('//button[text()="Start Your BMI Check"]');
    await startButton.click();

    const bmiForm = page.locator('//div[@class="card"]'); 
    await expect.soft(bmiForm).toBeVisible();
  });

  test('Verify About button functionality @smoke @regression', async ({ page }) => {
    const aboutButton = page.locator('//a[text()=" About"]'); 
    await aboutButton.click();

    const aboutSection = page.locator('main'); 
    await expect.soft(aboutSection).toBeVisible();
  });

  test('Verify Resources button functionality @smoke @regression', async ({ page }) => {
    const resourcesButton = page.locator('//a[text()=" Resources"]'); 
    await resourcesButton.click();

    const resourcesSection = page.locator('section'); 
    await expect.soft(resourcesSection).toBeVisible();
  });
});
