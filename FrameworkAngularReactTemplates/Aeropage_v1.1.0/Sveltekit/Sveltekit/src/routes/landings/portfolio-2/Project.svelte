<script lang="ts">
	import { MoveRightIcon } from 'lucide-svelte';
	import type { ProjectType } from '$lib/types/landing';
	import { portfolio2Img2, portfolio2Img3, portfolio2Img4 } from '$lib/utilities/images';
	import ProjectCard from '$lib/components/widgets/ProjectCard.svelte';

	const categories = ['Branding'];

	const projectData: ProjectType[] = [
		{
			image: portfolio2Img2,
			name: 'Branding Identity',
			category: categories[0]
		},
		{
			image: portfolio2Img3,
			name: 'The Space Needle',
			category: categories[0]
		},
		{
			image: portfolio2Img4,
			name: 'Emergency Response and Cleanup',
			category: categories[0]
		}
	];
</script>

<section id="project" class="py-10 lg:py-20">
	<div class="container">
		<div class="mb-10 flex items-end justify-between">
			<div class="mx-auto max-w-2xl text-center">
            <span
							class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
						>Our Project</span>
				<h2 class="mt-4 text-4xl font-medium capitalize text-default-950">
					Recent Endeavors
				</h2>
			</div>
		</div>

		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2">

			<ProjectCard project={projectData[0]} />

			<div>
				{#each projectData.slice(1, projectData.length) as project,idx}
					<ProjectCard customClass={idx%2!==0?'mt-5':''} {project} />
				{/each}
			</div>
		</div>

		<div class="mt-5 flex justify-center">
			<div class="inline-block">
				<a href={null}
					 class="mt-6 flex items-center justify-center gap-2 rounded-md border border-default-300 px-6 py-2 text-base text-default-950 transition-all hover:border-primary hover:bg-primary hover:text-white">All
					Project
					<MoveRightIcon class="h-7 w-7" />
				</a>
			</div>
		</div>
	</div>
</section>