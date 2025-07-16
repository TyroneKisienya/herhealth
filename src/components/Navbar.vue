<template>
  <nav class="bg-lightpink shadow-md">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo / Brand -->
      <router-link to="/" class="text-purple text-xl font-bold">HerHealth</router-link>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex gap-6 text-sm font-medium text-purple">
        <li><a href="#home" class="hover:text-pink">Home</a></li>
        <li><a href="#about" class="hover:text-pink">About</a></li>
        <li><a href="#get-involved" class="hover:text-pink">Get Involved</a></li>
        <li><a href="#blog" class="hover:text-pink">blog</a></li>
      </ul>

      <!-- Hamburger Button (mobile) -->
      <button
        class="md:hidden focus:outline-none"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-purple"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-purple"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="md:hidden bg-lightpink px-4 pb-4 space-y-3 text-purple text-sm font-medium"
    >
      <router-link to="/" class="block hover:text-pink" @click="isOpen = false">Home</router-link>
      <router-link to="/about" class="block hover:text-pink" @click="isOpen = false">About</router-link>
      <router-link to="/get-involved" class="block hover:text-pink" @click="isOpen = false">Get Involved</router-link>
      <router-link to="/blog" class="block hover:text-pink" @click="isOpen = false">Blog</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
