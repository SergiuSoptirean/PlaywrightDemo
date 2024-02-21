// @ts-check
const { test, expect } = require('@playwright/test');
const {beforeAllTests, afterAllTests, testy} = require('./testBase');
const { assert } = require('console');

test.beforeAll('One Time Setup', beforeAllTests);
test.afterAll('One Time Teardown', afterAllTests);

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('my table test', async ({page}) => {
  //expected values 
  const names = ["Alan", "Bob", "Aleister", "Douglas"]
  const amounts = ["12", "23", "33.3", "42"]

  await page.goto("https://testpages.eviltester.com/styled/tag/table.html");

  const rowCount = await page.locator('#mytable > tbody').locator('tr').count();

  for (let i = 0; i < rowCount - 1; i++) {
      //column one checker
      // const nameRow = await page.locator('#mytable > tbody').locator('tr').nth(i+1).locator('td').nth(0).innerText();
      // await expect.soft(nameRow).toContain(names[i])

      await expect.soft(page.locator('#mytable > tbody').locator('tr').nth(i+1).locator('td').nth(0)).toHaveText(names[i]);

      //column two checker
      // const amountRow = await page.locator('#mytable > tbody').locator('tr').nth(i+1).locator('td').nth(1).innerText();
      // await expect.soft(amountRow).toContain(amounts[i])

      await expect.soft(page.locator('#mytable > tbody').locator('tr').nth(i+1).locator('td').nth(1)).toHaveText(amounts[i]);
  }

  //go to index page
  await page.getByRole('link', { name: 'Index' }).click();

  //assert element in index page is visible
  await expect(page.getByRole('heading', { name: 'Practice Applications and' })).toBeVisible();
});

test('open link in new tab test', async ({page, context}) => {

  await page.goto("https://testpages.eviltester.com");

  await page.keyboard.down('Control');

  await page.getByRole('link', { name: 'Table Test Page', exact: true }).click();

  //click can be done by using page.click() as well
  //await page.click('a selector');

  const [newPage] = await Promise.all([
    context.waitForEvent('page')
    
  ]);
  
  await newPage.waitForLoadState();

  await newPage.bringToFront();

  await expect(newPage).toHaveTitle(/Table HTML Tag/);

  await newPage.close();

  //assert element in index page is visible
  await expect(page.getByRole('heading', { name: 'Practice Applications and' })).toBeVisible();

});
//This opens a new tab
//const newPage = await context.newPage()


test('IFrames test', async ({page}) =>{

  await page.goto("https://testpages.eviltester.com/styled/iframes-test.html");

  await expect(page.frameLocator('#theheaderhtml').getByRole('heading', { name: 'Nested Page Example' })).toContainText('Nested Page Example')

  
});
