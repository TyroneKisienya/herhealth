<template>
  <section class="bg-white py-16 px-4" data-aos="fade-up">
    <div class="max-w-5xl mx-auto">
      <div class="grid gap-8 md:grid-cols-2">
        <article
          v-for="(post, index) in posts"
          :key="post.id"
          class="bg-lightpink rounded-md shadow-md p-6 hover:shadow-lg transition"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <h2 class="text-2xl font-semibold text-purple mb-2">{{ post.title }}</h2>
          <p class="text-gray-700 text-sm">{{ post.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'Understanding PMDD',
    description:
      'An overview of Premenstrual Dysphoric Disorder, symptoms, and support options.'
  },
  {
    id: 2,
    title: 'Mental Health Self-Care Tips',
    description:
      'How to practice daily self-care to support your mental wellness.'
  },
  {
    id: 3,
    title: 'Talking to Your Doctor About Hormonal Health',
    description:
      'What to ask, how to prepare, and building confidence in your care.'
  },
  {
    id: 4,
    title: 'How HerHealth Supports You',
    description:
      'What our programs offer — from community to education to advocacy.'
  }
]
</script>
