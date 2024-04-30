<script lang="ts">
	import type { AuthorType, NewsType } from '$lib/types/landing';
	import { avatar1, avatar2, avatar3, webDesignerImg10, webDesignerImg8, webDesignerImg9 } from '$lib/utilities/images';
	import NewsCard from '$lib/components/widgets/NewsCard.svelte';

	const authorData: AuthorType[] = [
		{
			image: avatar1,
			name: 'Olivia Rhye'
		},
		{
			image: avatar3,
			name: 'Olivia Rhye'
		},
		{
			image: avatar2,
			name: 'Olivia Rhye'
		}
	];

	const newsData: NewsType[] = [
		{
			image: webDesignerImg10,
			author: authorData[0],
			title: 'Nature Insects Series: Shaping Insects from Flowers',
			tags: ['Design', 'Marketing'],
			publish: {
				month: 'December',
				date: 3,
				year: 2023
			}
		},
		{
			image: webDesignerImg9,
			author: authorData[1],
			title: 'Minimalistic Design Concept for Balmain Online Store',
			tags: ['Design', 'Marketing'],
			publish: {
				month: 'December',
				date: 2,
				year: 2023
			}
		},
		{
			image: webDesignerImg8,
			author: authorData[2],
			title: 'Spotlight on the Equinox Collection by Shane Griffin',
			tags: ['Design', 'Marketing'],
			publish: {
				month: 'November',
				date: 29,
				year: 2023
			}
		}
	];
</script>

<section id="stories" class="py-10 lg:py-20">
	<div class="container">
		<div class="mx-auto mb-12 max-w-xl text-center">
        <span
					class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
				>Featured Stories</span
				>
			<h2 class="mt-3 text-3xl font-medium text-default-950 md:text-4xl">Latest News</h2>
			<p class="mt-5 text-base">Proin faucibus arcu quis ante. In consectetuer turpis ut velit.</p>
		</div>

		<div>
			{#each newsData as news,idx}
				<NewsCard {news}
									customClass={ idx % 2 === 0? 'border-y border-default-200': '' } />
			{/each}
		</div>
	</div>
</section>