<script setup lang="ts">
import { ref } from 'vue'
import DownloadButton from './DownloadButton.vue'
import { installSteps } from '../data/site'

const copied = ref<number | null>(null)

async function copy(text: string, index: number) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = index
    window.setTimeout(() => {
      if (copied.value === index) copied.value = null
    }, 1800)
  } catch {
    // Clipboard access can be refused. The command is on screen and selectable either way.
  }
}
</script>

<template>
  <section id="install" class="border-t border-line-soft py-16 lg:py-20">
    <div class="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-20">
      <div class="lg:sticky lg:top-12 lg:self-start">
        <p class="eyebrow">Install</p>
        <h2 class="mt-4 text-[2rem] leading-tight font-semibold sm:text-[2.4rem]">
          Download it and put it in your menu bar.
        </h2>
        <p class="mt-5 max-w-[32rem] text-[16px] leading-relaxed text-ink-dim">
          Installing <strong>HomeWiBar</strong> is as easy as downloading the zip, extracting it and then dragging the
          app into the <strong>/Applications</strong> folder of your Mac. After that, right-click the app then click <strong>Open</strong>.
          <br><br>
          See the step-by-step instructions on the right. 👉
        </p>

        <div class="mt-8">
          <DownloadButton size="lg" />
        </div>

        <p class="mono mt-6 text-[12.5px] leading-relaxed text-ink-faint">
          MacOS 14+ (Sonoma) · Apple M Series · Macbook Neo
        </p>

        <h5 class="mt-10 text-[1rem] leading-tight font-semibold sm:text-[1.1rem]">
          Known Supported Models
        </h5>
        <ul class="space-y-2 mono mt-2 text-[12.5px] leading-relaxed text-ink-faint">
          <li class="bullet">Smart 5G Max Home WiFi</li>
          <li class="bullet">Smart 5G Max Turbo WiFi</li>
          <li class="bullet">PLDT Home WiFi 5G+</li>
          <li class="bullet">Huawei 5G CPE 5s</li>
        </ul>
      </div>

      <ol class="space-y-7">
        <li
          v-for="(step, i) in installSteps"
          :key="step.title"
          class="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3"
        >
          <span class="mono pt-[3px] text-[13px] text-ink-faint">{{
            String(i + 1).padStart(2, '0')
          }}</span>

          <div>
            <p class="text-[15px] font-medium text-ink" v-html="step.title"></p>
            <p class="mt-1.5 text-[14.5px] leading-relaxed text-ink-dim" v-html="step.body"></p>

            <div v-if="step.command" class="cmd">
              <code>{{ step.command }}</code>
              <button
                type="button"
                :aria-label="`Copy: ${step.command}`"
                @click="copy(step.command, i)"
              >
                {{ copied === i ? 'copied' : 'copy' }}
              </button>
            </div>
            <p v-if="!!step.foot" class="mt-0 mb-5 text-[14.5px] leading-relaxed text-ink-dim" v-html="step.foot"></p>

            <p v-if="step.note" class="mt-2 text-[13.5px] leading-relaxed text-ink-faint">
              {{ step.note }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
