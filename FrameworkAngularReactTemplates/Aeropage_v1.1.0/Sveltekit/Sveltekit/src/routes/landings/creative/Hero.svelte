<script lang="ts">
	import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-svelte';
	import { creativeImg1, creativeImg2, creativeImg3 } from '$lib/utilities/images';
	import type { FeatureType } from '$lib/types/landing';

	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

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
			image: creativeImg2,
			title: 'Crafting Vision into Reality: Design Agency at Your Service',
			description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.'
		},
		{
			image: creativeImg3,
			title: 'Innovative Design Solutions: Unleashing Creativity for You',
			description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.'
		},
		{
			image: creativeImg1,
			title: 'Design Excellence Redefined: Elevate Your Brand with Our Agency',
			description: 'Their ability to understand our vision and translate it into a comprehensive marketing strategy is truly exceptional.'
		}
	];
</script>

<section id="home"
				 class="bg-cover bg-no-repeat bg-[url('../images/other/bg-lines-2.png')] dark:bg-[url('../images/other/bg-lines-2-dark.png')]">
	<div class="grid xl:grid-cols-5 grid-cols-1 gap-6 items-end">
		<div class="xl:col-span-3">

			<div class="swiper custom-swiper-1 swiper-hero">
				<div class="swiper-wrapper">

					{#each featureData as feature}
						<div class="swiper-slide relative">
							<img src={feature.image} alt="" class="h-full w-full" />
							<div class="absolute inset-0 bg-black/40"></div>
						</div>
					{/each}

				</div>
			</div>
		</div>

		<div class="relative xl:col-span-2 p-6 xl:p-0">

			<div class="swiper custom-swiper-2 swiper-hero relative me-10">
				<div class="swiper-wrapper">

					{#each featureData as feature}
						<div class="swiper-slide">
							<div class="flex-col flex items-start justify-end xl:h-full pb-28">
								<h2 class="text-4xl font-semibold text-default-950 mt-6 max-w-2xl">{ feature.title }</h2>
								<p class="w-3/4 text-base font-medium mt-5">{ feature.description }</p>
							</div>
						</div>
					{/each}

				</div>
			</div>

			<div class="absolute inset-x-0 bottom-8 z-10">
				<div class="flex items-center justify-end gap-5 relative pe-10">
					<div class="cre-button-prev">
						<div
							class="h-14 w-14 rounded-full border border-default-300 bg-default-50 hover:bg-primary flex items-center justify-center">
							<ArrowLeftIcon class="h-7 w-7 stroke-default-950" />
						</div>
					</div>
					<div class="cre-button-next">
						<div
							class="h-14 w-14 rounded-full border border-default-300 bg-default-50 hover:bg-primary flex items-center justify-center">
							<ArrowRightIcon class="h-7 w-7 stroke-default-950" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>