export class orangeHrmHomepage{
    /**
     * 
     * @param {import,(playeright).page} page 
     */
    constructor(page){
   this.icondropdownbutton=page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']");
   this.logoutlinkbtn=page.locator("//a[text()='Logout']");

    }
   async logoutmethod(){
       await this.icondropdownbutton.click();
       await this.logoutlinkbtn.click()
    }
}