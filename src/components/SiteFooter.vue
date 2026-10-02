<script setup lang="ts">
import { appIcon, developer } from '../data/site'
</script>

<template>
  <footer class="border-t border-line-soft py-10">
    <div class="shell flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-2.5">
        <img :src="appIcon" alt="" class="h-[18px] w-[18px]" />
        <span class="text-[13px] text-ink-faint">HomeWiBar</span>
      </div>
      <p class="text-[13px] text-ink-faint">
        Not affiliated with SmartPH, PLDT or Huawei.
        <a
          :href="developer.url"
          class="ml-2 text-ink-dim underline decoration-line underline-offset-4 hover:text-ink"
          >{{ developer.name }}</a
        >
      </p>
    </div>
  </footer>
</template>
