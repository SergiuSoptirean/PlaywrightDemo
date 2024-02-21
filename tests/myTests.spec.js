// @ts-check

const { test, expect } = require('@playwright/test');
const {beforeAllTests, afterAllTests, testy} = require('./testBase');
const { EvilTesterHomepage } = require('../tests-examples/PageObjects/EvilTesterHomepage');

test('First test', async ({ page }) =>{

    const evilTesterHomepage = new EvilTesterHomepage(page);
    await evilTesterHomepage.gotoHomepage();
    await evilTesterHomepage.clickWebdriverExampleLink();
  
    
  });