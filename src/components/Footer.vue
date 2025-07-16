<template>
  <footer class="bg-lightpink text-purple">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-bold mb-2">HerHealth</h2>
        <p class="text-sm text-gray-700">
          Supporting women’s health through education, advocacy, and care.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="font-semibold mb-2">Quick Links</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#home" class="hover:text-pink">Home</a></li>
          <li><a href="#about" class="hover:text-pink">About</a></li>
          <li><a href="#get-involved" class="hover:text-pink">Get Involved</a></li>
          <li><a href="#blog" class="hover:text-pink">blog</a></li>
        </ul>
      </div>

      <!-- Social -->
      <div>
        <h3 class="font-semibold mb-2">Connect</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="#" class="hover:text-pink">Instagram</a></li>
          <li><a href="#" class="hover:text-pink">Facebook</a></li>
          <li><a href="#" class="hover:text-pink">Email</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-purple mt-10 pt-4 text-sm text-center text-gray-600">
      © {{ new Date().getFullYear() }} HerHealth. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// dynamic copyright (optional)
</script>
