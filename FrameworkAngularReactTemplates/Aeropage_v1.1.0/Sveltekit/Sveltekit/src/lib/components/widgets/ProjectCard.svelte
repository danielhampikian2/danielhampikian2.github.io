<script lang="ts">
	import type { ProjectType } from '$lib/types/landing';

	export let project: ProjectType;
	export let customClass: string = '';
</script>

<div class={`group relative ${customClass}`}>
	<img
		src={project.image}
		class="h-full w-full rounded-xl"
		alt=""
	/>

	<div
		class="absolute inset-x-2 bottom-2 rounded-md bg-white/10 opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:opacity-100">
		<div class="p-6 text-center">
			<h2 class="text-3xl font-medium text-white">
				{ project.name }
			</h2>
			<p class="mt-2 text-base text-white">{ project.category }</p>
		</div>
	</div>
</div>