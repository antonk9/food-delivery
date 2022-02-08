<template>
  <Header />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header/Header.vue'


export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
});
</script>

<style lang="scss">
#app {
  width: $app-max-width;
  background-color: $color-gray-light;
  overflow: auto;
  height: 100%;
  margin: 0 auto;
}

</style>
