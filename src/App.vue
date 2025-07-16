<template>
  <div class="bg-lightpink min-h-screen text-gray-800 font-sans">
    <Navbar />
    <transition name="slide" mode="out-in">
        <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
