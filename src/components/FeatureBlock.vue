<script setup lang="ts">
import type { Feature } from '../data/site'

/**
 * The captures are whole desktop captures — the app window is somewhere inside each one — so they are
 * shown at full width, capped only at their own pixel size, and never cropped to the window. Shrinking
 * one into a narrow column would make the panel inside it unreadable.
 */
withDefaults(defineProps<{ feature: Feature; flip?: boolean }>(), { flip: false })
</script>

<template>
  <section class="border-t border-line-soft py-16 lg:py-20">
    <div class="shell">
      <div class="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <div :class="flip ? 'lg:order-2' : ''">
          <div class="flex items-baseline gap-4">
            <span class="mono text-[13px] text-ink-faint">{{ feature.n }}</span>
            <p class="eyebrow">{{ feature.eyebrow }}</p>
          </div>
          <h2 class="mt-4 text-[1.85rem] leading-tight font-semibold sm:text-[2.15rem]" v-html="feature.title">
          </h2>
          <p class="mt-5 text-[16px] leading-relaxed text-ink-dim" v-html="feature.copy"></p>
        </div>

        <ul :class="['space-y-3 text-[15px] leading-relaxed lg:pt-[3.4rem]', flip ? 'lg:order-1' : '']">
          <li v-for="bullet in feature.bullets" :key="bullet" class="bullet" v-html="bullet"></li>
        </ul>
      </div>

      <figure class="mt-10" :style="{ maxWidth: `${feature.width}px` }">
        <div class="shot">
          <img :src="feature.image" :alt="feature.alt" />
        </div>
        <figcaption class="eyebrow mt-3">{{ feature.caption }}</figcaption>

        <p
          v-if="feature.warning"
          class="mt-5 border-l border-accent pl-4 text-[14px] leading-relaxed text-ink-dim"
        >
          {{ feature.warning }}
        </p>
      </figure>
    </div>
  </section>
</template>
