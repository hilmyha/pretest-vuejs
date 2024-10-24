<!-- src/components/ProductForm.vue -->
<template>
  <div class="mb-4">
    <h2 class="text-lg font-bold mb-2">
      {{ isEditing ? "Edit Product" : "Add Product" }}
    </h2>
    <form @submit.prevent="handleSubmit">
      <fwb-input
        class="mb-2"
        label="Title"
        v-model="product.title"
        placeholder="Enter product title"
        type="text"
        aria-required="true"
      />
      <fwb-input
        class="mb-2"
        label="Category"
        v-model="product.category"
        placeholder="Enter category"
        type="text"
        aria-required="true"
      />
      <fwb-input
        class="mb-2"
        label="Description"
        v-model="product.description"
        placeholder="Enter product description"
        type="text"
        aria-required="true"
      />
      <fwb-input
        class="mb-2"
        label="Price"
        v-model="product.price"
        placeholder="Enter product price"
        type="text"
        aria-required="true"
      />
      <fwb-input
        class="mb-2"
        label="Rating"
        v-model="product.rating"
        placeholder="Enter rating"
        type="text"
        aria-required="true"
      />

      <div class="flex gap-2">
        <fwb-button
          type="submit"
          :disabled="
            !product.title ||
            !product.category ||
            !product.description ||
            !product.price ||
            !product.rating
          "
          color="default"
        >
          {{ isEditing ? "Update" : "Create" }}
        </fwb-button>
        <fwb-button v-if="isEditing" @click.prevent="resetForm" color="red">
          Cancel
        </fwb-button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch, defineEmits } from "vue";
import { useProductStore } from "../../stores/productStore";
import { FwbInput, FwbButton } from "flowbite-vue";

const props = defineProps<{
  product: {
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    rating: number;
  } | null;
  isEditing: boolean;
}>();

const emit = defineEmits();
const productStore = useProductStore();
const product = ref({
  title: "",
  category: "",
  description: "",
  price: 0,
  rating: 0,
});

watch(
  () => props.product,
  (newVal) => {
    console.log("New product received:", newVal); // Debugging
    if (newVal) {
      product.value = { ...newVal };
    } else {
      product.value = {
        title: "",
        category: "",
        description: "",
        price: 0,
        rating: 0,
      };
    }
  }
);

const handleSubmit = async () => {
  if (props.isEditing) {
    await productStore.updateProduct({ ...product.value, id: props.product!.id });
  } else {
    await productStore.addProduct(product.value);
  }
  resetForm();
};

const resetForm = () => {
  product.value = {
    title: "",
    category: "",
    description: "",
    price: 0,
    rating: 0,
  };
  emit("reset");
};
</script>
