import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-signup',
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
    <!-- start -->
    <section class="py-10 lg:py-20">
      <div class="container">
        <div class="rounded-xl bg-primary/20 p-6">
          <div class="grid items-center gap-6 md:grid-cols-3">
            <div class="">
              <img
                src="assets/images/landing/marketing-3/img-7.png"
                class="max-w-full"
                alt=""
              />
            </div>
            <div class="md:col-span-2">
              <div class="flex flex-col">
                <div class="">
                  <h3 class="mb-2 text-3xl/snug font-medium text-default-950">
                    Transform your concepts into reality <br />
                    and construct your website visually.
                  </h3>
                  <p class="mb-6 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                    tempora dolorem incidunt ex at possimus laborum nemo dolor.
                    Nam doloremque inventore dolor. Id maxime quos odio natus
                    sit repellat fugiat.
                  </p>
                </div>
                <div class="">
                  <a
                    href="javascript:void(0);"
                    class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all hover:bg-primary-700"
                    >Sign up free
                    <lucide-angular
                      name="move-right"
                      class="size-5"
                    ></lucide-angular>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- end flex -->
        </div>
        <!-- end bg -->
      </div>
      <!-- end container -->
    </section>
    <!-- end -->
  `,
  styles: ``,
})
export class SignupComponent {}
