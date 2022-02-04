<template>
  <div class="home">
    <Header />
  </div>
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
