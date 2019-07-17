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
describe.skip('Test', () => {
 
    it('', async () => {
        const browser =await puppeteer.launch({
            headless: false

    });
  
    const page = await browser.newPage();
    //await page.setViewport()
    const url ='https://www.gumtree.com.au/t-login-form.html?pr=true';
    await page.goto(url);

    await page.type('input[id="login-email"]','dsmita22@gmail.com');
    await page.waitForSelector('input[id="login-password"]',{visible:true});
    await page.type('input[id="login-password"]','Test@123456789');
    await page.click('button[id="btn-submit-login"]');
   // await page.waitForSelector('a[class="header__post-ad-button new-listing-button h-url"]',{visible:true});
    await page.click('#header-new > div > div.header__top-layer > div.header__upper-deck-wrapper > div.header__desktop-post-ad-button.header__mobile-post-ad-button--cars-landing.mobile-menu-items-wrapper > div > a');
    await page.type('input[id="title"]','dinning table');
    await page.click('a[id="cat_18397"]');
  //  await page.type('input[id="pstad-price"]','20');

  

    await page.click('button[id="btn-register"]');

    
    await browser.close();


});
});
