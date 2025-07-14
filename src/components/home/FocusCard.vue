<template>
  <article>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>
