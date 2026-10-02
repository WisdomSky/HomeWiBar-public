<script setup lang="ts">
import DownloadButton from './DownloadButton.vue'
import { features, live } from '../data/site'

const panel = features[0]
</script>

<template>
  <section id="top" class="shell pt-16 pb-14 lg:pt-20">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
      <div>
        <p class="eyebrow">macOS menu bar app · for the Huawei 4G/5G CPE</p>

        <h1 class="mt-5 text-[2.6rem] leading-[1.04] font-semibold sm:text-[3.25rem]">
          Your router’s signal, in the menu bar.
        </h1>

        <p class="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-ink-dim">
          A 5G router sits in the corner and tells you nothing. HomeWiBar signs in to it, reads the
          signal once a second, and puts the number where you will actually see it — along with the
          devices, the band locks and the texts it is holding.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <DownloadButton size="lg" />
          <a
            href="#features"
            class="inline-flex h-12 items-center rounded-lg border border-line px-5 text-[15px] text-ink-dim transition-colors hover:border-ink-faint hover:text-ink"
          >
            Learn more of its other features...
          </a>
        </div>

        <!-- Not a mockup: this is what the app was reading on this machine while the page was
             written. -->
        <p class="mono mt-8 text-[12.5px] text-accent">
          {{ live.rsrp }} · {{ live.rsrq }} · {{ live.sinr }} · {{ live.band }} ·
          <span class="text-ink-dim">{{ live.quality }}</span>
        </p>
        <p class="eyebrow mt-2">A live reading from the machine this was written on</p>
      </div>

      <ul class="space-y-3 self-end text-[15px] leading-relaxed">
        <li v-for="bullet in panel.bullets" :key="bullet" class="bullet">{{ bullet }}</li>
      </ul>
    </div>

    <figure class="mt-12" :style="{ maxWidth: `${panel.width}px` }">
      <div class="shot">
        <img :src="panel.image" :alt="panel.alt" />
      </div>
      <figcaption class="eyebrow mt-3">{{ panel.caption }}</figcaption>
    </figure>
  </section>
</template>
