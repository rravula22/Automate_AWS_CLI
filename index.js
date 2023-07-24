const express = require('express');
const { chromium } = require('playwright');
const puppeteer = require('puppeteer');
require('dotenv').config();

const app = express();
const port = 3000;

app.get('/', () => {
    getCredentials();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


getCredentials = async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: false,
      slowMo: 10,
    });

    const page = await browser.newPage();

    await page.goto('https://console.aws.amazon.com/iamv2/home?#/security_credentials');
    // Not sharing my credentials due to security reasons
    // you can change to your credentials
    await page.type('#resolving_input', process.env.AWS_USERNAME);
    await page.click('#next_button_text');
    //wait untill password is entered

    await page.waitForSelector('input[type=password]');
    await page.type('#password', process.env.AWS_PASSWORD);
    await page.click('#signin_button');

    await page.waitForSelector('[data-testid="create-access-key"] ');
    await page.click('[data-testid="create-access-key"]');
    await page.click('#ack-risk');

    const elements = await page.$x('//*[contains(@data-analytics-funnel-step, "1")]//*[contains(@class, "awsui_actions_1i0s3_uqbt5_122")]//button');

    // Click on the first element
    await elements[1].evaluateHandle(el => el.click());
    
    await page.waitForSelector('[data-testid="show-password"] ');
    await page.click('[data-testid="show-password"]');

    const table = await page.waitForSelector('[data-analytics="retrieveAccessKeys"] table tbody tr');
    const { accessKey, secretAccessKey } = await page.evaluate(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      return {
        accessKey: cells[0].textContent.split(' ')[0],
        secretAccessKey: cells[1].textContent
      };
    }, table);

    console.log('accessKey', accessKey);
    console.log('secretAccessKey', secretAccessKey);

    await browser.close();
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
