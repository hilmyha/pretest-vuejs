// src/stores/quoteStore.ts
import axios from "axios";
import { defineStore } from "pinia";

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export const useQuoteStore = defineStore("quote", {
  state: () => ({
    quotes: [] as Quote[],
    loading: false,
  }),
  actions: {
    async fetchQuotes() {
      this.loading = true;
      const response = await axios.get("https://dummyjson.com/quotes/random");
      this.quotes = response.data;
      console.log(this.quotes);
      
      this.loading = false;
    },
  },
});
