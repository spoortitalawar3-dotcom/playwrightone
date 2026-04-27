export class ProductPage {
  constructor(page) {
    this.page = page;
    this.addProductBtn = page.locator('#addProduct');
    this.productName = page.locator('#productName');
    this.saveBtn = page.locator('#saveProduct');
  }

  async addProduct(name) {
    await this.addProductBtn.click();
    await this.productName.fill(name);
    await this.saveBtn.click();
  }
}