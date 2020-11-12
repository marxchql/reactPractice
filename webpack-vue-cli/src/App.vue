<template>
  <div>
    {{ msg }}
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from 'co/HelloWorld.vue';

export default {
  data() {
    return {
      msg: 'hello world11111'
    };
  },
  components: {
    HelloWorld
  }
};
</script>
<style></style>
