import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <h4 class="mb-4 text-xl text-default-900">Dropdowns</h4>
    <div class="space-y-4">
      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Default Dropdowns</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap gap-2">
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-primary-700"
              >
                Primary
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-gray-500 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-gray-600"
              >
                Gray
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-emerald-700"
              >
                Emerald
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-red-700"
              >
                Red
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-blue-700"
              >
                Blue
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-yellow-500 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-yellow-600"
              >
                Yellow
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-sky-600 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-sky-700"
              >
                Sky
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-cyan-600 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-cyan-700"
              >
                Cyan
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-gray-800 px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-gray-900"
              >
                Dark
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-gray-100 px-6 py-2 text-center text-base text-gray-900 transition-all duration-500 hover:bg-gray-200"
              >
                Light
                <lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Dropdowns Variants</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-wrap gap-2">
            <div class="hs-dropdown [--auto-close:inside]">
              <button
                type="button"
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-primary-700"
              >
                Radio
                <lucide-angular
                  name="chevron-down"
                  class="ms-1 size-4"
                ></lucide-angular>
              </button>

              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <div
                  class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                >
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="default-radio"
                      class="size-4 border-default-200 bg-default-50 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary/60 focus:ring-offset-0"
                      id="default-radio"
                    />
                    <label
                      for="default-radio"
                      class="ms-2 text-sm text-default-700"
                      >Default radio</label
                    >
                  </div>
                </div>
                <div
                  class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                >
                  <div class="flex items-center">
                    <input
                      type="radio"
                      name="default-radio"
                      class="size-4 border-default-200 bg-default-50 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary/60 focus:ring-offset-0"
                      id="checked-radio"
                      checked=""
                    />
                    <label
                      for="checked-radio"
                      class="ms-2 text-sm text-default-700"
                      >Checked radio</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-dropdown [--auto-close:inside]">
              <button
                type="button"
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-primary-700"
              >
                CheckBox
                <lucide-angular
                  name="chevron-down"
                  class="ms-1 size-4"
                ></lucide-angular>
              </button>

              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <div
                  class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                >
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="size-4 rounded border-default-200 bg-default-50 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary/60 focus:ring-offset-0"
                      id="default-checkbox"
                    />
                    <label
                      for="default-checkbox"
                      class="ms-2 text-sm text-default-700"
                      >Default checkbox</label
                    >
                  </div>
                </div>
                <div
                  class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                >
                  <div class="flex items-center">
                    <input
                      type="checkbox"
                      class="size-4 rounded border-default-200 bg-default-50 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary/60 focus:ring-offset-0"
                      id="checked-checkbox"
                      checked=""
                    />
                    <label
                      for="checked-checkbox"
                      class="ms-2 text-sm text-default-700"
                      >Checked checkbox</label
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="hs-dropdown [--auto-close:inside]">
              <button
                type="button"
                class="hs-dropdown-toggle inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2 text-center text-base text-white transition-all duration-500 hover:bg-primary-700"
              >
                Form
                <lucide-angular
                  name="chevron-down"
                  class="ms-1 size-4"
                ></lucide-angular>
              </button>

              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-4 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <form class="">
                  <div class="mb-3 space-y-1">
                    <label
                      for="exampleInputEmail1"
                      class="font-medium text-default-800"
                      >Email address</label
                    >
                    <input
                      type="email"
                      class="text-defa-900 block w-full rounded border-default-200 bg-transparent px-3 py-1.5 focus:border-default-200 focus:ring-transparent"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <span class="inline-block"
                      ><small
                        id="emailHelp"
                        class="form-text text-sm text-default-700"
                        >We'll never share your email with anyone else.</small
                      ></span
                    >
                  </div>
                  <div class="mb-3 space-y-1">
                    <label
                      for="exampleInputPassword1"
                      class="font-medium text-default-800"
                      >Password</label
                    >
                    <input
                      type="password"
                      class="text-defa-900 block w-full rounded border-default-200 bg-transparent px-3 py-1.5 focus:border-default-200 focus:ring-transparent"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div class="mb-3 flex items-center gap-2">
                    <input
                      type="checkbox"
                      class="size-4 rounded border-default-200 bg-default-50 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary/60 focus:ring-offset-0"
                      id="checkmeout0"
                    />
                    <label
                      class="inline-block text-sm font-medium text-default-700"
                      for="checkmeout0"
                      >Check me out !</label
                    >
                  </div>
                  <button
                    type="submit"
                    class="inline-block rounded bg-primary px-4 py-2 text-center text-sm text-white transition-all duration-500 hover:bg-primary-700"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle hs-dropdown-toggle inline-flex items-center gap-2 rounded-full border border-default-200 py-1 pe-2 ps-1 text-center text-base text-default-900 transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <span
                  class="inline-flex size-9 items-center overflow-hidden rounded-full"
                  ><img
                    src="assets/images/avatars/img-1.jpg"
                    alt=""
                    class="h-full max-w-full"
                /></span>
                Jesica<lucide-angular
                  name="chevron-down"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      ><lucide-angular
                        name="circle-user-round"
                        class="me-2 size-4"
                      ></lucide-angular>
                      Profile</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      ><lucide-angular
                        name="cog"
                        class="me-2 size-4"
                      ></lucide-angular>
                      Settings</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      ><lucide-angular
                        name="mic"
                        class="me-2 size-4"
                      ></lucide-angular>
                      Support</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-red-500/20 hover:text-red-500"
                      routerLink="/auth/logout"
                      ><lucide-angular
                        name="log-out"
                        class="me-2 size-4"
                      ></lucide-angular>
                      Log Out</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="hs-dropdown">
              <button
                class="hs-dropdown-toggle inline-flex size-10 items-center justify-center rounded-md bg-primary text-white transition-all duration-500 hover:bg-primary-700"
              >
                <lucide-angular
                  name="more-vertical"
                  class="size-4"
                ></lucide-angular>
              </button>
              <div
                class="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50"
              >
                <ul class="flex flex-col gap-1 py-1.5">
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Another Action</a
                    >
                  </li>
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Menu Item</a
                    >
                  </li>
                  <hr class="border-default-200" />
                  <li class="mx-1.5">
                    <a
                      class="flex items-center rounded px-3 py-2 text-default-600 transition-all hover:bg-default-100 hover:text-default-700"
                      href="javascript:void(0);"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class DropdownComponent {}
