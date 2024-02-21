const { expect } = require('@playwright/test');

exports.EvilTesterHomepage = class EvilTesteHomepage{
    /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page)
  {
    this.page = page;
    //get some elements?
    this.webdriverExampleLink = page.locator('id=webdriverexamplepage');
  }

  async gotoHomepage() {
    await this.page.goto('https://testpages.eviltester.com/styled/index.html');
  }

  async clickWebdriverExampleLink()
  {
    await this.webdriverExampleLink.click();
    await expect(this.page).toHaveTitle('Example Page Title');
  }
}