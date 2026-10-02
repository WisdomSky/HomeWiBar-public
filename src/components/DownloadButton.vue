<script setup lang="ts">
import { downloadUrl } from '../data/site'

withDefaults(defineProps<{
  size?: 'lg' | 'md'
  url?: string
}>(), { size: 'md' })
</script>

<template>
  <a
    v-if="url || downloadUrl"
    :href="url ?? downloadUrl"
    class="group inline-flex items-center gap-2.5 rounded-lg bg-signal px-5 font-medium text-void transition-colors hover:bg-[#6aa9fb]"
    :class="size === 'lg' ? 'h-12 text-[15px]' : 'h-10 text-sm'"
  >
    <svg viewBox="0 0 16 16" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.6">
      <path d="M8 2v8m0 0 3-3m-3 3L5 7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.5 11.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1" stroke-linecap="round" />
    </svg>
    Download for macOS
  </a>

  <!-- The page ships before the first build exists, so the button is honest about it rather than
       pointing at a URL that does not resolve yet. -->
  <button
    v-else
    type="button"
    disabled
    class="inline-flex cursor-not-allowed items-center gap-2.5 rounded-lg border border-line-soft bg-surface px-5 font-medium text-ink-dim"
    :class="size === 'lg' ? 'h-12 text-[15px]' : 'h-10 text-sm'"
    title="The first build is not published yet."
  >
    Download for macOS
    <span class="eyebrow rounded border border-line px-1.5 py-0.5">soon</span>
  </button>
</template>
