import { getEnvironmentData } from '../helpers/envHelper';

const env = getEnvironmentData();

export const ApiURLs = {
    apiBaseUrl: env.api.baseUrl
}

export const endpoints = {
    authEndpoint: "/api/v1/login/access-token",
    getUsers: "/api/v1/users/"
}

export const userDetails = {
    username: env.api.user,
    password: env.api.pass
}