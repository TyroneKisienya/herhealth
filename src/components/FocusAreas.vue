<template>
  <section aria-labelledby="focus-heading">
    <h2 id="focus-heading">Our Focus Areas</h2>
    <div class="focus-grid">
      <FocusCard
        title="PMDD"
        description="Premenstrual Dysphoric Disorder support and education"
      />
      <FocusCard
        title="Mental Health"
        description="Resources for women's mental wellbeing"
      />
      <FocusCard
        title="Reproductive Health"
        description="Information about reproductive health issues"
      />
    </div>
  </section>
</template>

<script setup>
import FocusCard from './FocusCard.vue'
</script>
