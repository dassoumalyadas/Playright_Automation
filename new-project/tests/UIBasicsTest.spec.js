const {test, expect}=require('@playwright/test');

test("Browser context Playright test",async ({browser})=>{
    //Playright code.
    const context=await browser.newContext();
    const page=await(await context).newPage();
    await page.goto("http://google.com");
    console.log(await page.title());
    //assertion
    await expect.toHaveTitle("Google")

});

test("Page Playright test",async ({page})=>{
    //Playright code without browser context.
    await page.goto("http://bing.com");
});