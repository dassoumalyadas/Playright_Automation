const {test}=require('@playwright/test');

test("Browser context Playright test",async ({browser})=>{
    //Playright code.
    const context=await browser.newContext();
    const page=await(await context).newPage();
    await page.goto("http://google.com");

});

test("Page Playright test",async ({page})=>{
    //Playright code without browser context.
    await page.goto("http://bing.com");
});