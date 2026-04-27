export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.menuInventory = page.locator('#menu_inventory');
    this.addStockBtn = page.locator('#addStock');
    this.productDropdown = page.locator('#productSelect');
    this.quantityInput = page.locator('#quantity');
    this.saveBtn = page.locator('#saveStock');
  }

  async addStock(productName, qty) {
    await this.menuInventory.click();
    await this.addStockBtn.click();
    await this.productDropdown.selectOption({ label: productName });
    await this.quantityInput.fill(qty);
    await this.saveBtn.click();
  }
}