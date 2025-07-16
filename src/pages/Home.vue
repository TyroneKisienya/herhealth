<template>
  <main class="text-gray-800 font-sans">
    <!--Hero-->
    <section id="home" class="scroll-mt-24 pb-50">
      <HeroSection />
    </section>
    <!-- Mission -->
     <section>
      <MissionSection />
     </section>
    <!-- Focus -->
    <section>
      <FocusAreas />
    </section>

    <!-- About -->
    <section id="about" class="scroll-mt-24 pb-40">
      <PageHeader />
      <AboutFocusAreas />
      <HelpMethods />
      <TeamSection />
    </section>

    <!-- Blog -->
    <section id="blog" class="scroll-mt-24 pb-30">
      <BlogList />
    </section>

    <!-- GetInvolved -->
     <section id="get-involved" class="scroll-mt-24 pb-20">
      <GetInvolvedForm />
      <ContactInfo />
     </section>
  </main>
</template>

<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import MissionSection from '@/components/home/MissionSection.vue'
import FocusAreas from '@/components/home/FocusAreas.vue'
import PageHeader from '@/components/about/PageHeader.vue'
import { h } from 'vue'
import HelpMethods from '@/components/about/HelpMethods.vue'
import TeamSection from '@/components/about/TeamSection.vue'
import AboutFocusAreas from '@/components/about/AboutFocusAreas.vue'
import GetInvolvedForm from '@/components/getinvolved/GetInvolvedForm.vue'
import ContactInfo from '@/components/getinvolved/ContactInfo.vue'
import BlogList from '@/components/blog/BlogList.vue'
</script>
