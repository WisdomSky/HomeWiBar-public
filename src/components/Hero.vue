<script setup lang="ts">
import DownloadButton from './DownloadButton.vue'
import { features } from '../data/site'

const panel = features[0]
</script>

<template>
  <section id="top" class="shell pt-16 pb-14 lg:pt-20">
    <div class="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16">
      <div>
        <p class="eyebrow">macOS menu bar app · for the Huawei 4G/5G CPE</p>

        <h1 class="mt-5 text-[2.6rem] leading-[1.04] font-semibold sm:text-[3.25rem]">
          <img src="./../../HomeWiBar-vector.svg" alt="HomeWiBar Logo" class="logo"> HomeWiBar
        </h1>

        <p class="mt-6 max-w-[34rem] text-[17px] leading-relaxed text-ink-dim">
          A MacOS menubar application for managing supported <strong>Huawei H153-381 4G/5G CPE</strong>* directly and easily from your Mac.
        </p>

        <p>
          <small><em>*or other 4G/5G CPE models with similar software that uses Huawei HiLink API.</em></small>
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <DownloadButton size="lg" url="#install"/>
          <a
            href="#features"
            class="inline-flex h-12 items-center rounded-lg border border-line px-5 text-[15px] text-ink-dim transition-colors hover:border-ink-faint hover:text-ink"
          >
            Tell me more...
          </a>
        </div>

        <!-- Not a mockup: this is what the app was reading on this machine while the page was
             written. -->
        <p class="mono mt-8 text-[12.5px] text-accent">
          Real-time Signal Status · LTE & 5G Band Locking · Uplink & Downlink Metrics · WiFI Settings ·
          Text Messages · Device IP Address Binding · Client Device Blocking · Router Rebooting
        </p>
        <p class="eyebrow mt-2"><strong>Huawei H153-381</strong> · Smart 5G Max Home WiFi · PLDT Home WiFi 5G+ · Huawei 5G CPE 5s</p>
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
