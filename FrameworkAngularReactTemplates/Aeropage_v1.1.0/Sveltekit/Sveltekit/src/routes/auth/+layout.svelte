<script lang="ts">

	import { authBg, authImg } from '$lib/utilities/images';
</script>


<div
	class="relative bg-cover bg-center bg-no-repeat p-2 lg:p-0"
	style={`background-image: url(${authBg})`}
>
	<div class="absolute inset-0 bg-black/10"></div>

	<div class="flex h-screen w-full items-center justify-center">
		<div
			class="max-w-4xl overflow-hidden rounded-lg bg-black/60 backdrop-blur-3xl"
		>
			<div class="grid lg:grid-cols-2">
				<div class="hidden py-2.5 ps-2.5 lg:block">
					<div class="relative h-full overflow-hidden rounded-md">
						<div class="absolute inset-0 bg-black/40"></div>
						<img
							src={authImg}
							alt=""
							class="h-full max-w-full"
						/>
					</div>
				</div>

				<slot />

			</div>
		</div>
	</div>
</div>
