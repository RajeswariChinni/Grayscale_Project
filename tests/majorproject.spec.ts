import { test, expect } from '@playwright/test';

test.describe('BMI Calculator UI Tests', () => {
  const Url = 'https://vagdevimahendrada.github.io/BMICalculator/'; 
  test.beforeEach(async ({ page }) => {
    await page.goto(Url);
  });

  // TC01: Verify page heading and layout
  test('bmi_ts01_tc_01 - Verify page heading and layout', async ({ page }) => {
    const heading = page.locator('//h1[text()=" BMI CALCULATOR"]'); 
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(/BMI Calculator/i);

    const layoutContainer = page.locator('//button[text()="Start Your BMI Check"]'); 
    await expect(layoutContainer).toBeVisible();
  });

  // TC02: Verify 'Start Your BMI Check' button visibility
  test('bmi_ts01_tc_02 - Verify Start Your BMI Check button visibility', async ({ page }) => {
    const startButton = page.locator('//button[text()="Start Your BMI Check"]'); 
    await expect(startButton).toBeVisible();
    await expect(startButton).toHaveText(/Start Your BMI Check/i);
  });

  // TC03: Verify 'Start Your BMI Check' button functionality
  test('bmi_ts01_tc_03 - Verify Start Your BMI Check button functionality', async ({ page }) => {
    const startButton = page.locator('//button[text()="Start Your BMI Check"]');
    await startButton.click();

    const bmiForm = page.locator('form#bmi-form'); // Example: <form id="bmi-form">
    await expect(bmiForm).toBeVisible();
  });

  // TC04: Verify 'About' button functionality
  test('bmi_ts01_tc_04 - Verify About button functionality', async ({ page }) => {
    const aboutButton = page.locator('//a[text()=" About"]'); // Example: <a id="about-link">About</a>
    await aboutButton.click();

    const aboutSection = page.locator('section#about'); // Example: <section id="about">
    await expect(aboutSection).toBeVisible();
  });

  // TC05: Verify Resources button functionality
  test('bmi_ts01_tc_05 - Verify Resources button functionality', async ({ page }) => {
    const resourcesButton = page.locator('//a[text()=" Resources"]'); 
    await resourcesButton.click();

    const resourcesSection = page.locator('section#resources'); // Example: <section id="resources">
    await expect(resourcesSection).toBeVisible();
  });
});
