<template>
  <div id="nav-tabs" class="scroll-mt-40">
    <h4 class="mb-4 text-xl text-default-900">Nav Tabs</h4>
    <div class="space-y-4">
      <div class="rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Horizontal Nav Tabs</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-col flex-wrap items-start gap-2">
            <div class="flex">
              <nav
                class="flex w-full items-center justify-center gap-2"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  type="button"
                  class="active inline-flex items-center justify-center gap-x-2 rounded-lg bg-default-200 px-6 py-2.5 text-sm font-medium text-default-500 hover:text-default-700 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-primary hs-tab-active:text-white"
                  id="segment-item-1"
                  data-hs-tab="#segment-1"
                  aria-controls="segment-1"
                  role="tab"
                >
                  Tab 1
                </button>
                <button
                  type="button"
                  class="inline-flex items-center justify-center gap-x-2 rounded-lg bg-default-200 px-6 py-2.5 text-sm font-medium text-default-500 hover:text-default-700 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-primary hs-tab-active:text-white"
                  id="segment-item-2"
                  data-hs-tab="#segment-2"
                  aria-controls="segment-2"
                  role="tab"
                >
                  Tab 2
                </button>
                <button
                  type="button"
                  class="inline-flex items-center justify-center gap-x-2 rounded-lg bg-default-200 px-6 py-2.5 text-sm font-medium text-default-500 hover:text-default-700 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-primary hs-tab-active:text-white"
                  id="segment-item-3"
                  data-hs-tab="#segment-3"
                  aria-controls="segment-3"
                  role="tab"
                >
                  Tab 3
                </button>
              </nav>
            </div>

            <div class="mt-3">
              <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
                <p class="text-default-500">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                  venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                </p>
              </div>
              <div id="segment-2" class="hidden" role="tabpanel" aria-labelledby="segment-item-2">
                <p class="text-default-500">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                  Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                  quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem.
                </p>
              </div>
              <div id="segment-3" class="hidden" role="tabpanel" aria-labelledby="segment-item-3">
                <p class="text-default-500">
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                  faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
                  leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-default-200 bg-white dark:bg-default-50">
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Vertical Nav Tabs</h4>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-4 gap-6">
            <div class="flex">
              <nav class="flex w-full flex-col gap-2" aria-label="Tabs" role="tablist">
                <button
                  type="button"
                  class="active inline-flex items-center justify-center gap-x-2 rounded-lg bg-default-200 px-6 py-2.5 text-sm font-medium text-default-500 hover:text-default-700 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-primary hs-tab-active:text-white"
                  id="vr-item-1"
                  data-hs-tab="#vr-1"
                  aria-controls="vr-1"
                  role="tab"
                >
                  Tab 1
                </button>
                <button
                  type="button"
                  class="inline-flex items-center justify-center gap-x-2 rounded-lg bg-default-200 px-6 py-2.5 text-sm font-medium text-default-500 hover:text-default-700 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-primary hs-tab-active:text-white"
                  id="vr-item-2"
                  data-hs-tab="#vr-2"
                  aria-controls="vr-2"
                  role="tab"
                >
                  Tab 2
                </button>
                <button
                  type="button"
                  class="inline-flex items-center justify-center gap-x-2 rounded-lg bg-default-200 px-6 py-2.5 text-sm font-medium text-default-500 hover:text-default-700 disabled:pointer-events-none disabled:opacity-50 hs-tab-active:bg-primary hs-tab-active:text-white"
                  id="vr-item-3"
                  data-hs-tab="#vr-3"
                  aria-controls="vr-3"
                  role="tab"
                >
                  Tab 3
                </button>
              </nav>
            </div>

            <div class="col-span-3">
              <div id="vr-1" role="tabpanel" aria-labelledby="vr-item-1">
                <p class="text-default-500">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
                  vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                  venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                </p>
              </div>
              <div id="vr-2" class="hidden" role="tabpanel" aria-labelledby="vr-item-2">
                <p class="text-default-500">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                  vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                  tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
                  imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                  Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                  quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                  blandit vel, luctus pulvinar, hendrerit id, lorem.
                </p>
              </div>
              <div id="vr-3" class="hidden" role="tabpanel" aria-labelledby="vr-item-3">
                <p class="text-default-500">
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                  faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
                  leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
