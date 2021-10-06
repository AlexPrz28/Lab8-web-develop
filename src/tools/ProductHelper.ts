import Product from "../types/Product";

class ProductHelper {
  product: Product;

  constructor(product: Product) {
      this.product = product;
  }

  getColors() : string[] {
    let colors = [] as string[];

    if (this.product.childSkus !== undefined) {
        this.product.childSkus.forEach( (sku) => {
            colors.push(sku.color);
        });
    }

    return colors;   
  }

  getSizes(color : string) : string[] {
    let sizes = [] as string[];

    if (this.product.childSkus !== undefined) {
        this.product.childSkus.forEach( (sku) => {
            if (sku.color === color) {
                sizes.push(sku.size);
            }
        });
    }

    return sizes;   
  }
}

export default ProductHelper;