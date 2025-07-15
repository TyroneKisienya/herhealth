<template>
  <section>
    <article v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
    </article>
  </section>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'Understanding PMDD',
    description: 'An overview of Premenstrual Dysphoric Disorder, symptoms, and support options.'
  },
  {
    id: 2,
    title: 'Mental Health Self-Care Tips',
    description: 'How to practice daily self-care to support your mental wellness.'
  },
  {
    id: 3,
    title: 'Talking to Your Doctor About Hormonal Health',
    description: 'What to ask, how to prepare, and building confidence in your care.'
  }
]
</script>
