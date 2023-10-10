<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()

function isActive(route: string): boolean {
  return router.currentRoute.value.path === route;
}
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end mb-20 lg:mb-[223px]">
    <h1 class="text-3xl font-bold">Nam Tr.</h1>
    <nav class="space-x-8 text-xl leading-6 tracking-tighter">
      <RouterLink :class="{ underline: isActive('/') }" to="/">Work</RouterLink>
      <RouterLink :class="{ underline: isActive('/about') }" to="/about">About</RouterLink>
      <!-- <RouterLink :class="{ underline: isActive('/contact') }" to="/contact">Contact</RouterLink> -->
    </nav>
  </div>
</template>