const {test, expect}=require('@playwright/test');

test.only("Browser context Playright test",async ({browser})=>{
    
    const context=await browser.newContext();
    const page=await(await context).newPage();
    const username=page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    //assertion
    //await expect.toHaveTitle("Google")
    //Playwright pre-dominantly support css 
    await username.type("rahulshetty");
    await page.locator('#password').type("learning");
    await page.locator('#signInBtn').click();
    //here locator will wait automatically to get the message.
    console.log(await page.locator("[style*='block']").textContent());
    //assertions    
    await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
    await username.fill("rahulshettyacademy ");
    await page.locator('#signInBtn').click();
});

test("Page Playright test",async ({page})=>{
    //Playright code without browser context.
    await page.goto("http://bing.com");
});