<template>
  <div id="accordions" class="scroll-mt-40">
    <h4 class="mb-4 text-xl text-default-900">Accordions</h4>
    <div class="space-y-4">
      <div class="rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Accordion Example</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap items-center gap-2">
            <div class="hs-accordion-group">
              <div class="hs-accordion active" id="hs-basic-heading-one">
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-default-800 hover:text-default-950 disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary"
                  aria-controls="hs-basic-collapse-one"
                >
                  <MinusIcon class="hidden h-4 w-4 hs-accordion-active:block" />
                  <PlusIcon class="h-4 w-4 hs-accordion-active:hidden" />
                  Accordion #1
                </button>
                <div
                  id="hs-basic-collapse-one"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-one"
                >
                  <p class="text-default-800">
                    <em>This is the third item's accordion body.</em>
                    It is hidden by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall appearance,
                    as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div class="hs-accordion" id="hs-basic-heading-two">
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-default-800 hover:text-default-950 disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary"
                  aria-controls="hs-basic-collapse-two"
                >
                  <MinusIcon class="hidden h-4 w-4 hs-accordion-active:block" />
                  <PlusIcon class="h-4 w-4 hs-accordion-active:hidden" />
                  Accordion #2
                </button>
                <div
                  id="hs-basic-collapse-two"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-two"
                >
                  <p class="text-default-800">
                    <em>This is the third item's accordion body.</em>
                    It is hidden by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall appearance,
                    as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>

              <div class="hs-accordion" id="hs-basic-heading-three">
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-default-800 hover:text-default-950 disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary"
                  aria-controls="hs-basic-collapse-three"
                >
                  <MinusIcon class="hidden h-4 w-4 hs-accordion-active:block" />
                  <PlusIcon class="h-4 w-4 hs-accordion-active:hidden" />
                  Accordion #3
                </button>
                <div
                  id="hs-basic-collapse-three"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-three"
                >
                  <p class="text-default-800">
                    <em>This is the third item's accordion body.</em>
                    It is hidden by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall appearance,
                    as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Card Accordion</h4>
        </div>
        <div class="p-6">
          <div>
            <!-- Accordion -->
            <div class="hs-accordion-group space-y-3">
              <div class="rounded-md border border-default-200">
                <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <button
                    class="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 p-3 text-left font-semibold text-default-600 transition hover:text-default-950"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  >
                    What is Lorem Ipsum?
                    <ChevronDownIcon
                      class="ms-auto h-4 w-4 transition-all hs-accordion-active:rotate-180"
                    />
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <div class="border-t border-default-200 p-3">
                      <p class="text-default-800">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                        synth nesciunt you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-md border border-default-200">
                <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                  <button
                    class="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 p-3 text-left font-semibold text-default-600 transition hover:text-default-950"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  >
                    Why do we use it?
                    <ChevronDownIcon
                      class="ms-auto h-4 w-4 transition-all hs-accordion-active:rotate-180"
                    />
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <div class="border-t border-default-200 p-3">
                      <p class="text-default-800">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                        synth nesciunt you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="rounded-md border border-default-200">
                <div
                  class="hs-accordion"
                  id="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <button
                    class="hs-accordion-toggle group inline-flex w-full items-center gap-x-3 p-3 text-left font-semibold text-default-600 transition hover:text-default-950"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  >
                    Where does it come from?
                    <ChevronDownIcon
                      class="ms-auto h-4 w-4 transition-all hs-accordion-active:rotate-180"
                    />
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                  >
                    <div class="border-t border-default-200 p-3">
                      <p class="text-default-800">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
                        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                        synth nesciunt you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Accordion -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MinusIcon, PlusIcon, ChevronDownIcon } from 'lucide-vue-next'
</script>
