<!-- src/views/ProductView.vue -->
<template>
  <ProductForm
    :product="selectedProduct"
    :isEditing="selectedProduct !== null"
    @reset="resetProduct"
  />
  <ProductTable class="mt-8" @edit="editProduct" :showActions="true" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductForm from "../components/forms/ProductForm.vue";
import ProductTable from "../components/tables/ProductTable.vue";
import { useProductStore } from "../stores/productStore";

const productStore = useProductStore();
const selectedProduct = ref(null);

// Reset selected product to null
const resetProduct = () => {
  selectedProduct.value = null;
};

// Set the selected product for editing
const editProduct = (product) => {
  console.log("Selected product for editing:", product.id);
  selectedProduct.value = product;
};
</script>
