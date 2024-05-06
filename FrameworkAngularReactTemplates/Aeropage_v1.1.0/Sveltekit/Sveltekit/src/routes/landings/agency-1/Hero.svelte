<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

	import type { FeatureType } from '$lib/types/landing';
	import { agencyImg1, agencyImg2, agencyImg3 } from '$lib/utilities/images';
	import { ArrowUpRightIcon } from 'lucide-svelte';

	onMount(() => {

		const swiperEl1 = document.querySelector<HTMLElement>('.custom-swiper-1');
		const swiperEl2 = document.querySelector<HTMLElement>('.custom-swiper-2');

		if (swiperEl1 && swiperEl2) {

			const thumbSwiper = new Swiper(swiperEl1, {
				modules: [Thumbs, FreeMode, Navigation],
				loop: false,
				effect: 'fade',
				speed: 1000,
				watchSlidesProgress: true
			});

			new Swiper(swiperEl2, {
				speed: 1000,
				spaceBetween: 10,
				modules: [Thumbs, FreeMode, Autoplay, Navigation],
				loop: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false
				},
				navigation: {
					nextEl: '.cre-button-next',
					prevEl: '.cre-button-prev'
				},
				thumbs: {
					swiper: thumbSwiper
				},
				watchSlidesProgress: true
			});
		}

	});

	const featureData: FeatureType[] = [
		{
			image: agencyImg1,
			title: 'Beyond a Design Agency',
			description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
			tag: 'Digital agency'
		},
		{
			image: agencyImg2,
			title: 'Beyond a Design Agency',
			description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
			tag: 'Digital agency'
		},
		{
			image: agencyImg3,
			title: 'Beyond a Design Agency',
			description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.',
			tag: 'Digital agency'
		}
	];
</script>

<section id="home" class="bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-1.svg')]">
	<div class="grid xl:grid-cols-5 grid-cols-1 items-center relative">
		<div class="relative xl:col-span-2 p-6 xl:p-0 xl:-me-24 xl:mt-0 -mt-24 z-10 order-2 xl:order-none">
			<div class="max-w-xl mx-auto xl:ms-auto xl:me-0 rounded-xl bg-default-100 dark:bg-default-50">
				<div class="p-6">

					<div class="swiper custom-swiper-2 relative">
						<div class="swiper-wrapper">

							{#each featureData as feature}
								<div class="swiper-slide">
									<div class="flex-col flex items-start justify-end xl:h-full">
											<span
												class="text-base font-medium uppercase tracking-wider text-default-800">{ feature.tag }</span>
										<h2 class="md:text-4xl/snug text-3xl font-semibold text-default-950 mt-6">{ feature.title }</h2>
										<p class="md:w-3/4 text-base mt-5 mb-7">{ feature.description }</p>
										<a href={null}
											 class="inline-flex items-center justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-300">Get
											Solution
											<ArrowUpRightIcon class="h-6 w-6" />
										</a>
									</div>
								</div>
							{/each}

						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="xl:col-span-3 order-1 xl:order-none">

			<div class="swiper custom-swiper-1">
				<div class="swiper-wrapper">

					{#each featureData as feature}
						<div class="swiper-slide relative">
							<img src={feature.image} alt="" class="h-full w-full" />
							<div class="absolute inset-0 bg-black/25"></div>
						</div>
					{/each}

				</div>
			</div>

		</div>
	</div>
</section>