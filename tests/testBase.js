const { test, expect } = require('@playwright/test');

// beforeAll setup
const beforeAllTests = async ({ browser }) => {
  // Your setup code here

  console.log('Before all tests setup');
};

// afterAll teardown
const afterAllTests = async ({ browser }) => {
  // Your teardown code here

  console.log('After all tests teardown');
};

exports.testy = 'asdf';

  module.exports = { beforeAllTests, afterAllTests };