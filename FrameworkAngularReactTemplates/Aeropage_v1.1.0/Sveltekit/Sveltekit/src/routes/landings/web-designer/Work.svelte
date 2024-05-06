<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { WorkType } from '$lib/types/landing';
	import { webDesignerImg2, webDesignerImg3, webDesignerImg4, webDesignerImg5 } from '$lib/utilities/images';

	const workData: WorkType[] = [
		{
			title: 'Medium Scene',
			date: '27 Aug 2021',
			category: 'web-design',
			description:
				'Explore a medium scene where creativity meets innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
			image: webDesignerImg2
		},
		{
			title: 'The Emergence of Design',
			date: '27 Aug 2021',
			category: 'graphic-design',
			description: 'Proin elementum ipsum vel mauris pellentesque accumsan. Nulla in erat ligula, vivamus sed egestas elit, sit amet convallis metus.',
			image: webDesignerImg3
		},
		{
			title: 'Amplitude',
			date: '27 Aug 2021',
			category: 'illustrator',
			description:
				'Aliquam tempus nunc nec rutrum malesuada. Proin pulvinar augue quis pharetra vulputate. Sed lacinia convallis orci vitae condimentum.',
			image: webDesignerImg4
		},
		{
			title: 'Visual Enigma',
			date: '27 Aug 2021',
			category: 'photography',
			description:
				'Suspendisse scelerisque convallis nibh. Maecenas bibendum porta mattis. Donec quis nibh porta dolor ultrices bibendum vel quis leo.',
			image: webDesignerImg5
		}
	];

	let work: WorkType[] = workData;
	let selectedCategory: string = 'all';

	const filterImages = (category: string) => {
		selectedCategory = category;
		setTimeout(() => {
			work = category === 'all' ? workData : workData.filter((album) => album.category?.includes(category));
		}, 300);
	};

</script>

<section id="work" class="py-20">
	<div class="container">
		<div class="mb-10">
			<div class="flex flex-wrap items-center justify-between gap-6">
				<h2 class="text-4xl font-medium text-default-950">Works</h2>

				<div class="filters-group-wrap text-center">
					<div class="filters-group">
						<div class="filter-options flex list-none flex-wrap justify-center gap-4">
							<a href={null} class={selectedCategory === 'all' ? 'active' : ''} on:click={() => filterImages('all')}>
								All
							</a>
							<a href={null} class={selectedCategory === 'web-design' ? 'active' : ''}
								 on:click={() => filterImages('web-design')}
							>Web Design
							</a>
							<a href={null} class={selectedCategory === 'graphic-design' ? 'active' : ''}
								 on:click={() => filterImages('graphic-design')}
							>Graphic Design
							</a>
							<a href={null} class={selectedCategory === 'illustrator' ? 'active' : ''}
								 on:click={() => filterImages('illustrator')}
							>Illustrator
							</a>
							<a href={null} class={selectedCategory === 'photography' ? 'active' : ''}
								 on:click={() => filterImages('photography')}
							>Photography
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id="gallery-wrapper" class="flex items-center flex-wrap">
			{#each work as item}
				<div class="picture-item w-full p-3 xl:w-1/2">
					<div class="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-3 w-full">
						<div class="relative overflow-hidden rounded-lg">
							<img
								class="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
								src={item.image}
								alt=""
								loading="lazy"
								width="640"
								height="805"
							/>
							<div class="absolute inset-0">
								<div class="h-full w-full rounded bg-black/60">
									<div class="flex h-full items-end p-4">
										<div class="overflow-hidden">
											<p class="mb-2 font-medium text-white">{ item.date }</p>
											<h5 class="mb-2 text-3xl font-medium text-white">
												{ item.title }
											</h5>
											<p class="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal">
												{ item.description }
											</p>
											<a href={null} class="group text-lg font-medium text-white"
											>Read More
												<MoveRightIcon
													class="inline-block h-6 w-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>