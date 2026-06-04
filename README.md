To run the existing tests, please deploy this app:
https://github.com/SergiuSoptirean/fullstackFastApiApp

Clone it locally, then deploy it on docker using

docker compose up -d --build

you can find the user details in the apps .env file as it is commited to the repo

To install dependencies and playwright use:
npm install
npx playwright install

To run all tests, use:
npx playwright test 