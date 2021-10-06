import Product from "../types/Product";
import Sku from "../types/Sku";

class ProductHelper {
  product: Product;

  constructor(product: Product) {
    this.product = product;
  }

  getColors(): string[] {
    let colors = [] as string[];

    if (this.product.childSkus !== undefined) {
      this.product.childSkus.forEach((sku) => {
        if (!colors.includes(sku.color)) {
          colors.push(sku.color);
        }
      });
    }

    return colors;
  }

  getSizes(color: string): string[] {
    let sizes = [] as string[];

    if (this.product.childSkus !== undefined) {
      this.product.childSkus.forEach((sku) => {
        if (sku.color === color) {
          sizes.push(sku.size);
        }
      });
    }

    return sizes;
  }

  getSku(color: string, size: string): Sku {
    var foundSku = {} as Sku;
    if (this.product.childSkus !== undefined) {
      this.product.childSkus.forEach((sku) => {
        if (sku.color === color && sku.size === size) {
          foundSku = sku;
        }
      });
    }
    return foundSku;
  }
}

export default ProductHelper;
