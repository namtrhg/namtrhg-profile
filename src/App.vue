<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar/NavigationBar.vue'
import FooterSection from './components/FooterSection/FooterSection.vue'
</script>

<template>
  <div class="bg-[#F3F3F3]">
    <div class="lg:w-[1440px] mx-auto lg:pt-[102px] lg:pb-[70px] px-4 lg:px-40 font-dm">
      <header>
        <NavigationBar />
      </header>
      <body>
        <RouterView />
      </body>
      <footer>
        <FooterSection />
      </footer>
    </div>
  </div>
</template>
