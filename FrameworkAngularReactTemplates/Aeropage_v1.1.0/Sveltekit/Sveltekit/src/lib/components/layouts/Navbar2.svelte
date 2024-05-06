<script lang="ts">
	import { logoDark, logoLight } from '$lib/utilities/images';
	import { ChevronDownIcon, MenuIcon, DownloadCloudIcon } from 'lucide-svelte';

	import { navbarLinkData } from '$lib/utilities/layout';
	import type { NavbarLinkType } from '$lib/types/layout';

	import gumshoeMin from 'gumshoejs';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	$: currentRoute = $page.url.pathname;
	export let navbarLink: NavbarLinkType[];
	export let menuPosition: string = 'fixed';

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

<header id="navbar"
				class={`inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center bg-white dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80 ${menuPosition}`}>
	<div class="container">
		<div class="flex items-center justify-between flex-wrap lg:flex-nowrap gap-4">
			<div class="w-full lg:w-auto flex items-center justify-between">
				<!-- Navbar Brand Logo -->
				<a href="/">
					<img src={logoDark} alt="logo" class="h-10 flex dark:hidden">
					<img src={logoLight} alt="logo" class="h-10 hidden dark:flex">
				</a>

				<!-- Mobile Menu Toggle Button -->
				<button class="hs-collapse-toggle lg:hidden inline-block" id="hs-unstyled-collapse"
								data-hs-collapse="#mobileMenu" data-hs-type="collapse">
					<MenuIcon class="w-7 h-7 text-default-600 hover:text-default-900" />
				</button>
			</div>

			<div id="mobileMenu"
					 class="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0 overflow-hidden">
				<!-- Navigation Menu -->
				<ul class="menu flex lg:items-center justify-center flex-col lg:flex-row gap-y-2">

					{#each navbarLink as link}
						<li class="menu-item text-default-800 lg:mx-2 transition-all hover:text-primary [&.active]:text-primary">
							<a class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
								 href={`#${link.id}`}>{ link.name }</a>
						</li>
					{/each}

					<!-- Dropdown Menu -->
					<li class="menu-item text-default-800 lg:mx-2 group">
						<div class="hs-dropdown relative inline-flex  [--placement:bottom]">
							<a
								class="hs-dropdown-toggle after:absolute after:-bottom-20 after:inset-0 inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full hover:text-primary"
								href={null}>
								Landing
								<ChevronDownIcon class="w-4 h-4 ms-2" />
							</a>

							<div
								class="hs-dropdown-menu hs-dropdown-open:opacity-100 min-w-48 transition-[opacity,margin] mt-4 opacity-0 hidden z-10 bg-white shadow-lg rounded-lg border border-default-100 p-1.5 dark:bg-default-50">
								<ul class="grid grid-cols-2 gap-1">
									{#each navbarLinkData as item}
										<li>
											<a
												class={`flex items-center text-sm font-medium text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-400/10 rounded`}
												class:text-primary="{currentRoute === item.path}"
												href={item.path}>{ item.name }
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>


			<div class="ms-auto shrink hidden lg:inline-flex gap-2">
				<a href={null}
					 class="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500">
					<DownloadCloudIcon class="h-4 w-4 fill-white/40" />
					<span class="hidden sm:block">Download</span>
				</a>
			</div>

		</div>
	</div>
</header>