<template>
  <!-- if the browser is not loading the data -->
  <main v-if="!loading">
    <DateTitle :text="title" :date="date" />
    <CountrySelector
      :countries="countries"
      :stats="stats"
      @get-country-name="getCountryTitle"
      @get-country-info="getCountryData"
    />
    <div class="flex justify-center mt-6">
      <button
        class="
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:ring-blue-300
          font-medium
          rounded-full
          text-sm
          px-5
          py-2.5
          text-center
          mr-2
          mb-2
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
        @click="clearSelectedCountry"
      >
        Clear
      </button>
    </div>
    <DataContainers :stats="stats" />
  </main>

  <!-- if the browser is loading the data, show an animated loading bar to the user" -->
  <main v-else>
    <p class="text-4xl text-center font-medium leading-tight mt-8 mb-8">
      Information is loading...
    </p>
    <Loader />
  </main>
</template>

<script>
import Loader from "@/components/Loader.vue";
import DateTitle from "@/components/DateTitle.vue";
import DataContainers from "@/components/DataContainers.vue";
import CountrySelector from "@/components/CountrySelector.vue";

export default {
  name: "Home",
  components: { Loader, DateTitle, DataContainers, CountrySelector },
  data() {
    return {
      loading: true,
      title: "Worlwide 🌍",
      date: "",
      stats: {},
      countries: [],
    };
  },
  methods: {
    async fetchData() {
      const request = await fetch("https://api.covid19api.com/summary");
      const data = await request.json();
      return data;
    },
    getCountryTitle(country) {
      this.title = country;
    },
    getCountryData(data) {
      this.stats = data[0];
    },
    async clearSelectedCountry() {
      this.loading = true;
      const data = await this.fetchData();
      this.title = "Worlwide 🌍";
      this.stats = data.Global;
      this.loading = false;
    },
  },
  async created() {
    const data = await this.fetchData();
    console.log(data);

    this.date = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
};
</script>
