export class orangeHrmLoginPage{
    /**
     * 
     * @param {import ('playwright').Page}page
     */
    constructor(page){
        this.untxtF=page.locator("//input[@placeholder='Username']")
        this.pwdTxtF=page.getByPlaceholder("Password");
        this.loginbtn=page.locator("//button[text()=' Login ']");

    }
    async loginwithcredentials(){
    await  this.untxtF.fill("Admin");
     await this.pwdTxtF.fill("admin123");
     await this.loginbtn.click();
    }
}