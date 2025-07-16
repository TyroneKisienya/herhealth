<template>
  <main class="text-gray-800 font-sans">
    <header class="bg-softpurple text-center py-16 px-4">
      <h1 class="text-4xl font-bold text-purple mb-4">Get Involved</h1>
      <p class="max-w-2xl mx-auto text-lg text-gray-700">
        We’d love to hear from you. Reach out or connect with us through the form or socials below.
      </p>
    </header>

    <GetInvolvedForm />
    <ContactInfo />
  </main>
</template>

<script setup>
import GetInvolvedForm from '@/components/getinvolved/GetInvolvedForm.vue'
import ContactInfo from '@/components/getinvolved/ContactInfo.vue'
</script>
