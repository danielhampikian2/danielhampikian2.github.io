<template>
  <div id="tooltip" class="scroll-mt-40">
    <h4 class="mb-4 text-xl text-default-900">Tooltip</h4>
    <div class="space-y-4">
      <div class="rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Tooltips</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap gap-3">
            <div class="hs-tooltip inline-block [--placement:top] [--trigger:hover]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Tooltip on Top
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-800 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Top Tooltip
                  <div
                    class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 rotate-45 rounded-[1px] bg-default-800"
                  ></div>
                </div>
              </a>
            </div>

            <div class="hs-tooltip show inline-block [--trigger:hover] [--placement:bottom]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Tooltip on Bottom
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-800 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Bottom Tooltip
                  <div
                    class="absolute -top-1 start-1/2 -z-10 h-2.5 w-2.5 rotate-45 rounded-[1px] bg-default-800"
                  ></div>
                </div>
              </a>
            </div>

            <div class="hs-tooltip show inline-block [--trigger:hover] [--placement:left]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Tooltip on Left
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-800 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Left Tooltip
                  <div
                    class="absolute -end-1 top-1/3 -z-10 h-2.5 w-2.5 rotate-45 rounded-[1px] bg-default-800 rtl:-start-1"
                  ></div>
                </div>
              </a>
            </div>

            <div class="hs-tooltip inline-block [--trigger:hover] [--placement:right]">
              <a class="hs-tooltip-toggle block text-center" href="javascript:;">
                <div
                  class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                >
                  Tooltip on Right
                </div>
                <div
                  class="hs-tooltip-content relative z-50 hidden rounded bg-default-800 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                  role="tooltip"
                >
                  Right Tooltip
                  <div
                    class="absolute -start-1 top-1/3 -z-10 h-2.5 w-2.5 rotate-45 rounded-[1px] bg-default-800 rtl:-end-1"
                  ></div>
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
