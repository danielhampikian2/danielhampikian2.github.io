<template>
  <section id="features" class="py-10 lg:py-20">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Features</span
          >
          <h2 class="text-4xl font-medium capitalize text-default-950 mt-4">Our Features</h2>
        </div>
      </div>

      <div
        class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center rounded-md overflow-hidden border border-default-200"
      >
        <div class="group border-b border-default-200 h-full">
          <div class="sm:p-10 p-8">
            <span class="">
              <ComponentIcon class="h-14 w-14 text-default-950"></ComponentIcon>
            </span>
            <h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">Developer</h2>
            <p class="text-base mb-6">
              Lorem ipsum dummy text are usually use in these section. Lorem ipsum dummy text are
              used in this design
            </p>
            <a href="javascript:void(0);" class="text-default-950 text-lg"
              >Read More
              <MoveRightIcon
                class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
              ></MoveRightIcon>
            </a>
          </div>
        </div>

        <div class="group border-b md:border-s border-default-200 h-full">
          <div class="sm:p-10 p-8">
            <span class="">
              <MonitorIcon class="h-14 w-14 text-default-950"></MonitorIcon>
            </span>
            <h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">Web Design</h2>
            <p class="text-base mb-6">
              In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
              pede mollis pretium.
            </p>
            <a href="javascript:void(0);" class="text-default-950 text-lg"
              >Read More
              <MoveRightIcon
                class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
              ></MoveRightIcon>
            </a>
          </div>
        </div>

        <div class="group border-b xl:border-s border-default-200 h-full">
          <div class="sm:p-10 p-8">
            <span class="">
              <LayersIcon class="h-14 w-14 text-default-950"></LayersIcon>
            </span>
            <h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">Digital Product Design</h2>
            <p class="text-base mb-6">
              Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
              faucibus.
            </p>
            <a href="javascript:void(0);" class="text-default-950 text-lg"
              >Read More
              <MoveRightIcon
                class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
              ></MoveRightIcon>
            </a>
          </div>
        </div>

        <div class="group border-b border-s xl:border-0 border-default-200 h-full">
          <div class="sm:p-10 p-8">
            <span class="">
              <LayoutGridIcon class="h-14 w-14 text-default-950"></LayoutGridIcon>
            </span>
            <h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">Branding & Design</h2>
            <p class="text-base mb-6">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere Curae; In ac
              dui quis mi consectetuer lacinia.
            </p>
            <a href="javascript:void(0);" class="text-default-950 text-lg"
              >Read More
              <MoveRightIcon
                class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
              ></MoveRightIcon>
            </a>
          </div>
        </div>

        <div class="group border-b xl:border-s md:border-b-0 border-default-200 h-full">
          <div class="sm:p-10 p-8">
            <span class="">
              <FigmaIcon class="h-14 w-14 text-default-950"></FigmaIcon>
            </span>
            <h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">Ui/Ux & Design</h2>
            <p class="text-base mb-6">
              Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor.
              Donec posuere vulputate arcu.
            </p>
            <a href="javascript:void(0);" class="text-default-950 text-lg"
              >Read More
              <MoveRightIcon
                class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
              ></MoveRightIcon>
            </a>
          </div>
        </div>

        <div class="group md:border-s border-default-200 h-full">
          <div class="sm:p-10 p-8">
            <span class="">
              <PaintbrushIcon class="h-14 w-14 text-default-950"></PaintbrushIcon>
            </span>
            <h2 class="text-2xl text-default-950 font-medium mb-4 mt-8">Graphic Design</h2>
            <p class="text-base mb-6">
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin
              urna dolor sagittis lacus.
            </p>
            <a href="javascript:void(0);" class="text-default-950 text-lg"
              >Read More
              <MoveRightIcon
                class="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform"
              ></MoveRightIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ComponentIcon,
  MonitorIcon,
  LayersIcon,
  LayoutGridIcon,
  FigmaIcon,
  PaintbrushIcon,
  MoveRightIcon
} from 'lucide-vue-next'
</script>
