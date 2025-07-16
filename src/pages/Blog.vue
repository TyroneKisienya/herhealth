<template>
  <main class="bg-white text-gray-800 font-sans">
    <header class="bg-softpurple text-center py-16 px-4">
      <h1 class="text-4xl font-bold text-purple mb-4">HerHealth Blog & Resources</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        Explore articles and practical resources to support your health journey.
      </p>
    </header>

    <BlogList />
  </main>
</template>

<script setup>
import BlogList from '@/components/blog/BlogList.vue'
</script>
