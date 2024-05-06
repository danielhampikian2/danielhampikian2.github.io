<template>
  <div id="modals" class="scroll-mt-40">
    <h4 class="mb-4 text-xl text-default-900">Modals</h4>
    <div class="space-y-4">
      <div class="rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Simple Modal</h4>
        </div>
        <div class="p-6">
          <div>
            <button
              type="button"
              class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white duration-500 hover:border-primary-700 hover:bg-primary-700"
              data-hs-overlay="#hs-basic-modal"
            >
              Standard Modal
            </button>

            <div
              id="hs-basic-modal"
              class="hs-overlay fixed left-0 top-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden"
            >
              <div
                class="m-3 opacity-0 transition-all hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg"
              >
                <div
                  border-default-200=""
                  class="flex flex-col rounded border border-default-200 bg-white shadow-sm dark:bg-default-50"
                >
                  <div
                    class="flex items-center justify-between border-b border-default-200 px-4 py-3"
                  >
                    <h3 class="font-bold text-default-800">Modal Heading</h3>
                    <button
                      type="button"
                      class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded text-sm text-default-500 transition-all hover:text-default-400 focus:outline-none focus:ring-2 focus:ring-default-400 focus:ring-offset-2 focus:ring-offset-default-50"
                      data-hs-overlay="#hs-basic-modal"
                    >
                      <span class="sr-only">Close</span>
                      <XIcon class="h-5 w-5" />
                    </button>
                  </div>
                  <div class="overflow-y-auto p-4">
                    <h5 class="mb-2.5 text-base font-semibold">Text in a modal</h5>
                    <p class="mb-4 text-sm font-medium">
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </p>
                    <hr class="my-5 border-default-200" />
                    <h5 class="mb-2.5 text-base font-semibold">
                      Overflowing text to show scroll behavior
                    </h5>
                    <p class="mb-4 text-sm font-medium text-default-600">
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                      vestibulum at eros.
                    </p>
                    <p class="mb-4 text-sm font-medium text-default-600">
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
                      sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </p>
                    <p class="text-sm text-default-600">
                      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna,
                      vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper
                      nulla non metus auctor fringilla.
                    </p>
                  </div>
                  <!-- End Modal Details -->
                  <div class="flex items-center justify-end gap-2 border-t border-default-200 p-4">
                    <button
                      class="inline-block rounded-md border border-primary/20 bg-primary/10 px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-primary hover:border-primary hover:bg-primary hover:text-white"
                      type="button"
                      data-hs-overlay="#hs-basic-modal"
                    >
                      Close
                    </button>
                    <a
                      class="inline-block rounded-md border border-primary bg-primary px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-white hover:border-primary-700 hover:bg-primary-700"
                      href="javascript:void(0)"
                      >Save Changes</a
                    >
                  </div>
                  <!-- End Modal Footer -->
                </div>
              </div>
            </div>
            <!-- End Modal Content -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XIcon } from 'lucide-vue-next'
</script>
