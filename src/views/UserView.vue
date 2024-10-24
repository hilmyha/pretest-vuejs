<!-- src/views/UserView.vue -->
<template>
  <UserForm
    :user="selectedUser"
    :isEditing="selectedUser !== null"
    @reset="resetUser"
  />
  <UserTable class="mt-8" @edit="editUser" :showActions="true" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserForm from "../components/forms/UserForm.vue";
import UserTable from "../components/tables/UserTable.vue";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();
const selectedUser = ref(null);

// Reset selected user to null
const resetUser = () => {
  selectedUser.value = null;
};

// Set the selected user for editing
const editUser = (user) => {
  selectedUser.value = user;
};
</script>
