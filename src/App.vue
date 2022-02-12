<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/header/Header.vue'
import Footer from '@/components/Footer.vue'


export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer
  },
});
</script>

<style lang="scss">
#app {
  width: $app-max-width;
  background-color: $color-gray-light;
  overflow: auto;
  height: calc(100% - 86px);
  margin: 0 auto;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: rgba($color-black, 0.1);
    }
    &::-webkit-scrollbar-thumb {
      background: rgba($color-black, 0.4);
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba($color-black, 0.6);
    }
}

</style>
