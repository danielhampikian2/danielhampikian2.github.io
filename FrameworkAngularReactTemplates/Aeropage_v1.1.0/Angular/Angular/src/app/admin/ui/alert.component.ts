import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: `
    <h4 class="mb-4 text-xl text-default-900">Alerts</h4>
    <div class="space-y-4">
      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Alerts</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-col flex-wrap gap-2">
            <div
              class="w-full rounded-md bg-primary px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Primary</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-gray-500 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Gray</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-emerald-600 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Emerald</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-red-600 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Red</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-blue-600 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Blue</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-yellow-600 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Yellow</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-sky-600 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Sky</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-cyan-600 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Cyan</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-gray-800 px-4 py-3 text-sm text-white"
              role="alert"
            >
              <b>Dark</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md bg-gray-100 px-4 py-2.5 text-sm text-gray-900"
              role="alert"
            >
              <b>Light</b> alert! You should check in on some of those fields
              below.
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Outline Alerts</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-col flex-wrap gap-2">
            <div
              class="w-full rounded-md border border-primary px-4 py-3 text-sm text-primary"
              role="alert"
            >
              <b>Primary</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-gray-500 px-4 py-3 text-sm text-gray-500"
              role="alert"
            >
              <b>Gray</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-emerald-600 px-4 py-3 text-sm text-emerald-600"
              role="alert"
            >
              <b>Emerald</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-red-600 px-4 py-3 text-sm text-red-600"
              role="alert"
            >
              <b>Red</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-blue-600 px-4 py-3 text-sm text-blue-600"
              role="alert"
            >
              <b>Blue</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-yellow-600 px-4 py-3 text-sm text-yellow-600"
              role="alert"
            >
              <b>Yellow</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-sky-600 px-4 py-3 text-sm text-sky-600"
              role="alert"
            >
              <b>Sky</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-cyan-600 px-4 py-3 text-sm text-cyan-600"
              role="alert"
            >
              <b>Cyan</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-gray-800 px-4 py-3 text-sm text-gray-800"
              role="alert"
            >
              <b>Dark</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-gray-100 px-4 py-2.5 text-sm text-gray-100"
              role="alert"
            >
              <b>Light</b> alert! You should check in on some of those fields
              below.
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Soft Alerts</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-col flex-wrap gap-2">
            <div
              class="w-full rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary"
              role="alert"
            >
              <b>Primary</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-gray-500/20 bg-gray-500/10 px-4 py-3 text-sm text-gray-500"
              role="alert"
            >
              <b>Gray</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-emerald-600/20 bg-emerald-600/10 px-4 py-3 text-sm text-emerald-600"
              role="alert"
            >
              <b>Emerald</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-red-600/20 bg-red-600/10 px-4 py-3 text-sm text-red-600"
              role="alert"
            >
              <b>Red</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-blue-600/20 bg-blue-600/10 px-4 py-3 text-sm text-blue-600"
              role="alert"
            >
              <b>Blue</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-yellow-600/20 bg-yellow-600/10 px-4 py-3 text-sm text-yellow-600"
              role="alert"
            >
              <b>Yellow</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-sky-600/20 bg-sky-600/10 px-4 py-3 text-sm text-sky-600"
              role="alert"
            >
              <b>Sky</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-cyan-600/20 bg-cyan-600/10 px-4 py-3 text-sm text-cyan-600"
              role="alert"
            >
              <b>Cyan</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-gray-800/20 bg-gray-800/10 px-4 py-3 text-sm text-gray-800"
              role="alert"
            >
              <b>Dark</b> alert! You should check in on some of those fields
              below.
            </div>
            <div
              class="w-full rounded-md border border-gray-100/20 bg-gray-100/10 px-4 py-2.5 text-sm text-gray-100"
              role="alert"
            >
              <b>Light</b> alert! You should check in on some of those fields
              below.
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Alert with icon</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-col flex-wrap gap-2">
            <div
              class="inline-flex w-full items-center rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary"
              role="alert"
            >
              <lucide-angular
                name="circle-dot-dashed"
                class="me-2 size-4"
              ></lucide-angular>
              <span
                ><b>Primary</b> alert! You should check in on some of those
                fields below.</span
              >
            </div>
            <div
              class="inline-flex w-full items-center rounded-md border border-emerald-600/20 bg-emerald-600/10 px-4 py-3 text-sm text-emerald-600"
              role="alert"
            >
              <lucide-angular
                name="check-circle"
                class="me-2 size-4"
              ></lucide-angular>
              <span
                ><b>Emerald</b> alert! You should check in on some of those
                fields below.</span
              >
            </div>
            <div
              class="inline-flex w-full items-center rounded-md border border-red-600/20 bg-red-600/10 px-4 py-3 text-sm text-red-600"
              role="alert"
            >
              <lucide-angular name="skull" class="me-2 size-4"></lucide-angular>
              <span
                ><b>Red</b> alert! You should check in on some of those fields
                below.</span
              >
            </div>
            <div
              class="inline-flex w-full items-center rounded-md border border-yellow-600/20 bg-yellow-600/10 px-4 py-3 text-sm text-yellow-600"
              role="alert"
            >
              <lucide-angular
                name="alert-triangle"
                class="me-2 size-4"
              ></lucide-angular>
              <span
                ><b>Yellow</b> alert! You should check in on some of those
                fields below.</span
              >
            </div>
            <div
              class="inline-flex w-full items-center rounded-md border border-sky-600/20 bg-sky-600/10 px-4 py-3 text-sm text-sky-600"
              role="alert"
            >
              <lucide-angular
                name="alert-octagon"
                class="me-2 size-4"
              ></lucide-angular>
              <span
                ><b>Sky</b> alert! You should check in on some of those fields
                below.</span
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="rounded-lg border border-default-200 bg-white dark:bg-default-50"
      >
        <div class="border-b border-default-200 px-6 py-3">
          <h4 class="text-lg text-default-900">Alert with Link</h4>
        </div>
        <div class="p-6">
          <div class="flex flex-col flex-wrap gap-2">
            <div
              class="w-full rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary"
              role="alert"
            >
              <b>Primary</b> alert! You should check
              <a href="javascript:void(0);" class="font-bold">Click Here</a>
            </div>
            <div
              class="w-full rounded-md border border-emerald-600/20 bg-emerald-600/10 px-4 py-3 text-sm text-emerald-600"
              role="alert"
            >
              <b>Emerald</b> alert! You should check
              <a href="javascript:void(0);" class="font-bold">Click Here</a>
            </div>
            <div
              class="w-full rounded-md border border-red-600/20 bg-red-600/10 px-4 py-3 text-sm text-red-600"
              role="alert"
            >
              <b>Red</b> alert! You should check
              <a href="javascript:void(0);" class="font-bold">Click Here</a>
            </div>
            <div
              class="w-full rounded-md border border-yellow-600/20 bg-yellow-600/10 px-4 py-3 text-sm text-yellow-600"
              role="alert"
            >
              <b>Yellow</b> alert! You should check
              <a href="javascript:void(0);" class="font-bold">Click Here</a>
            </div>
            <div
              class="w-full rounded-md border border-sky-600/20 bg-sky-600/10 px-4 py-3 text-sm text-sky-600"
              role="alert"
            >
              <b>Sky</b> alert! You should check
              <a href="javascript:void(0);" class="font-bold">Click Here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AlertComponent {}
