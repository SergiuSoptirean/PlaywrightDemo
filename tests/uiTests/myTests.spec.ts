import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObjects/loginPage';
import { Homepage } from '../../pageObjects/homePage';
import { userDetails } from '../../constants/uiConstants';

test('Happy Path Login', async ({ page }) =>{

    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.login(userDetails.username, userDetails.password );
  
    const homePage = new Homepage(page);
    await homePage.checkIfUserIsLoggedIn(userDetails.username);
  });

test('Login without password', async ({ page }) =>{

    const loginPage = new LoginPage(page);
    await loginPage.gotoLogin();
    await loginPage.login(userDetails.username, "" );
  
    await loginPage.checkPassRequiredMessageIsDisplayed();
  });
