/* eslint-disable no-template-curly-in-string */
/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */


const puppeteer = require('puppeteer');
const faker = require('faker');

jest.setTimeout(60000);
const lead = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),

};

describe('Test', () => {
  
  it('requirement tab ', async () => {
    const width = 1400
    const height = 1400
    const browser = await puppeteer.launch({
        args: [
            `--window-size=${ width },${ height }`
        ],
      headless: false,
        slowMo: 100,
    });
    const page = await browser.newPage();
    await page.setViewport({ width, height })
    const url = 'https://www.phptravels.net/';
    await page.goto(url);

    await page.hover('div>ul > ul > ul > li');
    await page.waitForSelector('#en');
    await page.$eval('#en', elem => elem.click());
  

    await browser.close();
  });
});