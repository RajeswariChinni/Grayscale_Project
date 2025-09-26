import { test, Page} from '@playwright/test';
import calcPage from './pages/calcPage';
import * as dataset from './utilities/data.json';

test.describe('BMI Calculator Functionality', async () => {
  test.beforeEach(async ({page})=>{
    await page.goto('https://vagdevimahendrada.github.io/BMICalculator/');
  })

  test.afterEach(async ({ page }, testInfo) => {  
    await testInfo.attach(`Screenshot - ${testInfo.title}`, {
      body: await page.screenshot(),
      contentType: 'image/png',
  });
  await page.close();
});
  
  for (const data of dataset.data){
    test(`Verify BMI calculation with ${data.height} ${data.heightMetric} and ${data.weight} ${data.weightMetric} @sanity @regression`,async({page})=>{
      const logincredentials=new calcPage(page);
      await logincredentials.clickbutton();
      await logincredentials.height(data.height);
      await logincredentials.dropdown(data.heightMetric);
      await logincredentials.weight(data.weight);
      await logincredentials.weightselect(data.weightMetric);
      await logincredentials.submitbutton();
      await page.waitForTimeout(3000);
    })
  }

  test('Verify error message when height is left blank @sanity @regression',async({page})=>{
    const logincredentials=new calcPage(page);
    await logincredentials.clickbutton();
    await logincredentials.weight('60');
    await logincredentials.weightselect('kg');
    await logincredentials.submitbutton();
    await page.waitForTimeout(3000);
  })

  
  test('Verify error message when weight is left blank @sanity @regression',async({page})=>{
      const logincredentials=new calcPage(page);
      await logincredentials.clickbutton();
      await logincredentials.height('170');
      await logincredentials.dropdown('cm');
      await logincredentials.submitbutton();
      await page.waitForTimeout(3000);
  })
  
  test('Verify error message when given height is negative @sanity @regression',async({page})=>{
    const logincredentials=new calcPage(page);
    await logincredentials.clickbutton();
    await logincredentials.height('-140');
    await logincredentials.dropdown('cm');
    await logincredentials.weight('70');
    await logincredentials.weightselect('kg');
    await logincredentials.submitbutton();
    await page.waitForTimeout(3000);
  })
  
  test('Verify error message when given weight is negative @sanity @regression',async({page})=>{
    const logincredentials=new calcPage(page);
    await logincredentials.clickbutton();
    await logincredentials.height('170');
    await logincredentials.dropdown('cm');
    await logincredentials.weight('-70');
    await logincredentials.weightselect('kg');
    await logincredentials.submitbutton();
    await page.waitForTimeout(3000);
  })

});