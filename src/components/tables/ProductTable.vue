<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Product List</h1>

    <fwb-table>
      <fwb-table-head>
        <fwb-table-head-cell>#</fwb-table-head-cell>
        <fwb-table-head-cell>Title</fwb-table-head-cell>
        <fwb-table-head-cell>Category</fwb-table-head-cell>
        <fwb-table-head-cell>Desc</fwb-table-head-cell>
        <fwb-table-head-cell>Price</fwb-table-head-cell>
        <fwb-table-head-cell>Rating</fwb-table-head-cell>
        <fwb-table-head-cell v-if="showActions">
          <span class="sr-only">Action</span>
        </fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row v-if="productStore.loading">
          <fwb-table-cell colspan="5" class="text-center"
            >Loading...</fwb-table-cell
          >
        </fwb-table-row>
        <fwb-table-row
          v-for="product in productStore.products"
          :key="product.id"
        >
          <fwb-table-cell>{{ product.id }}</fwb-table-cell>
          <fwb-table-cell>{{ product.title }}</fwb-table-cell>
          <fwb-table-cell>{{ product.category }}</fwb-table-cell>
          <fwb-table-cell>{{ product.description }}</fwb-table-cell>
          <fwb-table-cell>{{ product.price }}</fwb-table-cell>
          <fwb-table-cell>{{ product.rating }}</fwb-table-cell>
          <fwb-table-cell class="flex gap-1 justify-end" v-if="showActions">
            <fwb-button @click="editProduct(product)" color="green"
              >Edit</fwb-button
            >
            <fwb-button @click="deleteProduct(product.id)" color="red"
              >Delete</fwb-button
            >
          </fwb-table-cell>
        </fwb-table-row>
      </fwb-table-body>
    </fwb-table>
  </div>
</template>

<script setup lang="ts">
import {
  FwbA,
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from "flowbite-vue";
import { FwbButton } from "flowbite-vue";
import { useProductStore } from "../../stores/productStore";
import { defineEmits, defineProps } from "vue";

const props = defineProps<{
  showActions: boolean;
}>();
const productStore = useProductStore();
const emit = defineEmits();

const editProduct = (product) => {
  // console.log("Edit product:", product);
  emit("edit", product);
};

const deleteProduct = async (productId) => {
  await productStore.deleteProduct(productId);
};

productStore.fetchProducts();
</script>
