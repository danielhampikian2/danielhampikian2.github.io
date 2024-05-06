import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-SignUp',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: ` <div class="mx-auto mb-12 max-w-xl text-center">
      <h2 class="text-3xl font-medium text-default-950 md:text-4xl">
        Didn't find the answer you were looking for?
      </h2>

      <div class="relative mx-auto mt-6 w-full lg:w-96">
        <div class="group">
          <div
            class="w-full transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
          >
            <div
              class="relative z-10 flex h-[68px] items-center justify-center bg-primary p-6"
            >
              <a
                class="bg-primary text-xl text-white"
                href="javascript:void(0);"
              >
                Feel free to submit your question
              </a>
            </div>
          </div>
          <div
            class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"
          ></div>
        </div>
      </div>
    </div>

    <div class="bg-default-100 dark:bg-default-50">
      <div
        class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat p-10 text-center dark:bg-[url('../images/other/bg-lines-2-dark.png')] md:p-20"
      >
        <h2 class="text-3xl font-medium text-default-950 md:text-4xl">
          Sign up today for top-notch web hosting services.
        </h2>

        <div class="mt-7 flex flex-wrap items-center justify-center gap-6">
          <a
            href="javascript:void(0);"
            class="group relative inline-flex items-center gap-2 text-default-950 hover:text-primary md:text-xl"
          >
            <span
              class="absolute -bottom-0 h-px w-7/12 rounded bg-default-50 transition-all duration-500 group-hover:w-full group-hover:bg-primary"
            ></span>
            Discover more by clicking here
            <lucide-angular name="move-right" class="size-5"></lucide-angular>
          </a>

          <div class="relative">
            <div class="group">
              <div
                class="relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
              >
                <div class="bg-primary px-6 py-2">
                  <a
                    class="bg-primary text-xl text-white"
                    href="javascript:void(0);"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div
                class="absolute left-0 top-0 z-0 h-full w-full bg-default-950"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  styles: ``,
})
export class SignUpComponent {}
