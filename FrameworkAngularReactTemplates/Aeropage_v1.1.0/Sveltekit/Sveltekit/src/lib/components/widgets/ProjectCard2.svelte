<script lang="ts">
	import type { ProjectType } from '$lib/types/landing';
	import CustomGLightbox from '$lib/components/CustomGLightbox.svelte';

	export let project: ProjectType;
</script>

<CustomGLightbox
	value={{ image: project.image, other: { class: 'block overflow-hidden rounded-lg' } }}
>
	<div class="group relative h-full w-full">
		<img src={project.image} class="h-full w-full" alt="" />
		<div class="absolute inset-0 bg-black/40"></div>
		<div
			class="absolute inset-x-0 bottom-0 top-auto m-2 opacity-0 transition-all duration-700 group-hover:opacity-100"
		>
			<div class="flex justify-center">
				<div
					class="shadows w-full rounded-md bg-white py-3 text-center text-default-950 dark:bg-default-50"
				>
					<h2 class="text-2xl font-medium">{project.name}</h2>
					<p class="mt-1 text-base">{project.category}</p>
				</div>
			</div>
		</div>
	</div>
</CustomGLightbox>
