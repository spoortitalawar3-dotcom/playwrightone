import {test} from "@playwright/test";


test("notification",async({browser})=>{
let context=await browser.newContext({permissions:['notifications']});
let page=await context.newPage();
await page.goto("https://pushalert.co/demo");
await page.locator("//button[@id='send-button']").click();
let res=await page.evaluate(()=>{
    return Notification.requestPermission()
})
await console.log(`permission ${res}`)


})