<script setup lang="ts">
import { limits, specs } from '../data/site'
</script>

<template>
  <section id="notes" class="border-t border-line-soft py-16 lg:py-20">
    <div class="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
      <div>
        <p class="eyebrow">The short version</p>
        <dl class="mt-6 divide-y divide-line-soft border-y border-line-soft">
          <div v-for="spec in specs" :key="spec.label" class="grid grid-cols-[9rem_minmax(0,1fr)] gap-4 py-3.5">
            <dt class="text-[14px] text-ink-faint">{{ spec.label }}</dt>
            <dd class="text-[14px] leading-relaxed text-ink-dim">{{ spec.value }}</dd>
          </div>
        </dl>
      </div>

      <div>
        <p class="eyebrow">What it does not do</p>
        <ul class="mt-6 space-y-4 text-[15px] leading-relaxed">
          <li v-for="limit in limits" :key="limit" class="bullet">{{ limit }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
