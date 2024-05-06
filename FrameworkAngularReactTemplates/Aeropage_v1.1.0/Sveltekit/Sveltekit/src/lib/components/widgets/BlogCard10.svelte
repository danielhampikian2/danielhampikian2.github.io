<script lang="ts">
	import type { BlogType } from '$lib/types/landing';
	import { CalendarDaysIcon } from 'lucide-svelte';

	export let blog: BlogType;
</script>

<div class="overflow-hidden rounded-xl border border-default-200">
	<img src={blog.image} alt="" />
	<div class="p-4">
		<div class="flex items-center gap-6">
			{#if (blog.publish)}
				<div class="flex items-center gap-2">
					<CalendarDaysIcon class="h-5 w-5 text-default-950" />
					<p class="text-base text-default-950"> { blog.publish.month } { blog.publish.date }, { blog.publish.year }</p>
				</div>
			{/if}
			<p class="text-base text-default-950">{ blog.category }</p>
		</div>
		<a href={null}>
			<h2 class="mt-3 text-2xl font-medium text-default-950">
				{ blog.title }
			</h2>
		</a>
	</div>
</div>