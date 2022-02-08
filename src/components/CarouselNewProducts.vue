<template>
	<Carousel :items-to-show="2.1" snapAlign="start" :wrap-around="true">
		<template #slides>
			<Slide v-for="product in products" :key="product.id">
				<product-item :product="product" />
			</Slide>
		</template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import ProductItem from '@/components/ProductItem.vue';
import ProductItemType from '@/types/ProductItemType';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
	components: {
    Carousel,
    Slide,
		ProductItem
  },
  props: {
		products: {
			type: Array as PropType<ProductItemType[]>,
			required: true
		}
  },
})
</script>

<style lang="scss" scoped>
	
</style>