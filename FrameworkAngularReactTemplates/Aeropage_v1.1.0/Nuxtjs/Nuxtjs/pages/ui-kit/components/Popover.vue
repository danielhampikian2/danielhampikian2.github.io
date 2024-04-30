<template>
  <div id="popover" class="scroll-mt-40">
    <h4 class="mb-4 text-xl text-default-900">Popover</h4>
    <div class="space-y-4">
      <div class="rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Popovers</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap gap-3">
            <div class="hs-tooltip inline-block [--placement:top] [--trigger:click]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Popover on Top
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden w-60 rounded border bg-default-800 px-3 py-1 font-medium text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                </div>
              </a>
            </div>

            <div class="hs-tooltip inline-block [--placement:bottom] [--trigger:click]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Popover on Bottom
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden w-60 rounded border bg-default-800 px-3 py-1 font-medium text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                </div>
              </a>
            </div>

            <div class="hs-tooltip inline-block [--trigger:click] [--placement:left]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Popover on Left
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden w-60 rounded border bg-default-800 px-3 py-1 font-medium text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                </div>
              </a>
            </div>

            <div class="hs-tooltip inline-block [--trigger:click] [--placement:right]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Popover on Right
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden w-60 rounded border bg-default-800 px-3 py-1 font-medium text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
