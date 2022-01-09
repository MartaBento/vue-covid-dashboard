<template>
  <!-- if the browser is not loading the data -->
  <main v-if="!loading">
    <DateTitle :text="title" :date="date" />

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

export default {
  name: "Home",
  components: { Loader, DateTitle, DataContainers },
  data() {
    return {
      loading: true,
      title: "Global",
      date: "",
      stats: {},
      countries: [],
    };
  },
  methods: {
    async fetchData() {
      const request = await fetch("https://api.covid19api.com/summary");
      const finalData = await request.json();
      return finalData;
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
