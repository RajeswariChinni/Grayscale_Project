import { test, expect} from '@playwright/test';
import calcPage from './pages/calcPage';
import * as dataset from './utilities/data.json';

test.describe('BMI Calculator Functionality', async () => {
  test.beforeEach(async ({page})=>{
    await page.goto('https://vagdevimahendrada.github.io/BMICalculator/');
  })

  test.afterEach(async ({ page }, testInfo) => {  
    await page.waitForTimeout(2000);
    await testInfo.attach(`Screenshot - ${testInfo.title}`, {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
    
    await page.close();
  });
  
  for (const data of dataset.data){
    test(`Verify BMI calculation with ${data.height} ${data.heightMetric} and ${data.weight} ${data.weightMetric}`,async({page})=>{
      const calculationBMI=new calcPage(page);
      await calculationBMI.clickbutton();
      await calculationBMI.CalculationofBMI(data.height,data.heightMetric,data.weight,data.weightMetric);
      await expect.soft(page.locator('#bmiResult')).toContainText('Your BMI is');
    })
  }

  test('Verify error message when height is left blank',async({page})=>{
    const calculationBMI=new calcPage(page);
    await calculationBMI.clickbutton();
    await calculationBMI.CalculationofBMI('',undefined,'60','kg');
    await expect.soft(page.locator('#bmiResult')).toContainText('Please enter valid');
  })

  
  test('Verify error message when weight is left blank',async({page})=>{
      const calculationBMI=new calcPage(page);
      await calculationBMI.clickbutton();
      await calculationBMI.CalculationofBMI('170','cm','',undefined);
      await expect.soft(page.locator('#bmiResult')).toContainText('Please enter valid');
  })
  
  test('Verify error message when given height is negative',async({page})=>{
    const calculationBMI=new calcPage(page);
    await calculationBMI.clickbutton();
    await calculationBMI.CalculationofBMI('-140','cm','70','kg');
    await expect.soft(page.locator('#bmiResult')).toContainText('Please enter valid');
  })
  
  test('Verify error message when given weight is negative',async({page})=>{
    const calculationBMI=new calcPage(page);
    await calculationBMI.clickbutton();
    await calculationBMI.CalculationofBMI('170','cm','-70','kg');
    await expect.soft(page.locator('#bmiResult')).toContainText('Please enter valid');
  })

});