import { test, expect } from '@playwright/test';

test.describe('BMI Calculator UI Tests', () => {
  const Url = 'https://vagdevimahendrada.github.io/BMICalculator/'; 
  test.beforeEach(async ({ page }) => {
    await page.goto(Url);
  });

  test('Verify page heading and layout', async ({ page }) => {
    const heading = page.locator('//h1[text()=" BMI CALCULATOR"]'); 
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(/BMI Calculator/i);

    const layoutContainer = page.locator('//button[text()="Start Your BMI Check"]'); 
    await expect(layoutContainer).toBeVisible();
  });

  test('Verify Start Your BMI Check button visibility', async ({ page }) => {
    const startButton = page.locator('//button[text()="Start Your BMI Check"]'); 
    await expect(startButton).toBeVisible();
    await expect(startButton).toHaveText(/Start Your BMI Check/i);
  });

  test('Verify Start Your BMI Check button functionality', async ({ page }) => {
    const startButton = page.locator('//button[text()="Start Your BMI Check"]');
    await startButton.click();

    const bmiForm = page.locator('//div[@class="card"]'); 
    await expect(bmiForm).toBeVisible();
  });

  test('Verify About button functionality', async ({ page }) => {
    const aboutButton = page.locator('//a[text()=" About"]'); 
    await aboutButton.click();

    const aboutSection = page.locator('main'); 
    await expect(aboutSection).toBeVisible();
  });

  test('Verify Resources button functionality', async ({ page }) => {
    const resourcesButton = page.locator('//a[text()=" Resources"]'); 
    await resourcesButton.click();

    const resourcesSection = page.locator('section'); 
    await expect(resourcesSection).toBeVisible();
  });
});
