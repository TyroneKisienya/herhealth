<template>
  <section>
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email" required />

      <label for="message">Message</label>
      <textarea id="message" v-model="message" required></textarea>

      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  alert(`Thank you, ${name.value}! We'll get in touch.`)
  // In future: send this to Formspree, EmailJS, or a backend
}
</script>
