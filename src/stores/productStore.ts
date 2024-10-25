// src/stores/productStore.ts
import axios from "axios";
import { defineStore } from "pinia";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
}

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Product[],
    loading: false,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      const response = await axios.get("https://dummyjson.com/products");
      this.products = response.data.products;
      this.loading = false;
    },
    async addProduct(newProduct: Omit<Product, "id">) {
      const response = await axios.post(
        "https://dummyjson.com/products/add",
        newProduct
      );
      this.products.push(response.data);
    },
    async updateProduct(updatedProduct: Product) {
      await axios.put(
        `https://dummyjson.com/products/${updatedProduct!.id}`,
        updatedProduct
      );
      const index = this.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      if (index !== -1) {
        this.products[index] = updatedProduct;
      }
    },
    async deleteProduct(productId: number) {
      await axios.delete(`https://dummyjson.com/products/${productId}`);
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    },
  },
});
