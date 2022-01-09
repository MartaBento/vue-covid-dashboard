<template>
  <div
    class="bg-white flex space-x-2 p-5 rounded-full justify-center items-center"
  >
    <div
      class="bg-gray-900 p-2 w-6 h-6 rounded-full animate-bounce first-circle"
    ></div>
    <div
      class="bg-gray-500 p-2 w-6 h-6 rounded-full animate-bounce second-circle"
    ></div>
    <div
      class="bg-gray-200 p-2 w-6 h-6 rounded-full animate-bounce third-circle"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
.first-circle {
  animation-delay: 0.1s;
}
.second-circle {
  animation-delay: 0.2s;
}
.third-circle {
  animation-delay: 0.3s;
}
</style>