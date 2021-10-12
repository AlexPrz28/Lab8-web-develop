import React from "react";
import ProductInfo from "../../components/ProductInfo";
import ProductService from "../../services/ProductService";
import ProductHelper from "../../tools/ProductHelper";
import Product from "../../types/Product";
import Sku from "../../types/Sku";

interface ProductState {
  product: Product;
  helper: ProductHelper;
  colors: string[];
  selectedColor: string;
  sizes: string[];
  selectedSize: string;
  quantity: number;
  sku: Sku;
}

/**
 * Product Detail Container
 * @extends {Component<Props, State>}
 */
class ProductDetail extends React.Component<{}, ProductState> {
  state = {
    product: {} as Product,
    helper: {} as ProductHelper,
    colors: [] as string[],
    selectedColor: "",
    sizes: [] as string[],
    selectedSize: "",
    quantity: 1,
    sku: {} as Sku,
  };

  /**
   * Renders the container.
   * @return {any} - HTML markup for the container
   */
  render() {
    return (
      <ProductInfo
        product={this.state.product}
        colors={this.state.colors}
        selectedColor={this.state.selectedColor}
        changedColor={this.changedColor}
        sizes={this.state.sizes}
        selectedSize={this.state.selectedSize}
        changedSize={this.changedSize}
        sku={this.state.sku}
        logSku={this.logSku}
      />
    );
  }

  componentDidMount() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = Number(urlParams.get("productId"));

    ProductService.get(productId)
      .then((response) => {
        const product = response.data;
        console.log(product);
        const helper = new ProductHelper(product);
        const colors = helper.getColors();
        let sizes = [] as string[];

        if (colors.length >= 1) {
          const defaultSelectedColor = colors[0];
          sizes = helper.getSizes(colors[0]);

          if (sizes.length >= 1) {
            const defaultSelectedSize = sizes[0];
            this.setState({ selectedSize: defaultSelectedSize });
          }

          this.setState({ selectedColor: defaultSelectedColor });
        }

        console.log("Sizes: " + sizes);

        this.setState({ product, helper, colors, sizes });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changedColor = (event: any) => {
    let target = event.currentTarget as HTMLSelectElement;
    let value = target.value;

    console.log("selectedColor: " + value);

    const helper = this.state.helper;
    const sizes = helper.getSizes(value);

    this.setState({ selectedColor: value, sizes });

    if (sizes.length >= 1) {
      const defaultSelectedSize = sizes[0];
      this.setState({ selectedSize: defaultSelectedSize });
    }
  };

  changedSize = (event: any) => {
    let target = event.currentTarget as HTMLSelectElement;
    let value = target.value;

    console.log("selectedSize: " + value);
    const sku = this.state.helper.getSku(this.state.selectedColor, value);
    this.setState({
      selectedSize: value,
      sku,
    });
  };

  logSku = (event: any) => {
    let printedSku = this.state.helper.getSku(
      this.state.selectedColor,
      this.state.selectedSize
    );
    console.log("Sku ID: " + printedSku.id);

    this.setState({
      sku: printedSku,
    });
  };
}

export default ProductDetail;
