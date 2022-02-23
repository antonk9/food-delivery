<template>
	<div class="products-new">
			<div class="products-new__header">
				<h2>Popular products</h2>
				<c-button styleType="small">See All</c-button>
			</div>
			<swiper 
				:spaceBetween="10"
				:slidesPerView="'auto'"
			>
				<swiper-slide v-for="product in products" :key="product.id">
					<product-item :product="product" />
				</swiper-slide>
			</swiper>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductItem from '@/components/ProductItem.vue';
import ProductItemType from '@/types/ProductItemType';
import cButton from '@/components/ui/cButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/swiper-bundle.css";

export default defineComponent({
	components: {
    Swiper,
		SwiperSlide,
		ProductItem,
		cButton
  },
  props: {
		products: {
			type: Array as PropType<ProductItemType[]>,
			required: true
		}
  },
	data(){
		return {
			swiperOptions: {
				loop: true,
			}	
		}
	},
})
</script>

<style lang="scss" scoped>
	.products-new {
		padding: 25px 20px;

		&__header {
			display: flex;
			justify-content: space-between;
			margin-bottom: 16px;

			h2 { 
				color: $color-black;
			}
		}
	}
	.swiper-slide {
		width: 160px;
	}
</style>