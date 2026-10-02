<script setup lang="ts">
import { appIcon } from '../data/site'
</script>

<template>
  <header class="border-b border-line-soft">
    <div class="shell flex h-16 items-center justify-between">
      <a href="#top" class="flex items-center gap-2.5">
        <img :src="appIcon" alt="" class="h-[22px] w-[22px]" />
        <span class="text-[15px] font-semibold tracking-tight">HomeWiBar</span>
      </a>
      <nav class="flex items-center gap-6 text-sm text-ink-dim">
<!--        <a href="#features" class="hidden transition-colors hover:text-ink sm:block">Features</a>-->
<!--        <a href="#notes" class="hidden transition-colors hover:text-ink sm:block">Notes</a>-->

        <a href="#install" class="text-ink transition-colors hover:text-signal">How to Install?</a>
      </nav>
    </div>
  </header>
</template>
