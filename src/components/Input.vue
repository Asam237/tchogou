<template>
  <input
    :placeholder="placeHolder"
    :type="type"
    :v-model="myModel"
    style="font-family: 'Yaldevi', sans-serif"
    class="site__input my-2 border-2 p-1 rounded-sm"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    placeHolder: String,
    type: String,
    myModel: String,
  },
};
</script>