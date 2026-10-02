<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import Hero from './components/Hero.vue'
import FeatureBlock from './components/FeatureBlock.vue'
import DownloadSection from './components/DownloadSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { features } from './data/site'

const rest = features.slice(1)
</script>

<template>
  <SiteHeader />

  <main>
    <Hero />

    <div id="features">
      <FeatureBlock :feature="rest[0]" />
      <FeatureBlock :feature="rest[1]" flip />
      <FeatureBlock :feature="rest[2]" />
    </div>

<!--    <IconStrip />-->
<!--    <NotesSection />-->
    <DownloadSection />
  </main>

  <SiteFooter />
</template>
