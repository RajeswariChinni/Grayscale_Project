import { test} from '@playwright/test';
import calcPage from './pages/calcPage';

test('test', async ({ page }) => {
  await page.goto('https://vagdevimahendrada.github.io/BMICalculator/');
  const logincredentials=new calcPage(page);
  await logincredentials.clickbutton();
  await logincredentials.height('5.9');
  await logincredentials.dropdown('feet');
  await logincredentials.weight('150');
  await logincredentials.weightselect('lbs');
  await logincredentials.submitbutton();
  await page.waitForTimeout(3000);
});