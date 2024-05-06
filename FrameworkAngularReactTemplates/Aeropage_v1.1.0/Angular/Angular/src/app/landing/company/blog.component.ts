import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { SwiperOptions } from 'swiper/types'
import { SwiperDirective } from '@components/swiper-directive.component'
import { register } from 'swiper/element/bundle'

register()
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [SwiperDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- Start Blog -->
    <section id="blog" class="py-10 lg:py-20">
      <div class="container">
        <div class="mx-auto mb-12 max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Our Blog</span
          >
          <h2 class="mt-3 text-3xl font-medium text-default-950 md:text-4xl">
            News and Knowledge
          </h2>
          <p class="mt-5 text-base">
            Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices
            urna arcu quis. Tristique potenti vitae in adipiscing. Eu augue cras
            quis nec proin pharetra netus massa.
          </p>
        </div>

        <div class="relative">
          <!--Start Swiper -->
          <div class="swiper testimonials_swiper relative">
            <swiper-container
              class="swiper-wrapper"
              [config]="blogConfig"
              init="false"
            >
              @for (item of companySwiper; track $index) {
                <swiper-slide class="swiper-slide">
                  <div class="mx-auto max-w-4xl text-center">
                    <div class="mb-5">
                      <img
                        src="{{ item.imageSrc }}"
                        class="rounded-lg"
                        alt=""
                      />
                    </div>
                    <a
                      href="javascript:void(0);"
                      class="text-xl font-medium text-default-950"
                      >{{ item.title }}</a
                    >
                  </div>
                </swiper-slide>
              }
              <!-- swiper-slide End -->
            </swiper-container>
          </div>
          <!--End Swiper -->
        </div>
        <!-- col End -->
      </div>
      <!-- container End -->
    </section>
    <!-- Eng Blog -->
  `,
  styles: ``,
})
export class BlogComponent {
  // blog swiper
  blogConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode, Navigation],
    loop: true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    breakpoints: {
      440: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  }
  // companySwiper
  companySwiper = [
    {
      imageSrc: 'assets/images/landing/company/img-5.jpg',
      title: '10 Easy Habits to Enhance Your Daily Progress by 1%',
    },
    {
      imageSrc: 'assets/images/landing/company/img-6.jpg',
      title: '5 Mind-Blowing Applications of Artificial Intelligence',
    },
    {
      imageSrc: 'assets/images/landing/company/img-7.jpg',
      title:
        'This Highly Anticipated Technology Could Finally Transform the World',
    },
    {
      imageSrc: 'assets/images/landing/company/img-8.jpg',
      title:
        'Design Thinking: Crafting a Design System for an Established Product',
    },
    {
      imageSrc: 'assets/images/landing/company/img-9.jpg',
      title:
        'If You Possess Self-Discipline, Begin Cultivating These 4 Habits Now',
    },
    {
      imageSrc: 'assets/images/landing/company/img-10.jpg',
      title:
        'This Highly Anticipated Technology Could Finally Transform the World',
    },
  ]
}
