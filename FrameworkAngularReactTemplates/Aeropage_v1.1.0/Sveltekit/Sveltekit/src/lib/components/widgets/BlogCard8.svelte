<script lang="ts">
	import type { BlogType } from '$lib/types/landing';
	import { CalendarDaysIcon, MessageSquareIcon } from 'lucide-svelte';

	export let blog: BlogType;
</script>

<div class="overflow-hidden rounded-lg border border-default-200 p-6">
	<div class="group relative overflow-hidden">
		<div class="overflow-hidden rounded-md">
			<img
				src={blog.image}
				class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
				alt="" />
		</div>
		<div class="mt-6 flex items-center gap-5">
			{#if (blog.publish)}
				<div class="group flex items-center gap-3">
					<CalendarDaysIcon
						class="h-5 w-5 text-default-300 transition-all duration-700 group-hover:text-primary" />
					<p class="text-base text-default-950">{ blog.publish.month } { blog.publish.date }, { blog.publish.year }</p>
				</div>
			{/if}
			<div class="group flex items-center gap-3">
				<MessageSquareIcon
					class="h-5 w-5 text-default-300 transition-all duration-700 group-hover:text-primary" />
				<p class="text-base text-default-950">{ blog.category }</p>
			</div>
		</div>

		<h2 class="mt-4 text-xl font-medium text-default-950 transition-all duration-700 group-hover:underline">
			{ blog.title }
		</h2>
		<p class="mt-4 text-base">
			{ blog.description }
		</p>
	</div>
</div>