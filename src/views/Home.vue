<template>
  <div class="home">
    <carousel-stores-banners :items="bannerItems" class="carousel-stores" v-if="bannerItems" />
    <category-grid :productCategories="productCategories" />
    <carousel-new-products :products="newProducts" v-if="newProducts.length" />
    <carousel-popular-products :products="popularProducts" v-if="popularProducts.length" />
    <carousel-stores :stores="stores" v-if="stores.length" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { useStore } from 'vuex';
import CarouselStoresBanners from '@/components/CarouselStoresBanners.vue';
import CarouselStores from '@/components/CarouselStores.vue';
import CarouselNewProducts from '@/components/CarouselNewProducts.vue';
import CarouselPopularProducts from '@/components/CarouselPopularProducts.vue';
import CategoryGrid from '@/components/CategoryGrid.vue';
import StoreType from '@/types/StoreType';


export default defineComponent({
  name: 'Home',
  components: {
    CarouselStoresBanners,
    CarouselStores,
    CategoryGrid,
    CarouselNewProducts,
    CarouselPopularProducts
  },

  setup() {
    const store = useStore();
    
    return {
      bannerItems: computed(() => store.state.banneritems),
      productCategories: computed(() => store.state.productCategories),
      newProducts: computed(() => store.getters['products/getNewProducts']),
      popularProducts: computed(() => store.getters['products/getPopularProducts']),
      stores: computed(() => store.state.stores.stores as PropType<StoreType[]>)
    }
  }
});
</script>

<style lang="scss" scoped>

</style>
