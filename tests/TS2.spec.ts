import { test, Page} from '@playwright/test';
import calcPage from './pages/calcPage';
import * as dataset from './data.json';

test.describe.serial('BMI Calculator Functionality', async () => {
  test.beforeEach(async ({page})=>{
    await page.goto('https://vagdevimahendrada.github.io/BMICalculator/');
  })
  
  for (const data of dataset.data){
    test(`Verify BMI calculation with ${data.height} ${data.heightMetric} and ${data.weight} ${data.weightMetric}`,async({page})=>{
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

  test('Verify error message when height is left blank',async({page})=>{
    const logincredentials=new calcPage(page);
    await logincredentials.clickbutton();
    await logincredentials.weight('60');
    await logincredentials.weightselect('kg');
    await logincredentials.submitbutton();
    await page.waitForTimeout(3000);

    test.info().attach('Error message on blank height field',{
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  })

  
  test('Verify error message when weight is left blank',async({page})=>{
      const logincredentials=new calcPage(page);
      await logincredentials.clickbutton();
      await logincredentials.height('170');
      await logincredentials.dropdown('cm');
      await logincredentials.submitbutton();
      await page.waitForTimeout(3000);

      test.info().attach('Error message on blank weight field',{
        body: await page.screenshot(),
        contentType: 'image/png'
      })
  })
  
  test('Verify error message when given height is negative',async({page})=>{
    const logincredentials=new calcPage(page);
    await logincredentials.clickbutton();
    await logincredentials.height('-140');
    await logincredentials.dropdown('cm');
    await logincredentials.weight('70');
    await logincredentials.weightselect('kg');
    await logincredentials.submitbutton();
    await page.waitForTimeout(3000);

    test.info().attach('Error message on blank height field',{
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  })
  
  test('Verify error message when given weight is negative',async({page})=>{
    const logincredentials=new calcPage(page);
    await logincredentials.clickbutton();
    await logincredentials.height('170');
    await logincredentials.dropdown('cm');
    await logincredentials.weight('-70');
    await logincredentials.weightselect('kg');
    await logincredentials.submitbutton();
    await page.waitForTimeout(3000);

    test.info().attach('Error message on blank weight field',{
      body: await page.screenshot(),
      contentType: 'image/png'
    })
  })

});