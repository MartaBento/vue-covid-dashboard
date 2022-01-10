<template>
  <div
    class="
      flex flex-wrap
      -mx-3
      overflow-hidden
      sm:-mx-4
      md:-mx-4
      lg:-mx-3
      xl:-mx-2
      m-8
    "
  >
    <div
      class="
        bg-cloud-burst-400
        my-3
        px-3
        w-full
        overflow-hidden
        sm:my-4 sm:px-4 sm:w-1/2
        md:my-4 md:px-4 md:w-1/2
        lg:my-3 lg:px-3 lg:w-1/4
        xl:my-2 xl:px-3 xl:w-1/4
        rounded-md
      "
    >
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
    <div
      class="
        bg-cloud-burst-400
        my-3
        px-3
        w-full
        overflow-hidden
        sm:my-4 sm:px-4 sm:w-1/2
        md:my-4 md:px-4 md:w-1/2
        lg:my-3 lg:px-3 lg:w-1/4
        xl:my-2 xl:px-3 xl:w-1/4
        rounded-md
      "
    >
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

    <div
      class="
        bg-cloud-burst-400
        my-3
        px-3
        w-full
        overflow-hidden
        sm:my-4 sm:px-4 sm:w-1/2
        md:my-4 md:px-4 md:w-1/2
        lg:my-3 lg:px-3 lg:w-1/4
        xl:my-2 xl:px-3 xl:w-1/4
        rounded-md
      "
    >
      <div class="text-cloud-burst-50">Column 1</div>
    </div>

    <div
      class="
        bg-cloud-burst-400
        my-3
        px-3
        w-full
        overflow-hidden
        sm:my-4 sm:px-4 sm:w-1/2
        md:my-4 md:px-4 md:w-1/2
        lg:my-3 lg:px-3 lg:w-1/4
        xl:my-2 xl:px-3 xl:w-1/4
        rounded-md
      "
    >
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