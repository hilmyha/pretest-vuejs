<script setup lang="ts">
import UserTable from "../components/tables/UserTable.vue";
import ProductTable from "../components/tables/ProductTable.vue";
import ProductList from "../components/ProductList.vue";
import QuoteOTD from "../components/QuoteOTD.vue";
</script>

<template>
  <main class="grid gap-10">
    <QuoteOTD />
    <ProductList />
  </main>
</template>
