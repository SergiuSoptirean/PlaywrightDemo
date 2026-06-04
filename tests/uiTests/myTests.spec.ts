// @ts-check

import { test, expect } from '@playwright/test';

test('First test', async ({ page }) =>{

    const evilTesterHomepage = new EvilTesterHomepage(page);
    await evilTesterHomepage.gotoHomepage();
    await evilTesterHomepage.clickWebdriverExampleLink();
  
    
  });