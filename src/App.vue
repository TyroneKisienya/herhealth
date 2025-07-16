<template>
  <div class="bg-lightpink min-h-screen text-gray-800 font-sans">
    <Navbar />
    <Home />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './pages/Home.vue';
</script>
