import { getEnvironmentData } from '../helpers/apiHelpers/envHelper';

const env = getEnvironmentData();

export const uiURLs = {
    uiBaseUrl: env.ui.baseUrl
}

//setting these here for now
export const userDetails = {
    username: env.ui.user,
    password: env.ui.pass
}