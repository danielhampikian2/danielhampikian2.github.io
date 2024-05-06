<!-- Main Navigation Menu -->
<header id="navbar" class="<?= ($menuPosition) ? $menuPosition : 'sticky' ?> inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center bg-white dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80">
  <div class="container">
    <div class="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
      <div class="flex w-full items-center justify-between lg:w-auto">
        <!-- Navbar Brand Logo -->
        <a href="/index">
          <img src="assets/images/logo-dark.png" alt="logo" class="flex h-10 dark:hidden" />
          <img src="assets/images/logo-light.png" alt="logo" class="hidden h-10 dark:flex" />
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button class="hs-collapse-toggle inline-block lg:hidden" id="hs-unstyled-collapse" data-hs-collapse="#mobileMenu" data-hs-type="collapse">
          <i data-lucide="menu" class="size-7 text-default-600 hover:text-default-900"></i>
        </button>
      </div>

      <div id="mobileMenu" class="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto">
        <!-- Navigation Menu -->
        <ul class="menu flex flex-col justify-center gap-y-2 lg:flex-row lg:items-center">

          <?php
          foreach ($navLinkItems as $item) {
            echo "<li class='menu-item text-default-800 transition-all hover:text-primary lg:mx-2 [&.active]:text-primary'>
                      <a class='inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base' href='#$item->id'>$item->name
                      </a>
                  </li>";
          }
          ?>

          <!-- Dropdown Menu -->
          <li class="menu-item group text-default-800 lg:mx-2">
            <div class="hs-dropdown relative inline-flex [--placement:bottom]">
              <a class="hs-dropdown-toggle inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium after:absolute after:inset-0 after:-bottom-20 hover:text-primary lg:text-base" href="javascript:void(0)">
                Landing <i class="ms-2 size-4" data-lucide="chevron-down"></i>
              </a>

              <div class="hs-dropdown-menu z-10 mt-4 hidden min-w-48 rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
                <ul class="grid grid-cols-2 gap-1">
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-agency">Agency</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-agency-2">Agency Two</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-charity">Charity</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-company">Company</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-creative">Creative</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-ebook">eBook</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-finance">Finance</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-hosting">Hosting</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-marketing">Marketing</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-marketing-2">Marketing Two</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-marketing-3">Marketing Three</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-photography">Photography</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-portfolio-2">Portfolio Two</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-startup">Startup</a>
                  </li>
                  <li>
                    <a class="flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700" href="/index-web-designer">Web Designer</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="ms-auto hidden shrink gap-2 lg:inline-flex">
        <a
          href="#"
          class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-1.5 text-base text-white transition-all hover:bg-primary-700"
        >
          <i data-lucide="download-cloud" class="size-4 fill-white/40"></i>
          <span class="hidden sm:block">Download</span>
        </a>
      </div>
    </div>
  </div>
</header>