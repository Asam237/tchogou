<template>
  <div class="site__title py-14 flex items-center justify-center bg-black">
    <h1
      style="font-family: 'Yaldevi', sans-serif"
      class="text-white font-bold text-xl md:text-4xl"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String,
  },
};
</script>