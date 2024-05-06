import { Component } from '@angular/core'

@Component({
  selector: 'app-bookauthore',
  standalone: true,
  imports: [],

  template: ` <div class="grid items-center gap-6 lg:grid-cols-2">
      <div>
        <h2 class="text-4xl/tight font-medium text-default-950">
          Elevate Your Life with Ebooks Authored by Experts
        </h2>
        <p class="mt-4 text-base">
          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
          sollicitudin and urna dolor sagittis lacus. Vestibulum fringilla pede
          sit amet augue.
        </p>
        <div
          class="mt-10 max-w-xl rounded-md bg-white backdrop-blur-2xl dark:bg-default-100"
        >
          <form class="flex w-full items-center justify-between">
            <input
              type="email"
              name="email"
              id="email"
              class="w-full border-0 bg-transparent p-4 text-base text-default-950 placeholder:text-default-950 focus:outline-none focus:ring-0"
              placeholder="Enter Your Email"
              autocomplete="off"
            />
            <button
              class="me-2 rounded-md border-0 bg-primary px-6 py-2 text-base font-semibold text-white backdrop-blur-2xl transition-all hover:bg-primary-700"
            >
              <div class="flex items-center justify-center gap-1">
                <span>Submit</span>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </button>
          </form>
          <!-- form End -->
        </div>
      </div>
      <!-- col End -->

      <div>
        <div class="mx-auto h-[495px] overflow-hidden">
          <div class="marquee grid grid-cols-2 gap-4 lg:gap-0">
            <div class="relative m-auto flex flex-col gap-6 overflow-hidden">
              <div
                class="marquee-hero flex h-full min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
              >
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-6.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-7.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-8.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-9.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-10.jpg"
                  alt=""
                />
              </div>

              <div
                aria-hidden="true"
                class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
              >
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-6.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-7.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-8.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-9.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-10.jpg"
                  alt=""
                />
              </div>
            </div>

            <div
              class="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden"
            >
              <div
                class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
              >
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-6.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-7.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-8.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-9.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-10.jpg"
                  alt=""
                />
              </div>

              <div
                aria-hidden="true"
                class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
              >
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-6.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-7.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-8.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-9.jpg"
                  alt=""
                />
                <img
                  class="aspect-1 h-full w-60 object-cover"
                  src="assets/images/landing/ebook/img-10.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- col End -->
    </div>
    <!-- grid End -->`,
  styles: ``,
})
export class BookauthoreCompoent {}
