<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full p-4">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="pt-6 px-6 mb-10 flex justify-between items-center">
              <span
                class="
                  inline-flex
                  items-center
                  justify-center
                  w-9
                  h-10
                  bg-gray-50
                  rounded
                "
              >
                <i class="fas fa-virus"></i>
              </span>
              <a
                class="
                  py-1
                  px-2
                  bg-blue-50
                  text-cloud-burst-700 text-md
                  rounded-full
                "
                href="#"
                >Today</a
              >
            </div>
            <div class="px-6 mb-6">
              <h4 class="text-4xl font-bold">
                {{ formatNumbers(stats.NewConfirmed) }}
              </h4>
              <p class="text-md text-gray-500">New Cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full p-4">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="pt-6 px-6 mb-10 flex justify-between items-center">
              <span
                class="
                  inline-flex
                  items-center
                  justify-center
                  w-9
                  h-10
                  bg-gray-50
                  rounded
                "
              >
                <i class="fas fa-virus"></i>
              </span>
              <a
                class="
                  py-1
                  px-2
                  bg-blue-50
                  text-md text-cloud-burst-700
                  rounded-full
                "
                href="#"
                >Total</a
              >
            </div>
            <div class="px-6 mb-6">
              <h4 class="text-4xl font-bold">
                {{ formatNumbers(stats.TotalConfirmed) }}
              </h4>
              <p class="text-md text-gray-500">Total Cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full p-4">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="pt-6 px-6 mb-10 flex justify-between items-center">
              <span
                class="
                  inline-flex
                  items-center
                  justify-center
                  w-9
                  h-10
                  bg-gray-50
                  rounded
                "
              >
                <i class="fas fa-skull-crossbones"></i>
              </span>
              <a
                class="
                  py-1
                  px-2
                  bg-blue-50
                  text-md text-cloud-burst-700
                  rounded-full
                "
                href="#"
                >Today</a
              >
            </div>
            <div class="px-6 mb-6">
              <h4 class="text-4xl font-bold">
                {{ formatNumbers(stats.NewDeaths) }}
              </h4>
              <p class="text-md text-gray-500">New Deaths</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full p-4">
          <div class="bg-white shadow rounded overflow-hidden">
            <div class="pt-6 px-6 mb-10 flex justify-between items-center">
              <span
                class="
                  inline-flex
                  items-center
                  justify-center
                  w-9
                  h-10
                  bg-gray-50
                  rounded
                "
              >
                <i class="fas fa-skull-crossbones"></i>
              </span>
              <a
                class="
                  py-1
                  px-2
                  bg-blue-50
                  text-md text-cloud-burst-700
                  rounded-full
                "
                href="#"
                >Total</a
              >
            </div>
            <div class="px-6 mb-6">
              <h4 class="text-4xl font-bold">
                {{ formatNumbers(stats.TotalDeaths) }}
              </h4>
              <p class="text-md text-gray-500">Total Deaths</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataContainers",
  props: ["stats"],
  methods: {
    formatNumbers(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>