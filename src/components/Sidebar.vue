<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbNavbarLogo,
  FwbSidebar,
  FwbSidebarItem,
  FwbButton,
} from "flowbite-vue";
</script>

<template>
  <div class="left-0 fixed hidden xl:block">
    <fwb-sidebar>
      <fwb-sidebar-item link="/">Home</fwb-sidebar-item>
      <fwb-sidebar-item link="/products">Products</fwb-sidebar-item>
      <fwb-sidebar-item link="/users">Users</fwb-sidebar-item>
      <fwb-sidebar-item link="/about"> About </fwb-sidebar-item>
    </fwb-sidebar>
  </div>
</template>
