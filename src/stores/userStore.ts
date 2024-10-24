// src/stores/userStore.ts
import axios from "axios";
import { defineStore } from "pinia";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [] as User[],
    loading: false,
    selectedUser: null as User | null,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true;
      const response = await axios.get("https://dummyjson.com/users");
      this.users = response.data.users;
      this.loading = false;
    },
    async addUser(newUser: Omit<User, "id">) {
      const response = await axios.post(
        "https://dummyjson.com/users/add",
        newUser
      );
      this.users.push(response.data);
    },
    async updateUser(updatedUser: User) {
      await axios.put(
        `https://dummyjson.com/users/${updatedUser.id}`,
        updatedUser
      );
      const index = this.users.findIndex((user) => user.id === updatedUser.id);
      if (index !== -1) {
        this.users[index] = updatedUser;
      }
    },
    async deleteUser(userId: number) {
      await axios.delete(`https://dummyjson.com/users/${userId}`);
      this.users = this.users.filter((user) => user.id !== userId);
    },
    async fetchUserById(userId: number) {
      this.loading = true; // Set loading state
      const response = await axios.get(`https://dummyjson.com/users/${userId}`);
      this.selectedUser = response.data; // Simpan pengguna yang dipilih
      this.loading = false; // Reset loading state
    },
  },
});
