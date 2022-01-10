<template>
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <select
        v-model="selected"
        @change="onChange()"
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
        <option value="0">Select Country</option>
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
      selected: 0, // default value
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find((item) => item.ID === this.selected);
      console.log(country);
      this.$emit("get-country", country);
    },
  },
};
</script>