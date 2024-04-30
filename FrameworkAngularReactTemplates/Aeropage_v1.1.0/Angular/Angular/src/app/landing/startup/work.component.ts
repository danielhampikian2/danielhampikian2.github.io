import { AfterViewInit, Component } from '@angular/core'
import { Lightbox, LightboxModule } from 'ngx-lightbox'

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [LightboxModule],
  template: `
    <!-- Start Portfolio -->
    <section id="work" class="overflow-hidden pb-10 pt-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-3xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Showcase of Work</span
            >
            <h2 class="my-4 text-4xl/tight font-medium text-default-950">
              Explore Work
            </h2>
            <p class="text-base">
              A static website preserves a distinct file for every page of the
              site. Whenever a user requests a specific page, the same content
              is delivered.
            </p>
          </div>
        </div>
        <!-- flex End -->

        <div class="grid gap-6 md:grid-cols-3">
          @for (item of lightboxImage; track $index) {
            @if (item.isLarge) {
              <div class="md:col-span-2">
                <a
                  href="javascript:void(0);"
                  class="glightbox block overflow-hidden rounded-lg"
                  (click)="openImage($index)"
                >
                  <div class="group relative">
                    <img [src]="item.imageUrl" class="h-full w-full" alt="" />
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div
                      class="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100"
                    >
                      <div class="flex justify-center">
                        <div
                          class="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50"
                        >
                          <h2 class="text-2xl font-medium">{{ item.title }}</h2>
                          <p class="mt-1 text-base">{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            } @else {
              <a
                class="glightbox block overflow-hidden rounded-lg"
                (click)="openImage($index)"
              >
                <div class="group relative h-full w-full">
                  <img src="{{ item.imageUrl }}" class="h-full w-full" alt="" />
                  <div class="absolute inset-0 bg-black/40"></div>
                  <div
                    class="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100"
                  >
                    <div class="flex justify-center">
                      <div
                        class="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50"
                      >
                        <h2 class="text-2xl font-medium">{{ item.title }}</h2>
                        <p class="mt-1 text-base">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            }
          }
        </div>
      </div>
    </section>
    <!-- End Portfolio -->
  `,
  styles: ``,
})
export class WorkComponent {
  // Make _albums public
  images: Array<{ src: string; thumb: string }> = []
  gallery: Array<{ src: string; caption: string; thumb: string }> = []

  private _albums: Array<any> = []

  constructor(private _lightbox: Lightbox) {
    for (let item of this.lightboxImage) {
      const src = item.imageUrl
      const caption = item.title
      const thumb = item.imageUrl // Use the same image for thumbnail, adjust as needed
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      }

      this._albums.push(album)
    }
  }
  /**
   * Open lightbox
   */
  openImage(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index, {
      showZoom: true,
    })
  }

  lightboxImage = [
    {
      imageUrl: 'assets/images/landing/startup/img-5.jpg',
      title: 'Medium Scene',
      description: 'Lightbox',
    },
    {
      imageUrl: 'assets/images/landing/startup/img-6.jpg',
      title: 'Visual Stranger',
      description: 'External Page',
      isLarge: true,
    },
    {
      imageUrl: 'assets/images/landing/startup/img-2.jpg',
      title: 'Amplitude',
      description: 'External Page',
    },
    {
      imageUrl: 'assets/images/landing/startup/img-1.jpg',
      title: 'Rise of Design',
      description: 'External Page',
    },
    {
      imageUrl: 'assets/images/landing/startup/img-7.jpg',
      title: 'Design System',
      description: 'Lightbox',
    },
  ]
}
