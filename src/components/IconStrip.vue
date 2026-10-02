<script setup lang="ts">
import { iconLevels, unreadIcon } from '../data/site'
</script>

<template>
  <section class="border-t border-line-soft py-16 lg:py-20">
    <div class="shell">
      <div class="flex items-baseline gap-4">
        <p class="eyebrow">The icon</p>
      </div>
      <h2 class="mt-4 max-w-[38rem] text-[1.85rem] leading-tight font-semibold sm:text-[2.15rem]">
        The icon is the reading, not a decoration.
      </h2>
      <p class="mt-5 max-w-[42rem] text-[16px] leading-relaxed text-ink-dim">
        Five bars, drawn from whichever metric you choose — the same thresholds the panel uses, so the
        menu bar and the panel can never disagree. Unread messages add an envelope.
      </p>

      <!-- The icons on a panel of the dark teal: the same background they are drawn against in the
           menu bar, so the white bars are shown the way you actually see them. -->
      <div
        class="mt-10 flex flex-wrap items-end gap-x-10 gap-y-8 rounded-xl border border-line-soft bg-surface px-8 py-7"
      >
        <figure v-for="level in iconLevels" :key="level.bars" class="flex flex-col items-center gap-3">
          <div class="flex h-16 items-end">
            <img :src="level.image" :alt="`${level.bars} of 5 bars`" class="h-11 w-auto" />
          </div>
          <figcaption class="eyebrow">{{ level.label }}</figcaption>
        </figure>

        <figure class="flex flex-col items-center gap-3">
          <div class="flex h-16 items-end">
            <img :src="unreadIcon" alt="The icon with the unread-message envelope" class="h-11 w-auto" />
          </div>
          <figcaption class="eyebrow">Unread</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
