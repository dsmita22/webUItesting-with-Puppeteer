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
  
  it.skip('requirement tab ', async () => {
    const browser = await puppeteer.launch({
      headless: false,
        slowMo: 100,
    });
    const page = await browser.newPage();
    const url = 'https://opensource-demo.orangehrmlive.com/';
    await page.goto(url);
    
    // remove existing text
    await page.type('input[id="txtUsername"]', 'Admin1');
    const inputValue = await page.$eval('input[id="txtUsername"]', el => el.value);
    console.log(inputValue.length);
   
    // eslint-disable-next-line no-plusplus
    for ( let i = 0; i < inputValue.length; i++ ) {
      await page.keyboard.press('Backspace');
    }
    await page.type('input[id="txtUsername"]', 'Admin');

    await page.type('input[id="txtPassword"]', 'admin123');
    await page.click('input[id="btnLogin"]');

    await page.waitForSelector('a[id="menu_leave_viewLeaveModule"]');
    await page.click('a[id="menu_leave_viewLeaveModule"]');

    await page.waitForSelector('input[id="calFromDate"]');
    await page.click('input[id="calFromDate"]');
    await page.type('input[id="calFromDate"]','2019-07-12');

    await page.$eval('input[id="calToDate"]', elem => elem.click());
    await page.type('input[id="calToDate"]','2019-08-10');

    await page.click('input[id="leaveList_chkSearchFilter_0"]');
    await page.type('input[id="leaveList_txtEmployee_empName"]','IT');
    const selectElem = await page.$('select[name="leaveList[cmbSubunit]"]');
    await selectElem.type('IT');
    await page.click('input[id="btnSearch"]');
    // await page.screenshot({ path: 'upload.png' });
   
    // check  requirement tab 
    await page.click('a[id="menu_recruitment_viewRecruitmentModule"]');
    await page.waitForSelector('input[id="btnAdd"]');
    await page.$eval('input[id="btnAdd"]', elem => elem.click());

    await page.waitForSelector('input[id="addCandidate_firstName"]');
    await page.type('input[id="addCandidate_firstName"]','Jonny');
    await page.waitForSelector('input[id="addCandidate_lastName"]');
    await page.type('input[id="addCandidate_lastName"]','Doson');
    await page.waitForSelector('input[id="addCandidate_email"]');
    await page.type('input[id="addCandidate_email"]','Doson@hotmail.com');
    
    const selectElem1 = await page.$('select[name="addCandidate[vacancy]"]');
    await selectElem1.type('HR');

    await page.waitForSelector('input[id="addCandidate_resume"]');
    await page.click('input[id="addCandidate_resume"]');
    const input = await page.$('input[type=file]');
    await input.uploadFile(`${process.cwd() }//Smita_Dutta_Resume.docx`);
    await page.screenshot({ path: 'upload.png' });
  
    
    
    await browser.close();
  });

  it.skip('PIM tab ', async () => {
    
    const browser = await puppeteer.launch({

      headless: false,
        slowMo: 100,
        
    });
    const page = await browser.newPage();
    const url = 'https://opensource-demo.orangehrmlive.com/';
    await page.goto(url);
  
    await page.type('input[id="txtUsername"]', 'Admin');
    await page.type('input[id="txtPassword"]', 'admin123');
    await page.click('input[id="btnLogin"]');


    await page.waitForSelector('a[id="menu_pim_viewPimModule"]');
    await page.click('a[id="menu_pim_viewPimModule"]');

    await page.waitForSelector('input[id="btnAdd"]');
    await page.$eval('input[id="btnAdd"]', elem => elem.click());

    await page.waitForSelector('input[id="firstName"]');
    await page.type('input[id="firstName"]',lead.firstName);
    console.log(await page.evaluate(() => document.querySelector('input[id="firstName"]').value));
   
    
    await page.type('input[id="lastName"]',lead.lastName);
    console.log(await page.evaluate(() => document.querySelector('input[id="lastName"]').value));

    await page.waitForSelector('input[id="photofile"]');
    await page.click('input[id="photofile"]');
    const input = await page.$('input[type=file]');
    await input.uploadFile(`${process.cwd() }//Photograph.jpeg`);
    await page.waitForSelector('input[id="btnSave"]');
    await page.click('input[id="btnSave"]');

    await page.waitForSelector('a[id="menu_pim_viewPimModule"]');
    await page.click('a[id="menu_pim_viewPimModule"]');

    if (await page.$('input[name="chkSelectRow[]"]') !== null){
      console.log('found');
      
      await page.click('input[name="chkSelectRow[]"]');
      await page.waitFor(1000);
      await page.screenshot({ path: 'uploadtabledata02.png' });
      await page.waitForSelector('input[id="btnDelete"]');
      await page.click('input[id="btnDelete"]');

      await page.waitForSelector('input[id="dialogDeleteBtn"]');
      await page.click('input[id="dialogDeleteBtn"]');

      
      await page.screenshot({ path: 'uploadtabledata04.png' });
    }
    else{
      console.log('not found');

    } 
      
    await browser.close();

      });



    it.skip('Create admin', async () => {
    
        const browser = await puppeteer.launch({
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          headless: true,
          slowMo: 100,
            
        });
        const page = await browser.newPage();
    const url = 'https://opensource-demo.orangehrmlive.com/';
    await page.goto(url);
  
    await page.type('input[id="txtUsername"]', 'Admin');
    await page.type('input[id="txtPassword"]', 'admin123');
    await page.click('input[id="btnLogin"]');


    await page.waitForSelector('a[id="menu_pim_viewPimModule"]');
    await page.click('a[id="menu_pim_viewPimModule"]');

    await page.waitForSelector('input[id="btnAdd"]');
    await page.$eval('input[id="btnAdd"]', elem => elem.click());

    await page.waitForSelector('input[id="firstName"]');
    await page.type('input[id="firstName"]',lead.firstName);
    const fname = await page.evaluate(() => document.querySelector('input[id="firstName"]').value);
    console.log(fname); // print firstname
    

    await page.type('input[id="lastName"]',lead.lastName);
    const lname = await page.evaluate(() => document.querySelector('input[id="lastName"]').value);
    console.log(lname); // print lastname
    

    // await page.waitForSelector('input[id="photofile"]');
    // await page.click('input[id="photofile"]');
    // const input = await page.$('input[type=file]');
    // await input.uploadFile(`${process.cwd() }//Photograph.jpeg`);

    await page.waitForSelector('input[id="btnSave"]');
    await page.click('input[id="btnSave"]');

    await page.waitForSelector('a[id="menu_admin_viewAdminModule"]');
    await page.click('a[id="menu_admin_viewAdminModule"]');

    await page.waitForSelector('input[id="btnAdd"]');
    await page.click('input[id="btnAdd"]');

    await page.waitForSelector('select[name="systemUser[userType]"]');
    const selectElem1 = await page.$('select[name="systemUser[userType]"]');
    await selectElem1.type('Admin');

    await page.waitForSelector('input[id="systemUser_employeeName_empName"]');
    await page.type('input[id="systemUser_employeeName_empName"]',`${fname} ${lname}`); // enter firstname and last name
    await page.screenshot({ path: './screenshots/${screenshotname2}.png' });

    await page.waitForSelector('input[id="systemUser_userName"]');
    await page.type('input[id="systemUser_userName"]',`${fname}`);


    await page.waitForSelector('select[id="systemUser_status"]');
    const status=await page.$('select[id="systemUser_status"]');
    await status.type('Enabled');

    await page.waitForSelector('input[id="systemUser_password"]');
    await page.type('input[id="systemUser_password"]','Passwordpassword1');

    await page.waitForSelector('input[id="systemUser_confirmPassword"]');
    await page.type('input[id="systemUser_confirmPassword"]','Passwordpassword1');


    // eslint-disable-next-line no-template-curly-in-string
    await page.screenshot({ path: './screenshots/${screenshotname3}.png' });

    await page.waitForSelector('input[id="btnSave"]');
    await page.$eval('input[id="btnSave"]', elem => elem.click());

    await page.waitForSelector('a[id="welcome"]');
    await page.click('a[id="welcome"]');

    await page.waitForSelector('#welcome-menu > ul > li:nth-child(3) > a');
    await page.click('#welcome-menu > ul > li:nth-child(3) > a');

    // eslint-disable-next-line no-template-curly-in-string
    await page.screenshot({ path: './screenshots/${screenshotname4}.png' });

    await page.type('input[id="txtUsername"]', 'Admin');
    await page.type('input[id="txtPassword"]', 'admin123');
    await page.click('input[id="btnLogin"]');
   
    await browser.close();

  });

  it('Create admin', async () => {
    
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true,
      slowMo: 100,
    });
    const page = await browser.newPage();
    const url = 'https://opensource-demo.orangehrmlive.com/';
    await page.goto(url);

    await page.type('input[id="txtUsername"]', 'Admin');
    await page.type('input[id="txtPassword"]', 'admin123');
    await page.click('input[id="btnLogin"]');


    // Print value of div
    await page.waitForSelector('#pieLabel0 > div');
    await page.click('span[id="pieLabel0"]');
    const textOfDiv = await page.evaluate(() => document.querySelector('#pieLabel0 > div').textContent);
    console.log(textOfDiv);

    await browser.close();


  });

});

