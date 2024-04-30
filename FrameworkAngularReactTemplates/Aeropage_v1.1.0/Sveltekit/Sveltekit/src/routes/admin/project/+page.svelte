<script lang="ts">
	import AdminPageTitle from '$lib/components/layouts/AdminPageTitle.svelte';
	import ProjectCard3 from '$lib/components/widgets/ProjectCard3.svelte';
	import { projectData } from './data';
</script>


<AdminPageTitle title="Project" subtitle="Admin" />

<section>
	<div class="container">
		<div class="my-6 space-y-6">
			<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{#each projectData as project}
					<ProjectCard3 {project} />
				{/each}
			</div>
		</div>
	</div>
</section>