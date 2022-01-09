<template>
  <header>
    <div class="container px-4 mx-auto">
      <nav class="flex justify-between items-center py-8">
        <img
          class="h-8"
          src="@/assets/logo-covid.png"
          alt="logo"
          width="auto"
        />
        <p class="mx-3 text-lg">
          COVID-19 Dashboard <i class="fa-solid fa-chart-line"></i>
        </p>
        <div class="lg:hidden">
          <button
            class="
              block
              navbar-burger
              text-indigo-500
              hover:text-indigo-500
              focus:outline-none
            "
          >
            <svg
              class="h-4 w-4"
              fill="currentColor "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden lg:flex ml-auto mr-10 items-center w-auto space-x-12">
          <li>
            <a class="text-sm hover:text-indigo-700 font-medium" href="#"
              >Home Page</a
            >
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
    >
      <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="
          relative
          flex flex-col
          py-6
          px-6
          w-full
          h-full
          bg-white
          border-r
          overflow-y-auto
        "
      >
        <div class="flex items-center mb-12">
          <a class="mr-auto text-2xl font-semibold leading-none" href="#">
            <img
              class="h-8"
              src="@/assets/logo-covid.png"
              alt="logo"
              width="auto"
            />
          </a>
          <button class="navbar-close">
            <svg
              class="h-6 w-6 cursor-pointer hover:text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <a
                class="
                  block
                  p-4
                  text-sm
                  font-semibold
                  hover:bg-indigo-50 hover:text-indigo-500
                  rounded
                "
                href="#"
                >Home Page</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>