<template>
  <div class="home">
    <carousel-stores :items="bannerItems" class="carousel-stores" v-if="bannerItems" />
    <category-grid :productCategories="productCategories" />
    <carousel-new-products :products="products" :stores="stores" v-if="products.length && stores.length" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import CarouselStores from '@/components/CarouselStores.vue';
import CarouselNewProducts from '@/components/CarouselNewProducts.vue';
import CategoryGrid from '@/components/CategoryGrid.vue';


export default defineComponent({
  name: 'Home',
  components: {
    CarouselStores,
    CategoryGrid,
    CarouselNewProducts
  },

  setup() {
    const store = useStore();

    store.dispatch('receiveStoreBannerItems')
    store.dispatch('receiveProductCategories')
    store.dispatch('stores/receiveStores')
    store.dispatch('products/receiveNewProducts')

    // onMounted(async() => {
    //   await store.dispatch('products/updateProductStoreData')
    // })
    
    return {
      bannerItems: computed(() => store.state.banneritems),
      productCategories: computed(() => store.state.productCategories),
      products: computed(() => store.state.products.products),
      stores: computed(() => store.state.stores.stores)
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
