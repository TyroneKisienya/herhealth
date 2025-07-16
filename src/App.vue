<template>
  <div class="bg-lightpink min-h-screen text-gray-800 font-sans">
    <Navbar />
    <div class="flex-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
