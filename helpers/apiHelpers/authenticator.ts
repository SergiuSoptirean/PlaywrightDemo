import { request, APIRequestContext } from '@playwright/test';
import { ApiURLs, endpoints , userDetails} from '../../constants/apiConstants';

export async function getAuthenticatedContext(): Promise<APIRequestContext> {
  // First create a temporary context to perform login
  const temp = await request.newContext();

  const loginResponse = await temp.post(ApiURLs.apiBaseUrl + endpoints.authEndpoint, {
    form: {
      username: userDetails.username,
      password: userDetails.password
    }
  });

  if (!loginResponse.ok()) {
    throw new Error(`Login failed: ${loginResponse.status()}`);
  }
  const respBody = await loginResponse.json();
  const { token } = await loginResponse.json();

  // Now create the real authenticated context
  const api = await request.newContext({
    extraHTTPHeaders: {
      Authorization: `Bearer ${respBody.access_token}`
    }
  });

  return api;
}
