import { test, expect } from '@playwright/test';
import { getAuthenticatedContext } from '../../helpers/apiHelpers/authenticator';
import { ApiURLs, endpoints } from '../../constants/apiConstants';
import { DbHelper } from '../../helpers/dbHelpers/dbHelper';

test('fetch user profile', async () => {
  const api = await getAuthenticatedContext();

  const response = await api.get(ApiURLs.apiBaseUrl + endpoints.getUsers);
  await expect(response.ok()).toBeTruthy();

  const responseData = await response.json();
  expect(responseData.data.length).toBeGreaterThan(0);

  const db = new DbHelper();
  const dbUsers = await db.getUsers();

  expect(responseData.data.length).toBe(dbUsers.length);

  for (const dbUser of dbUsers) {
    const apiUser = responseData.data.find((u: any) => u.id === dbUser.id);
    expect(apiUser).toBeDefined();
    expect(apiUser.email).toBe(dbUser.email);
    expect(apiUser.is_active).toBe(dbUser.is_active);
    expect(apiUser.is_superuser).toBe(dbUser.is_superuser);
    expect(apiUser.full_name).toBe(dbUser.full_name);
  }
});