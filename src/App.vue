<template>
  <div class="bg-lightpink min-h-screen text-gray-800 font-sans">
    <Navbar />
    <router-view />
  </div>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
