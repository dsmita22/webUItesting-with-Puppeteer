const puppeteer = require( 'puppeteer' );
const path = require('path');
jest.setTimeout( 60000 );

describe('Test', () => {
    let filePath;
    it('Test file upload', async () => {
        // filePath = path.join(__dirname,'../Smita_Dutta_Resume.docx');
        
        const browser =await puppeteer.launch({
            headless: true,
            slowMo: 300
          });
          const page = await browser.newPage();
          const url ='https://www.livecareer.com/resume-check';
          await page.goto(url);
        
          await page.waitForSelector('input[id="RadUpload1file0"]');
          await page.click('input[id="RadUpload1file0"]');
          const input = await page.$("input[type=file]");
          await input.uploadFile(process.cwd()+ "//Smita_Dutta_Resume.docx");
          //for windows system
         //  await input.uploadFile(process.cwd()+ "\\Smita_Dutta_Resume.docx");
          await page.screenshot({path:'upload.png'});

    await browser.close();
    });
});