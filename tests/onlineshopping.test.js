/* eslint-disable no-template-curly-in-string */
/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
const puppeteer = require('puppeteer');
const faker = require('faker');

const lead = {
    email : faker.internet.email(),
  
  };
jest.setTimeout(60000);
describe('automationpractice', ()=> {
    it('registration' , async()=> {
        const browser = await puppeteer.launch({
            args:[
                '--start-maximized'
             ],
            headless: false,
            slowMo: 100,
          });
          const page = await browser.newPage();
          await page.setViewport({ width: 1366, height: 768});
        
         // const url = 'http://automationpractice.com/index.php';
          await page.goto('http://automationpractice.com/index.php', {
               
                waitUntil: 'networkidle2',
                timeout: 3000000
            });
          

          await page.waitForSelector('a[href="http://automationpractice.com/index.php?controller=my-account"]');
          await page.$eval('a[href="http://automationpractice.com/index.php?controller=my-account"]', elem => elem.click());
          await page.screenshot({ path: './screenshots/${phptravels}.png' });

          
          await page.waitForSelector('input[id="email_create"]');
          await page.type('input[id="email_create"]',lead.email);
          const emailid = await page.evaluate(() => document.querySelector('input[id="email_create"]').value);
          console.log(emailid);
        
          await page.waitForSelector('button[id="SubmitCreate"]');
          await page.$eval('button[id="SubmitCreate"]', elem => elem.click());
          await page.screenshot({ path: './screenshots/${phptravels1}.png' });

         
          // await page.waitForSelector('div[id="id_gender1"]');
          // await page.$eval('div[id="id_gender1"]', elem => elem.click());
          
          

           

          await browser.close();


    });


});