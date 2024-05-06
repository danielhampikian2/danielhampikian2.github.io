<script lang="ts">
	import type { ProjectType } from '$lib/types/landing';
	import { startupImg1, startupImg2, startupImg5, startupImg6, startupImg7 } from '$lib/utilities/images';
	import ProjectCard2 from '$lib/components/widgets/ProjectCard2.svelte';

	const categories = ['External Page', 'Lightbox'];

	const projectData: ProjectType[] = [
		{
			image: startupImg5,
			name: 'Medium Scene',
			category: categories[1]
		},
		{
			image: startupImg6,
			name: 'Visual Stranger',
			category: categories[0]
		},
		{
			image: startupImg2,
			name: 'Amplitude',
			category: categories[0]
		},
		{
			image: startupImg1,
			name: 'Rise of Design',
			category: categories[0]
		},
		{
			image: startupImg7,
			name: 'Design System',
			category: categories[1]
		}
	];
</script>

<section id="work" class="overflow-hidden pb-10 pt-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-3xl text-center">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Showcase of Work</span>
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

		<div class="grid gap-6 md:grid-cols-3">

			<ProjectCard2 project={projectData[0]} />

			<div class="md:col-span-2">
				<ProjectCard2 project={projectData[1]} />
			</div>

			{#each projectData.slice(2, projectData.length) as project}
				<ProjectCard2 {project} />
			{/each}
		</div>
	</div>
</section>