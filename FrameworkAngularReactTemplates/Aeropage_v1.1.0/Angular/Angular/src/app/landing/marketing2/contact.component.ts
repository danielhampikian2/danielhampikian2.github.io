import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-contact',
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
    <div class="mx-auto mb-14 max-w-3xl text-center">
      <span
        class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
        >Our Contact Us</span
      >
      <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
        Let's Begin a Dialogue
      </h2>
      <p class="mt-5 text-lg">
        We're eager to engage with like-minded individuals. Simply greet us, and
        we'll embark on a productive collaboration. Launch your own journey to
        success.
      </p>
    </div>

    <div class="mx-auto mt-16 max-w-3xl">
      <div>
        <div class="rounded-md border border-default-200 bg-default-50 p-8">
          <form class="relative">
            <h2 class="mb-5 text-2xl font-medium text-default-950">
              We welcome your feedback
            </h2>
            <div class="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  for="formFirstName"
                  class="mb-2 block text-base font-medium text-default-500"
                  >Name</label
                >
                <input
                  type="text"
                  class="block w-full rounded-md border-default-200 bg-default-50 px-3 py-2 text-sm text-default-950 focus:border-default-300 focus:ring-transparent"
                  id="formFirstName"
                  placeholder="Your first name..."
                  required=""
                />
              </div>
              <!-- col End -->

              <div>
                <label
                  for="formEmail"
                  class="mb-2 block text-base font-medium text-default-500"
                  >Email</label
                >
                <input
                  type="email"
                  class="block w-full rounded-md border-default-200 bg-default-50 px-3 py-2 text-sm text-default-950 focus:border-default-300 focus:ring-transparent"
                  id="formEmail"
                  placeholder="Your email..."
                  required=""
                />
              </div>
              <!-- col End -->

              <div class="sm:col-span-2">
                <div class="mb-3">
                  <label
                    for="formSubject"
                    class="mb-2 block text-base font-medium text-default-500"
                    >Subject</label
                  >
                  <input
                    type="text"
                    class="block w-full rounded-md border-default-200 bg-default-50 px-3 py-2 text-sm text-default-950 focus:border-default-300 focus:ring-transparent"
                    id="formSubject"
                    placeholder="Type subject..."
                    required=""
                  />
                </div>
              </div>
              <!-- col-span-2 End -->

              <div class="sm:col-span-2">
                <div class="mb-4">
                  <label
                    for="formMessages"
                    class="mb-2 block text-base font-medium text-default-500"
                    >Messages</label
                  >
                  <textarea
                    class="block w-full rounded-md border-default-200 bg-default-50 px-3 py-2 text-sm text-default-950 focus:border-default-300 focus:ring-transparent"
                    id="formMessages"
                    rows="4"
                    placeholder="Type messages..."
                    required=""
                  ></textarea>
                </div>
              </div>
              <!-- col-span-2 End -->
            </div>
            <!-- grid End -->

            <button
              type="submit"
              class="flex items-center rounded-md bg-primary/90 px-6 py-2 text-white transition-all hover:bg-primary"
            >
              Send Messages
              <lucide-angular
                name="send"
                class="ms-2 size-5 rotate-45"
              ></lucide-angular>
            </button>
          </form>
          <!-- From End -->
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ContactComponent {}
