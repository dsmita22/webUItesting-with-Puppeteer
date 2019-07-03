const puppeteer = require( 'puppeteer' );

jest.setTimeout( 60000 );

/**describe( 'Test search engines', () => {
    it( 'should be titled "Google"', async () => {
        const args = ['--no-sandbox'];
        const browser = await puppeteer.launch({
            args,
            headless: false
        });
        const page = await browser.newPage();
        await page.goto( 'https://google.com' );
        let title= await page.title();
        if ( title === 'Google' ) {
            console.log( 'test passed' );
        } else {
            console.log( 'test failed' );
        }
        await page.waitFor( 3000 );
        await browser.close();
    });
}); */

test ('', async () => {
    const browser =await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    const url ='https://www.makemytrip.com/';
    await page.goto(url);
    await page.click('div[class="makeFlex column flexOne whiteText latoBold"]');
    await page.click('a[class="latoBlack"]');
    await page.type('input[id="emailOrPhone"]','test@gmail.com' );
    await page.type('input[id="password"]','test@123' );
    await page.click('button[class="capText font16"]');

    
    await browser.close();
});