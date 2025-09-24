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
    async height(heightdata:string)
    {
         await this.page.getByRole('spinbutton', { name: 'Height' }).fill(heightdata);
    }
    async dropdown(dropdownselect:string)
    {
         await this.page.locator('#heightUnit').selectOption(dropdownselect);
    }
    async weight(weightdata:string)
    {
          await this.page.getByRole('spinbutton', { name: 'Weight' }).fill(weightdata);
    }
    async weightselect(weightsel:string)
    {
         await this.page.locator('#weightUnit').selectOption(weightsel);
    }
    async submitbutton()
    {
        await this.page.getByRole('button', { name: 'Calculate Now' }).click();
}
}