<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="flex flex-1">
      <Sidebar />
      <main class="container flex-1  xl:ml-80 px-6 py-12">
        <RouterView />
      </main>
    </div>
    <Footer />
  </div>
</template>
