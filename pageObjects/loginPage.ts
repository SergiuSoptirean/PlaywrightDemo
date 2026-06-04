import {expect, type Locator, type Page} from "@playwright/test"
import { uiURLs } from '../constants/uiConstants';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly passRequiredMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('xpath=//input[@name="username"]');
    this.passwordInput = page.locator('xpath=//input[@name="password"]');
    this.loginButton = page.locator('xpath=//button[text()="Log In"]');
    this.passRequiredMessage = page.locator('xpath=//p[text()="Password is required"]');
  }

  async gotoLogin() {
    await this.page.goto(uiURLs.uiBaseUrl);
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async checkPassRequiredMessageIsDisplayed() {
    await expect(this.passRequiredMessage).toBeVisible
  }
}