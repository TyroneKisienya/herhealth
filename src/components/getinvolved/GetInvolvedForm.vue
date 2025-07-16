<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-xl mx-auto bg-lightpink p-8 rounded-md shadow-md">
      <h2 class="text-2xl font-bold text-purple mb-6 text-center">Contact Us</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1" for="name">Name</label>
          <input
            v-model="name"
            id="name"
            type="text"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-1" for="email">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-1" for="message">Message</label>
          <textarea
            v-model="message"
            id="message"
            rows="5"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-pink text-white px-6 py-2 rounded hover:bg-purple transition w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  alert(`Thank you, ${name.value}! Your message has been received.`)
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>
