<!-- src/components/UserForm.vue -->
<template>
  <div class="mb-4">
    <h2 class="text-lg font-bold mb-2">
      {{ isEditing ? "Edit User" : "Add User" }}
    </h2>
    <form @submit.prevent="handleSubmit">
      <fwb-input
        class="mb-2"
        label="First name"
        v-model="user.firstName"
        placeholder="Enter first name"
        type="text"
        aria-required="true"
      />
      <fwb-input
        class="mb-2"
        label="First name"
        v-model="user.lastName"
        placeholder="Enter last name"
        type="text"
        aria-required="true"
      />
      <fwb-input
        class="mb-2"
        label="Email"
        v-model="user.email"
        placeholder="Enter email"
        type="email"
        aria-required="true"
      />

      <div class="flex gap-2">
        <fwb-button
          type="submit"
          :disabled="!user.firstName || !user.lastName || !user.email"
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
import { useUserStore } from "../../stores/userStore";
import { FwbInput, FwbButton } from "flowbite-vue";

const props = defineProps<{
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  } | null;
  isEditing: boolean;
}>();

const emit = defineEmits();
const userStore = useUserStore();
const user = ref({ firstName: "", lastName: "", email: "" });

watch(
  () => props.user,
  (newVal) => {
    if (newVal) {
      user.value = { ...newVal };
    } else {
      user.value = { firstName: "", lastName: "", email: "" };
    }
  }
);

const handleSubmit = async () => {
  if (props.isEditing) {
    await userStore.updateUser({ ...user.value, id: props.user!.id });
  } else {
    await userStore.addUser(user.value);
  }
  resetForm();
};

const resetForm = () => {
  user.value = { firstName: "", lastName: "", email: "" };
  emit("reset");
};
</script>
