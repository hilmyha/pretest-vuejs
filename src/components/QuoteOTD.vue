<template>
  <div class="w-full flex p-10 bg-slate-200 rounded-xl">
    <div v-if="quoteStore?.quotes" class="mt-4 w-[600px]">
      <p class="text-xl font-semibold italic">
        “{{ quoteStore.quotes?.quote }}”
      </p>
      <p class="mt-4 text-sm text-gray-500">𑁋 {{ quoteStore.quotes?.author }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuoteStore } from "../stores/quoteStore";
import { onMounted } from "vue";

const quoteStore = useQuoteStore();

onMounted(async () => {
  await quoteStore.fetchQuotes();
});
</script>
