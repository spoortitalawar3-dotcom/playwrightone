import {test as base} from "@playwright/test"
import { orangeHrmLoginPage } from "../pages/orangehrm/orangeLogin"
import { orangeHrmHomepage } from "../pages/auth/homepage";

export let test=base.extend({
    orangeLn:async({page},use)=>{
       let login= new orangeHrmLoginPage(page);
       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       await login.loginwithcredentials();
       await use(login)
     
    },
     logout:async({page,orangeLn},use)=>{
           
           let hm= new orangeHrmHomepage(page)
            await use();
           await hm.logoutmethod();
        }
})
export { expect } from "@playwright/test";