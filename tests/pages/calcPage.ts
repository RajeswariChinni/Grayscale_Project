import {Page} from '@playwright/test';

export default class calcPage
{
    page:Page;
    constructor(page:Page)
    {
        this.page=page;
    }
    async clickbutton()
    {
         await this.page.getByRole('button', { name: 'Start Your BMI Check' }).click();
    }
    async CalculationofBMI(heightdata:string,dropdownselect:any='cm',weightdata:string,weightsel:any='kg'){
          await this.page.getByPlaceholder('Enter your height').fill(heightdata);
          await this.page.locator('#heightUnit').selectOption(dropdownselect);
          await this.page.locator('[id="weightValue"]').fill(weightdata);
          await this.page.locator('//select[@id="weightUnit"]').selectOption(weightsel);
          await this.page.getByText('Calculate Now').click();
    }
}