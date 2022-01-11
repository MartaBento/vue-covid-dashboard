<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <select
        v-model="selected"
        @change="emitChange"
        class="
          form-select
          appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-bg-cloud-burst-50
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mt-10
          focus:text-bg-cloud-burst-50 focus:outline-none
        "
        aria-label="Country Selector"
      >
        <option value="" disabled>Select country</option>
        <option v-for="country in countries" :key="country.ID">
          {{ country.Country }}
        </option>
      </select>
    </div>
  </div>
</template>


<script>
export default {
  name: "CountrySelector",
  props: ["countries"],
  data() {
    return {
      selected: '',
    };
  },
  methods: {
    emitChange() {
      let chosenCountry = this.selected;
      let listOfAllCountries = this.countries;
      var countryData = listOfAllCountries.filter(
        (x) => x.Country === chosenCountry
      );
      this.$emit("get-country-name", chosenCountry);
      this.$emit("get-country-info", countryData);
    },
  },
};
</script>