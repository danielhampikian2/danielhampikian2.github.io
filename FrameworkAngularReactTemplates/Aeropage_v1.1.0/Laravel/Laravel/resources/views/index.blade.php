@extends('layouts.base', ['title' => 'AeroPage'])

@section('css')

@endsection

@section('content')
    <header
        id="navbar"
        class="fixed inset-x-0 top-0 z-40 w-full border-b border-transparent transition-all duration-300 [&.nav-sticky]:bg-white/90 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80">
        <div class="flex h-full items-center py-4">
            <div class="container">
                <nav
                    class="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
                    <div class="flex w-full items-center justify-between lg:w-auto">
                        <!-- Navbar Brand Logo -->
                        <a href="{{route('any', 'index')}}">
                            <img
                                src="/images/logo-dark.png"
                                alt="logo"
                                class="flex h-10 dark:hidden"
                            />
                            <img
                                src="/images/logo-light.png"
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
                            <i
                                data-lucide="menu"
                                class="size-7 text-default-600 hover:text-default-900"
                            ></i>
                        </button>
                    </div>

                    <!-- Navigation Menu -->
                    <div
                        id="mobileMenu"
                        class="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto"
                    >
                        <ul
                            class="menu flex flex-col justify-center gap-y-2 lg:flex-row lg:items-center"
                        >
                            <!-- Contact us Link -->
                            <li
                                class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary"
                            >
                                <a
                                    class="inline-flex items-center rounded-full px-4 py-2"
                                    href="#home"
                                >Home</a
                                >
                            </li>
                            <!-- Contact us Link -->
                            <li
                                class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary"
                            >
                                <a
                                    class="inline-flex items-center rounded-full px-4 py-2"
                                    href="#demo"
                                >Demos</a
                                >
                            </li>
                            <!-- Contact us Link -->
                            <li
                                class="menu-item text-sm font-medium text-default-800 transition-all duration-300 hover:text-primary-600 lg:text-base [&.active]:text-primary"
                            >
                                <a
                                    class="inline-flex items-center rounded-full px-4 py-2"
                                    href="#features"
                                >Features</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="ms-auto hidden shrink gap-2 lg:inline-flex">
                        <a
                            href="#"
                            class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all duration-300 hover:bg-primary-700"
                        >
                            <i
                                data-lucide="download-cloud"
                                class="size-4 fill-white/40"
                            ></i>
                            <span class="hidden sm:block">Download</span>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <section
        class="bg-default-10 relative border-b border-default-100 bg-[url(/public/images/other/bg-lines-2.png)] py-6 dark:bg-default-50 dark:bg-[url(/public/images/other/bg-lines-2-dark.png)] sm:py-10 md:py-32"
        id="home"
    >
        <div class="px-6 sm:px-10 md:px-20">
            <div class="grid items-center gap-x-6 gap-y-10">
                <div class="mb-10 mt-12 flex flex-col items-center justify-center">
                    <div class="text-center">
                        <div class="mb-4 flex items-center justify-center gap-4">
                <span class="h-10">
                  <img
                      src="/images/logo-sm.png"
                      alt="images"
                      class="h-full max-w-full"
                  />
                </span>
                            <span
                                class="inline-block rounded-md bg-primary/10 px-4 text-base/loose font-semibold text-primary"
                            >v1.0.0</span
                            >
                        </div>
                        <h1
                            class="mb-6 text-3xl font-semibold capitalize text-default-950 sm:text-5xl/tight"
                        >
                            <span class="text-primary">AeroPage</span> - One Page Template
                        </h1>
                        <p class="mx-auto max-w-3xl text-base text-default-700">
                            The Make your website or web application perfect starting point
                            for your next project and the ultimate resource for learning how
                            experts build real websites with Tailwind CSS.
                        </p>
                    </div>

                    <div class="my-16 text-center">
                        <p class="text-xl font-medium text-default-900">
                            Technology stack
                        </p>
                        <div
                            class="mt-4 inline-flex flex-wrap items-center justify-center gap-3"
                        >
                            <div
                                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
                            >
                                <div
                                    class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                                >
                                    <img
                                        src="/images/demo/logo/tailwindcss.svg"
                                        class="size-8"
                                    />
                                </div>
                                <div
                                    class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                                    role="tooltip"
                                    data-popper-placement="top"
                                >
                                    Tailwindcss
                                    <div
                                        class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
                            >
                                <div
                                    class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                                >
                                    <img
                                        src="/images/demo/logo/html.svg"
                                        class="size-8"
                                    />
                                </div>
                                <div
                                    class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                                    role="tooltip"
                                    data-popper-placement="top"
                                >
                                    HTML5
                                    <div
                                        class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
                            >
                                <div
                                    class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                                >
                                    <img
                                        src="/images/demo/logo/css.svg"
                                        class="size-8"
                                    />
                                </div>
                                <div
                                    class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                                    role="tooltip"
                                    data-popper-placement="top"
                                >
                                    CSS3
                                    <div
                                        class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
                            >
                                <div
                                    class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                                >
                                    <img
                                        src="/images/demo/logo/javascript.svg"
                                        class="size-8"
                                    />
                                </div>
                                <div
                                    class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                                    role="tooltip"
                                    data-popper-placement="top"
                                >
                                    Javascript
                                    <div
                                        class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
                            >
                                <div
                                    class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                                >
                                    <img
                                        src="/images/demo/logo/bun.svg"
                                        class="size-8"
                                    />
                                </div>
                                <div
                                    class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                                    role="tooltip"
                                    data-popper-placement="top"
                                >
                                    Bun
                                    <div
                                        class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
                            >
                                <div
                                    class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                                >
                                    <img
                                        src="/images/demo/logo/yarn.svg"
                                        class="size-8"
                                    />
                                </div>
                                <div
                                    class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                                    role="tooltip"
                                    data-popper-placement="top"
                                >
                                    Yarn
                                    <div
                                        class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                    ></div>
                                </div>
                            </div>
                            <div
                                class="hs-tooltip inline-block [--placement:top] [--trigger:hover]"
                            >
                                <div
                                    class="hs-tooltip-toggle flex size-14 items-center justify-center rounded-lg bg-default-100"
                                >
                                    <img
                                        src="/images/demo/logo/vitejs-logo.svg"
                                        class="size-8"
                                    />
                                </div>
                                <div
                                    class="hs-tooltip-content relative z-50 hidden rounded bg-default-950 px-3 py-1 font-semibold text-default-200 opacity-0 transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                                    role="tooltip"
                                    data-popper-placement="top"
                                >
                                    ViteJs
                                    <div
                                        class="absolute -bottom-1 start-1/2 -z-10 h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[1px] bg-default-950"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap items-center gap-4">
                        <a
                            href="#demo"
                            class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2 font-semibold text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary-600"
                        >
                            Landing Demos <i data-lucide="eye" class="ms-3 size-5"></i
                            ></a>
                        <a
                            href="{{ route('second', [ 'admin' , 'dashboard']) }}"
                            target="_blank"
                            class="inline-flex items-center justify-center rounded-lg bg-primary/20 px-6 py-2 font-semibold text-primary backdrop-blur-2xl transition-all duration-500 hover:bg-primary hover:text-white"
                        >
                            Admin Demos <i data-lucide="airplay" class="ms-3 size-5"></i
                            ></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="demo" class="py-20">
        <div class="mx-20">
            <div class="mx-auto mb-14 text-center">
          <span
              class="mb-2 inline-flex rounded-lg border-x-2 border-x-primary-600 bg-primary/20 px-2 text-base font-semibold text-primary-700"
          >Demo</span
          >
                <h2 class="mb-2.5 text-3xl font-semibold text-default-950">
                    Landing Demo
                </h2>
                <p class="text-base text-default-900">
                    Elevate Your Presence: Unveiling the Power of Our Landing Demo!
                </p>
            </div>

            <div
                class="justify-content-center grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                <a class="" href="{{ route('second', ['landings', 'agency-1']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/agency.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/agency-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Agency
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'agency-2']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/agency-2.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/agency-2-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Agency Two
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'charity']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/charity.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/charity-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Charity
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'company']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/company.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/company-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Company
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'creative']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/creative.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/creative-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Creative
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'ebook']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/ebook.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/ebook-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Ebook
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'finance']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/finance.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/finance-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Finance
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'hosting']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/hosting.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/hosting-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Hosting
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'marketing-1']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/marketing.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/marketing-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Marketing
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'marketing-2']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/marketing-2.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/marketing-2-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Marketing 2
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'marketing-3']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/marketing-3.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/marketing-3-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Marketing 3
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'photography']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/photography.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/photography-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Photography
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'portfolio-1']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/portfolio.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/portfolio-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Portfolio
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'portfolio-2']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/portfolio-2.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/portfolio-2-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Portfolio 2
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['landings', 'startup']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/startup.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/startup-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Startup
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <div class="justify-center gap-3 lg:col-span-3 lg:flex">
                    <div class="lg:w-1/3">
                        <a class="" href="{{ route('second', ['landings', 'web-designer']) }}" target="_blank">
                            <div
                                class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                            >
                                <div class="p-4">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <img
                                            alt="demo-img"
                                            class="w-full rounded-lg border border-default-100 dark:hidden"
                                            src="/images/demo/web-designer.png"
                                        />
                                        <img
                                            alt="demo-img"
                                            class="hidden w-full rounded-lg border border-default-100 dark:block"
                                            src="/images/demo/web-designer-dark.png"
                                        />
                                        <div
                                            class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                        >
                                            <div
                                                class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                            >
                                                Live Preview
                                                <span
                                                    class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                                ><i class="size-5" data-lucide="external-link"></i
                                                    ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h5
                                        class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                                    >
                                        Web Designer
                                    </h5>
                                </div>
                            </div>
                        </a
                        ><!-- end grid-col -->
                    </div>
                </div>
            </div>
            <!-- end grid -->
        </div>
        <!-- end container -->
    </section>

    <section id="admin-demo" class="py-20">
        <div class="mx-20">
            <div class="mx-auto mb-14 text-center">
          <span
              class="mb-2 inline-flex rounded-lg border-x-2 border-x-primary-600 bg-primary/20 px-2 text-base font-semibold text-primary-700"
          >Demo</span
          >
                <h2 class="mb-2.5 text-3xl font-semibold text-default-950">
                    Admin Demo
                </h2>
                <p class="text-base text-default-900">
                    a cutting-edge, one-page template designed for unparalleled
                    performance and seamless user experiences
                </p>
            </div>

            <div
                class="justify-content-center grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                <a class="" href="{{ route('second', ['admin', 'dashboard']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/admin-dashboard.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/admin-dashboard-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Dashboard
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['admin', 'chat']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/admin-chat.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/admin-chat-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Chat
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', ['admin', 'project']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100 dark:hidden"
                                    src="/images/demo/admin-project.png"
                                />
                                <img
                                    alt="demo-img"
                                    class="hidden w-full rounded-lg border border-default-100 dark:block"
                                    src="/images/demo/admin-project-dark.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Project
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <div class="justify-center gap-3 lg:col-span-3 lg:flex">
                    <div class="lg:w-1/3">
                        <a class="" href="{{ route('second', ['ui-kit', 'components']) }}" target="_blank">
                            <div
                                class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                            >
                                <div class="p-4">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <img
                                            alt="demo-img"
                                            class="w-full rounded-lg border border-default-100 dark:hidden"
                                            src="/images/demo/ui-components.png"
                                        />
                                        <img
                                            alt="demo-img"
                                            class="hidden w-full rounded-lg border border-default-100 dark:block"
                                            src="/images/demo/ui-components-dark.png"
                                        />
                                        <div
                                            class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                        >
                                            <div
                                                class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                            >
                                                Live Preview
                                                <span
                                                    class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                                ><i class="size-5" data-lucide="external-link"></i
                                                    ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h5
                                        class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                                    >
                                        Ui Components
                                    </h5>
                                </div>
                            </div>
                        </a
                        ><!-- end grid-col -->
                    </div>
                </div>
            </div>
            <!-- end grid -->
        </div>
        <!-- end container -->
    </section>

    <section class="py-20">
        <div class="mx-20">
            <div class="mx-auto mb-14 text-center">
          <span
              class="mb-2 inline-flex rounded-lg border-x-2 border-x-primary-600 bg-primary/20 px-2 text-base font-semibold text-primary-700"
          >Demo</span
          >
                <h2 class="mb-2.5 text-3xl font-semibold text-default-950">
                    Security
                </h2>
                <p class="text-base text-default-900">
                    serves as the perfect starting point for your next project,
                    showcasing the expertise in building real websites with Tailwind CSS
                </p>
            </div>

            <div
                class="justify-content-center grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
                <a class="" href="{{ route('second', [ 'auth' , 'login']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100"
                                    src="/images/demo/auth-login.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Sign In
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', [ 'auth' , 'register']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100"
                                    src="/images/demo/auth-register.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Sign Up
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <a class="" href="{{ route('second', [ 'auth' , 'logout']) }}" target="_blank">
                    <div
                        class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                    >
                        <div class="p-4">
                            <div class="relative overflow-hidden rounded-lg">
                                <img
                                    alt="demo-img"
                                    class="w-full rounded-lg border border-default-100"
                                    src="/images/demo/auth-logout.png"
                                />
                                <div
                                    class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                >
                                    <div
                                        class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                    >
                                        Live Preview
                                        <span
                                            class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                        ><i class="size-5" data-lucide="external-link"></i
                                            ></span>
                                    </div>
                                </div>
                            </div>
                            <h5
                                class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                            >
                                Logout
                            </h5>
                        </div>
                    </div>
                </a
                ><!-- end grid-col -->

                <div class="justify-center gap-3 lg:col-span-3 lg:flex">
                    <div class="lg:w-1/3">
                        <a class="" href="{{ route('second', [ 'auth' , 'recoverpw']) }}" target="_blank">
                            <div
                                class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                            >
                                <div class="p-4">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <img
                                            alt="demo-img"
                                            class="w-full rounded-lg border border-default-100"
                                            src="/images/demo/auth-recoverpw.png"
                                        />
                                        <div
                                            class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                        >
                                            <div
                                                class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                            >
                                                Live Preview
                                                <span
                                                    class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                                ><i class="size-5" data-lucide="external-link"></i
                                                    ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h5
                                        class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                                    >
                                        Forgot Password
                                    </h5>
                                </div>
                            </div>
                        </a
                        ><!-- end grid-col -->
                    </div>

                    <div class="lg:w-1/3">
                        <a class="" href="{{ route('second', [ 'auth' , 'reset-password']) }}" target="_blank">
                            <div
                                class="group relative rounded-lg border border-default-100 bg-white text-center shadow-md transition-all duration-500 hover:-translate-y-1 dark:bg-default-50"
                            >
                                <div class="p-4">
                                    <div class="relative overflow-hidden rounded-lg">
                                        <img
                                            alt="demo-img"
                                            class="w-full rounded-lg border border-default-100"
                                            src="/images/demo/auth-reset-password.png"
                                        />
                                        <div
                                            class="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center bg-default-500/20 opacity-0 transition-all duration-300 group-hover:opacity-100"
                                        >
                                            <div
                                                class="inline-flex items-center justify-center rounded-lg bg-primary py-1.5 pe-2 ps-5 text-center align-middle text-base font-semibold text-white duration-500 hover:bg-primary-600"
                                            >
                                                Live Preview
                                                <span
                                                    class="ms-3 inline-flex size-8 items-center justify-center rounded-md border border-white bg-white text-primary"
                                                ><i class="size-5" data-lucide="external-link"></i
                                                    ></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h5
                                        class="mt-4 text-center text-lg font-medium capitalize text-default-900"
                                    >
                                        Reset Password
                                    </h5>
                                </div>
                            </div>
                        </a
                        ><!-- end grid-col -->
                    </div>
                </div>
            </div>
            <!-- end grid -->
        </div>
        <!-- end container -->
    </section>

    <section class="py-20" id="features">
        <div class="mx-20">
            <div class="mx-auto mb-14 text-center">
          <span
              class="mb-2 inline-flex rounded-lg border-x-2 border-x-primary-600 bg-primary/20 px-2 text-base font-semibold text-primary-700"
          >Features</span
          >
                <h2 class="mb-2.5 text-3xl font-semibold text-default-950">
                    Awesome Template Features
                </h2>
            </div>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50">
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center">
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary-500/20 text-primary-600">
                                    <img
                                        src="/images/demo/logo/tailwindcss.svg"
                                        class="size-6"
                                    />
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Built With Tailwind CSS
                                </h4>
                                <p class="text-sm">
                                    Rapidly build modern websites without ever leaving your
                                    HTML.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="airplay"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Ultra Responsive
                                </h4>
                                <p class="text-sm">
                                    Our fully Responsive design ensures your content is
                                    beautifully presented no matter what device your audience is
                                    using.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="sun-moon"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Dark Demo Support
                                </h4>
                                <p class="text-sm">
                                    Embark on a Rich Experience: Unveiling a Host of Advanced
                                    Features within Our Dark Demo Support Environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="package"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Production Ready
                                </h4>
                                <p class="text-sm">
                                    Our solutions have undergone extensive testing to ensure
                                    they can handle the demands of a production environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="figma"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Hygienic Design
                                </h4>
                                <p class="text-sm">
                                    Our designs feature smooth and continuous surfaces,
                                    minimizing areas where dirt, bacteria, or contaminants can
                                    accumulate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="circuit-board"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    High Performance
                                </h4>
                                <p class="text-sm">
                                    We understand that your requirements are unique. Our
                                    high-performance solutions are customizable to match your
                                    specific goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="globe-2"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Multi Browser Support
                                </h4>
                                <p class="text-sm">
                                    Our e-commerce store is rigorously tested and optimized to
                                    work flawlessly on all major web browsers, offering a
                                    consistent shopping experience to all our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="file-text"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Well Documented
                                </h4>
                                <p class="text-sm">
                                    Our documentation is a treasure trove of valuable
                                    information, from getting started guides to advanced
                                    tutorials. It's all there to help you make the most of our
                                    services.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="users-2"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Great Support
                                </h4>
                                <p class="text-sm">
                                    Our support team is always ready to help. Whether you have
                                    questions, encounter issues, or need guidance, we're just a
                                    message or call away.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="move"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Highly Customizable
                                </h4>
                                <p class="text-sm">
                                    Our product is designed to adapt to your specific
                                    requirements. Whether you're an individual, a business, or
                                    an organization, we provide the tools to customize it to
                                    your liking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50">
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center">
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600">
                                    <i class="size-6" data-lucide="feather"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    Light as a Feather
                                </h4>
                                <p class="text-sm">
                                    From our years of experience and expertise in Development,
                                    we know users vary, they could have slow of fast network.
                                    They all deserve seamless experience in shopping with you.
                                    That's why our product is developed with fewer lines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50"
                >
                    <div class="p-6">
                        <div
                            class="flex flex-col items-center justify-center gap-4 text-center"
                        >
                            <div class="shrink">
                                <div
                                    class="inline-flex size-12 items-center justify-center rounded-md bg-primary/20 text-primary-600"
                                >
                                    <i class="size-6" data-lucide="star"></i>
                                </div>
                            </div>
                            <div class="grow">
                                <h4 class="mb-2 text-lg font-semibold text-default-950">
                                    UX Considered
                                </h4>
                                <p class="text-sm">
                                    A good design does not need any explanation because a good
                                    design can speak for itself. Out app doesn't only have a
                                    good User Interface, we also have considered User
                                    experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p
                class="mt-6 text-center text-base font-medium text-primary-900 dark:text-primary-100"
            >
                Empower Your Journey with Our Engaging Landing Demo.🔥
            </p>
        </div>
    </section>

    <footer class="relative border-t border-default-200">
        <div class="container relative">
            <p class="py-6 text-center font-medium text-default-900">
                <script>
                    document.write(new Date().getFullYear().toString());
                </script>
                © AeroPage. Crafted and Coded with
                <span class="text-red-500">❤️</span> by
                <a
                    class="text-primary-700"
                    href="https://coderthemes.com/"
                    target="_blank"
                >Coderthemes</a
                >
            </p>
        </div>
    </footer>
@endsection

@section('script-bottom')

@endsection
