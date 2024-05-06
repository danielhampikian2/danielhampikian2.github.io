<script lang="ts">
	import { ebookImg2, ebookImg3, ebookImg4, ebookImg5 } from '$lib/utilities/images';
	import type { AuthorType, CourseType } from '$lib/types/landing';
	import CourseCard from '$lib/components/widgets/CourseCard.svelte';

	const authorData: AuthorType[] = [
		{
			name: 'Jane willow'
		},
		{
			name: 'Stiven oswald'
		},
		{
			name: 'Andrew clarkson'
		}
	];

	const courseData: CourseType[] = [
		{
			image: ebookImg2,
			title: 'Digital Marketing Course',
			author: authorData[0],
			publish: {
				date: 13,
				month: 'June',
				year: 2018
			}
		},
		{
			image: ebookImg3,
			title: 'Graphic Design Course',
			author: authorData[1],
			publish: {
				date: 17,
				month: 'June',
				year: 2018
			}
		},
		{
			image: ebookImg4,
			title: 'Financial Analyst Course',
			author: authorData[2],
			publish: {
				date: 24,
				month: 'June',
				year: 2018
			}
		}
	];
</script>

<section id="courses" class="py-10 lg:py-20 bg-default-100">
	<div class="container">
		<div class="grid lg:grid-cols-5 lg:gap-12 gap-8 items-center">
			<div class="lg:col-span-2 lg:order-1 order-2">
				<img src={ebookImg5} class="rounded-xl shadow-md h-full w-full" alt="">
			</div>

			<div class="lg:col-span-3 lg:order-2 order-1">
				<h2 class="text-4xl font-medium text-default-950">Our Featured Courses</h2>
				<p class="text-base font-me mt-4">Lorem ipsum dolor sit amet, consectetur, adipiscing elit. pellentesque quils
					arcu nisl. pellentesque quis arcu nisl. pellentesque ac tortor et est dignissim vulputate. proin quis
					sagittis est. phasellus dignissim dui et ipsum elementum, et auctor risus posuere.</p>

				<div class="mt-6">
					{#each courseData as course}
						<CourseCard {course} customClass="mb-5" />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>