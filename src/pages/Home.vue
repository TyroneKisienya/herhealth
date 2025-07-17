<template>
  <main class="text-gray-800 font-sans">
    <!-- Hero -->
    <section id="home" data-aos="fade-up">
      <HeroSection />
    </section>

    <!-- Mission -->
    <section data-aos="fade-up" data-aos-delay="100">
      <MissionSection />
    </section>

    <!-- Focus -->
    <section data-aos="fade-up" data-aos-delay="200">
      <FocusAreas />
    </section>

    <!-- About -->
    <section id="about" class="space-y-6">
      <div data-aos="fade-up">
        <PageHeader />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <AboutFocusAreas />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <HelpMethods />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <TeamSection />
      </div>
    </section>

    <!-- Blog -->
    <section id="blog" data-aos="fade-up" data-aos-delay="100">
      <BlogList />
    </section>

    <!-- Get Involved -->
    <section id="get-involved" class="space-y-6">
      <div data-aos="fade-up">
        <GetInvolvedForm />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <ContactInfo />
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import MissionSection from '@/components/home/MissionSection.vue'
import FocusAreas from '@/components/home/FocusAreas.vue'
import PageHeader from '@/components/about/PageHeader.vue'
import HelpMethods from '@/components/about/HelpMethods.vue'
import TeamSection from '@/components/about/TeamSection.vue'
import AboutFocusAreas from '@/components/about/AboutFocusAreas.vue'
import GetInvolvedForm from '@/components/getinvolved/GetInvolvedForm.vue'
import ContactInfo from '@/components/getinvolved/ContactInfo.vue'
import BlogList from '@/components/blog/BlogList.vue'
</script>
