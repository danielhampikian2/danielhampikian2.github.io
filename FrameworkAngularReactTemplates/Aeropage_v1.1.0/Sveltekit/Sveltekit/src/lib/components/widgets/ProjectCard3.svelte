<script lang="ts">

	import { CalendarIcon, ListTodoIcon, MessageSquareIcon } from 'lucide-svelte';
	import type { ProjectType } from '$lib/types/admin';

	export let project: ProjectType;
</script>

<div class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50">
	<div class="flex items-center justify-between border-b border-default-200 px-4 py-3">
		<h5 class="text-lg text-default-900">{ project.category }</h5>
		<div
			class="rounded-md px-1.5 py-1 text-xs font-medium text-white capitalize {project.status === 'in progress' ? 'bg-primary' : project.status === 'pending' ? 'bg-amber-500' : 'bg-teal-500'}"
			role="alert"
		>
			<span>{ project.status }</span>
		</div>
	</div>
	<div class="flex flex-col">
		<div class="px-6 py-3">
			<h5 class="my-2">
				<a href={project.path} class="text-default-900">{ project.name }</a>
			</h5>
			<p class="mb-9 text-sm text-default-500">
				{ project.about }
			</p>

			<div class="flex -space-x-2">
				{#each project.assignees as assignee}
					<a href={null}>
						<img class="inline-block h-12 w-12 rounded-full border-2 border-default-50" src={assignee.image}
								 alt="" />
					</a>
				{/each}

				{#if project.image}
					<a href={null}>
						<div class="relative inline-flex">
							<button
								class="inline-flex size-12 items-center justify-center rounded-full border-2 border-white bg-default-200 align-middle text-sm font-medium text-default-700 shadow-sm transition-all hover:bg-default-300 dark:border-default-50"
							>
								<span class="font-medium leading-none">{ project.image }</span>
							</button>
						</div>
					</a>
				{/if}
			</div>
		</div>

		<div class="border-t border-default-200 p-5">
			<div class="grid gap-4 lg:grid-cols-2">
				<div class="flex items-center justify-between gap-2">
					<a href={null} class="text-sm flex">
						<CalendarIcon class="me-2 text-lg h-4 w-4 self-center" />
						<span class="align-text-bottom">{ project.started.date } { project.started.month }</span>
					</a>

					<a href={null} class="text-sm flex">
						<ListTodoIcon class="me-2 text-lg h-4 w-4 self-center" />
						<span class="align-text-bottom">{ project.tasks }</span>
					</a>

					<a href={null} class="text-sm flex">
						<MessageSquareIcon class="me-2 text-lg h-4 w-4 self-center" />
						<span class="align-text-bottom">{ project.comments }</span>
					</a>
				</div>
				<div class="flex items-center gap-2">
					<div class="h-1.5 w-full rounded-full bg-default-200">
						<div
							class="h-1.5 w-2/3 rounded-full {project.progress >= 75 ? 'bg-primary' : project.progress < 75 && project.progress >= 50 ? 'bg-teal-500' : 'bg-amber-500/80'}"
						></div>
					</div>
					<span>{ project.progress }%</span>
				</div>
			</div>
		</div>
	</div>
</div>