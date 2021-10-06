import ProductAPI from "./ProductAPI";

class ProductService {
  getAll() {
    return ProductAPI.get("/products");
  }

  get(id: number) {
    return ProductAPI.get(`/products/${id}`);
  }
}

export default new ProductService();
