<template>
  <div>
    <h2 class="text-lg font-bold">
      {{ userStore.selectedUser?.firstName }}
      {{ userStore.selectedUser?.lastName }}
    </h2>
    <p>Email: {{ userStore.selectedUser?.email }}</p>
    <button @click="goBack" class="bg-blue-500 text-white px-4 py-2 rounded">
      Go Back
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";
import { onMounted } from "vue";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const userId = Number(route.params.id);

onMounted(async () => {
  await userStore.fetchUserById(userId);
});

const goBack = () => {
  router.go(-1);
};
</script>
