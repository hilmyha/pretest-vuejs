<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Users List</h1>

    <fwb-table>
      <fwb-table-head>
        <fwb-table-head-cell>#</fwb-table-head-cell>
        <fwb-table-head-cell>First Name</fwb-table-head-cell>
        <fwb-table-head-cell>Last Name</fwb-table-head-cell>
        <fwb-table-head-cell>Email</fwb-table-head-cell>
        <fwb-table-head-cell v-if="showActions">
          <span class="sr-only">Action</span>
        </fwb-table-head-cell>
      </fwb-table-head>
      <fwb-table-body>
        <fwb-table-row v-if="userStore.loading">
          <fwb-table-cell colspan="5" class="text-center"
            >Loading...</fwb-table-cell
          >
        </fwb-table-row>
        <fwb-table-row v-for="user in userStore.users" :key="user.id">
          <fwb-table-cell>{{ user.id }}</fwb-table-cell>
          <fwb-table-cell class="cursor-pointer hover:text-blue-500" @click="selectUser(user)">{{
            user.firstName
          }}</fwb-table-cell>
          <fwb-table-cell>{{ maskLastName(user.lastName) }}</fwb-table-cell>
          <fwb-table-cell>{{ user.email }}</fwb-table-cell>
          <fwb-table-cell class="flex gap-1 justify-end" v-if="showActions">
            <fwb-button @click="editUser(user)" color="green">Edit</fwb-button>
            <fwb-button @click="deleteUser(user.id)" color="red"
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
import { useRouter } from "vue-router";
import { useUserStore } from "../../stores/userStore";
import { defineEmits, defineProps } from "vue";

const router = useRouter();
const props = defineProps<{
  showActions: boolean;
}>();
const userStore = useUserStore();
const emit = defineEmits();

const editUser = (user) => {
  emit("edit", user);
};

const selectUser = (user) => {
  emit("select", user);
  router.push({ path: `/user/${user.id}` });
};

const deleteUser = async (userId) => {
  await userStore.deleteUser(userId);
};

const maskLastName = (lastName) => {
  return lastName.replace(/./g, "•");
};

userStore.fetchUsers();
</script>
