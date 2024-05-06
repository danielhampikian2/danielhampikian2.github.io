<template>
  <section class="py-10 lg:py-20 bg-default-100 dark:bg-default-50">
    <div class="container">
      <div class="relative z-20">
        <div class="hidden xl:block">
          <div
            class="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:-z-10 before:bg-[url('../images/landing/company/dot.svg')] after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:bg-[url('../images/landing/company/dot.svg')]"
          ></div>
        </div>

        <div class="grid xl:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <img src="@/assets/images/landing/company/img-2.jpg" alt="" class="rounded-lg" />
          </div>

          <div>
            <div class="bg-white p-10 dark:bg-default-100 rounded-lg">
              <h2 class="text-3xl font-medium text-default-950">Transforming Challenges into Profit</h2>
              <p class="text-base font-medium mt-6 text-default-800">
                Intuition and strategy form the foundation of our research methodology, which we apply to both traditional and digital media.
              </p>
              <p class="text-base font-medium mt-4 text-default-800">
                We firmly believe that the human element is vital in initiating any successful project, as it is here that meaningful emotional
                connections between the company and individuals are cultivated.
              </p>
            </div>

            <div class="p-9">
              <div class="flex items-center gap-7">
                <div class="text-center">
                  <h3 class="text-5xl font-medium text-default-950">200+</h3>
                  <p class="text-base mt-1">Clients served</p>
                </div>
                <div class="text-center">
                  <h3 class="text-5xl font-medium text-default-950">95%</h3>
                  <p class="text-base mt-1">Growth rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
