<script lang="ts">
	import { AirplayIcon, Clock10Icon, StarIcon } from 'lucide-svelte';
	import type { CourseType } from '$lib/types/landing';

	export let course: CourseType;
	export let customClass: string = '';
</script>

<div class={`bg-white shadow-md rounded-lg overflow-hidden dark:bg-default-50 ${customClass}`}>
	<div class="grid sm:grid-cols-5">
		{#if course.author}
			<div>
				<img src={course.image} class="h-full w-full" alt="">
			</div>
		{/if}

		<div class="sm:col-span-4 group p-6">
			<h3 class="text-2xl font-medium text-default-950 hover:text-primary transition-all cursor-pointer">
				{ course.title }</h3>
			{#if course.author}
				<p class="text-base text-default-950 mt-3">{ course.author.name }</p>
			{/if}
			<div class="flex items-center justify-between mt-5">
				{#if course.publish}
					<p class="text-base text-default-9500">{ course.publish.month } { course.publish.date }, { course.publish.year }</p>
				{/if}
				<div class="flex items-center gap-4">
					<a href={null}>
						<Clock10Icon class="h-5 w-5 hover:text-primary transition-all" />
					</a>
					<a href={null}>
						<StarIcon class="h-5 w-5 hover:text-primary transition-all" />
					</a>
					<a href={null}>
						<AirplayIcon class="h-5 w-5 hover:text-primary transition-all" />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>