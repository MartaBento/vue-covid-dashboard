<template>
  <div>
    <p class="text-5xl font-normal leading-normal mt-16 mb-2 text-center">{{ text }}</p>
    <p class="text-base font-medium leading-tight mt-0 mb-2 text-center">{{ timestamp }}</p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DateTitle",
  props: ["text", "date"],
  computed: {
    timestamp: function () {
      return moment(this.date).format("MMMM Do YYYY, h:mm:ss a");
    },
  },
};
</script>