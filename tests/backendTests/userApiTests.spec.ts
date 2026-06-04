import { test, expect } from '@playwright/test';
import { getAuthenticatedContext } from '../../helpers/apiHelpers/authenticator';
import { ApiURLs, endpoints } from '../../constants/apiConstants';

test('fetch user profile', async () => {
  const api = await getAuthenticatedContext();

  const response = await api.get(ApiURLs.uiBaseUrl + endpoints.getUsers);
  await expect(response.ok()).toBeTruthy();

  const responseData = await response.json();
  expect(responseData.data.length).toBeGreaterThan(0);

  console.log(await response.json());
});