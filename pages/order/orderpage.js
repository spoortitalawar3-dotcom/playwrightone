export class OrderPage {
  constructor(page) {
    this.page = page;
    this.menuOrder = page.locator('#menu_order');
    this.createOrderBtn = page.locator('#createOrder');
    this.productSelect = page.locator('#orderProduct');
    this.quantity = page.locator('#orderQty');
    this.placeOrderBtn = page.locator('#placeOrder');
  }

  async createOrder(product, qty) {
    await this.menuOrder.click();
    await this.createOrderBtn.click();
    await this.productSelect.selectOption({ label: product });
    await this.quantity.fill(qty);
    await this.placeOrderBtn.click();
  }
}