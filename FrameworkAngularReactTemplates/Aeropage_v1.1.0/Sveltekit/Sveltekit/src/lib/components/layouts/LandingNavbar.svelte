<script>
	import { logoDark, logoLight } from '$lib/utilities/images';
	import { DownloadCloudIcon, MenuIcon } from 'lucide-svelte';

	import gumshoeMin from 'gumshoejs';
	import { onMount } from 'svelte';

	const initStickyNav = () => {
		const windowScroll = () => {
			const navbar = document.getElementById('navbar');
			if (navbar) {
				if (
					document.body.scrollTop >= 75 ||
					document.documentElement.scrollTop >= 75
				) {
					navbar.classList.add('nav-sticky');
				} else {
					navbar.classList.remove('nav-sticky');
				}
			}
		};

		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		});
	};

	const initNavLinkActive = () => {
		if (document.querySelector('.menu a')) {
			gumshoeMin('.menu a', {
				offset: 80
			});
		}
	};

	onMount(() => {
		initStickyNav();
		initNavLinkActive();
	});
</script>

<header
	id="navbar"
	class="fixed inset-x-0 top-0 z-40 w-full border-b border-transparent transition-all duration-300 [&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80">
	<div class="flex h-full items-center py-4">
		<div class="container">
			<nav
				class="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap"
			>
				<div class="flex w-full items-center justify-between lg:w-auto">
					<!-- Navbar Brand Logo -->
					<a href="/">
						<img
							src={logoDark}
							alt="logo"
							class="flex h-10 dark:hidden"
						/>
						<img
							src={logoLight}
							alt="logo"
							class="hidden h-10 dark:flex"
						/>
					</a>

					<!-- Mobile Menu Toggle Button -->
					<button
						class="hs-collapse-toggle inline-block lg:hidden"
						id="hs-unstyled-collapse"
						data-hs-collapse="#mobileMenu"
						data-hs-type="collapse"
					>
						<MenuIcon class="size-7 text-default-600 hover:text-default-900" />
					</button>
				</div>

				<!-- Navigation Menu -->
				<div
					id="mobileMenu"
					class="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto">
					<ul
						class="menu flex flex-col justify-center gap-y-2 lg:flex-row lg:items-center">
						<!-- Contact us Link -->
						<li
							class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary">
							<a
								class="inline-flex items-center rounded-full px-4 py-2"
								href="#home"
							>Home</a>
						</li>
						<!-- Contact us Link -->
						<li
							class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary">
							<a
								class="inline-flex items-center rounded-full px-4 py-2"
								href="#demo"
							>Demos</a>
						</li>
						<!-- Contact us Link -->
						<li
							class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary">
							<a
								class="inline-flex items-center rounded-full px-4 py-2"
								href="#features"
							>Features</a>
						</li>
					</ul>
				</div>

				<div class="ms-auto hidden shrink gap-2 lg:inline-flex">
					<a
						href={null}
						class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all duration-300 hover:bg-primary-700">
						<DownloadCloudIcon class="size-4 fill-white/40" />
						<span class="hidden sm:block">Download</span>
					</a>
				</div>
			</nav>
		</div>
	</div>
</header>