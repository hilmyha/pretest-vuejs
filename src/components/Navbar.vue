<template>
  <div class="p-4 bg-[white] shadow-sm border-b z-50 sticky top-0">
    <div class="flex justify-between items-center">
      <fwb-navbar-logo class="text-slate-700"  image-url="../src/assets/logo2.svg" link="/"
        >simplestore.</fwb-navbar-logo
      >
    </div>
  </div>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
} from "flowbite-vue";
import { ref } from "vue";
</script>