<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
    <div class="flex justify-center text-6xl rounded-xl p-6 bg-cloud-burst-200">
      <div class="px-6 mb-8">
        <p class="text-2xl font-extrabold mt-8 mb-2">Cases</p>
        <p class="text-lg font-light mb-1 text-cloud-burst-50">New</p>
        <p class="text-5xl font-thin mb-1">
          {{ stats.NewConfirmed }}
        </p>
        <p class="text-lg mb-1 text-cloud-burst-50">Total</p>
        <p class="text-5xl font-thin mb-1">
          {{ stats.TotalConfirmed }}
        </p>
      </div>
    </div>
    <div class="flex justify-center text-6xl rounded-xl p-6 bg-cloud-burst-200">
      <div class="px-6 mb-8">
        <p class="text-2xl font-extrabold mt-8 mb-2">Deaths</p>
        <p class="text-lg font-light mb-1 text-cloud-burst-50">New</p>
        <p class="text-5xl font-thin mb-1">
          {{ stats.NewDeaths }}
        </p>
        <p class="text-lg mb-1 text-cloud-burst-50">Total</p>
        <p class="text-5xl font-thin mb-1">
          {{ stats.TotalDeaths }}
        </p>
      </div>
    </div>

    <div class="flex justify-center text-6xl rounded-xl p-6 bg-cloud-burst-200">
      <div class="text-cloud-burst-50">Column 1</div>
    </div>

    <div class="flex justify-center text-6xl rounded-xl p-6 bg-cloud-burst-200">
      <div class="text-cloud-burst-50">Column 1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataContainers",
  props: ["stats"],
};
</script>