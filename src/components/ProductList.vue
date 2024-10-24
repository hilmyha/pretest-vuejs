<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Recent Products</h1>
    <div class="w-full flex justify-center" v-if="productStore.loading">
      <fwb-spinner size="12" color="green" />
    </div>
    <div class="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <fwb-card
        variant="horizontal"
        class="w-full"
        href="#"
        v-for="product in productStore.products.slice(9, 15)"
        :key="product.id"
      >
        <div class="p-5 space-y-4">
          <div class="w-full xl:h-[250px] overflow-hidden">
            <img :src="product.thumbnail" class="w-full" alt="" />
          </div>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ product.title }}
          </h5>
          <p class="text-sm text-gray-500 capitalize">
            {{ product.category }}
          </p>
          <p class="font-normal text-gray-700">
            {{ product.description }}
          </p>
          <p class="text-xl font-semibold underline text-gray-700">
            $ {{ product.price }}
          </p>
          <fwb-rating :rating="product.rating" />
        </div>
      </fwb-card>
    </div>
  </div>
</template>

<script setup>
import { FwbCard, FwbSpinner, FwbRating } from "flowbite-vue";
import { useProductStore } from "../stores/productStore";
const productStore = useProductStore();
productStore.fetchProducts();
</script>
