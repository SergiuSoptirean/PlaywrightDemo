import {type Locator, type Page} from "@playwright/test"
import { expect } from '@playwright/test';


export class Homepage {
  readonly page: Page;
  readonly userMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userMenu = page.locator('xpath=//button[@data-testid="user-menu"]/div/div/p[2]');
  }

  async checkIfUserIsLoggedIn(username: string) {
    await expect(await this.userMenu.textContent()).toBe(`${username}`)
  }
}