<template>
	<div class="carousel-stores">
		<div class="carousel-stores__header">
				<h2>Stores to follow</h2>
				<c-button styleType="small-white">View all</c-button>
			</div>
			<swiper 
				:spaceBetween="10"
				:slidesPerView="'auto'"
			>
				<swiper-slide v-for="store in stores" :key="store.id">
					<store-item :store="store" />
				</swiper-slide>
			</swiper>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import cButton from '@/components/ui/cButton.vue';
import StoreType from '@/types/StoreType';
import StoreItem from '@/components/StoreItem.vue'
import "swiper/swiper-bundle.css";

export default defineComponent({
	components: {
    Swiper,
		SwiperSlide,
		cButton,
		StoreItem
  },
  props: {
		stores: {
			type: Array as PropType<StoreType[]>,
			required: true
		}
  },

	setup () {
		const router = useRouter()
		
		function routeTo(query: string) {
			router.push({ path: query })
		}

		return {
			routeTo
		}
	}
})
</script>

<style lang="scss" scoped>

.carousel-stores {
	padding: 22px 20px;
	margin-top: 20px;
	position: relative;

	&:before {
		content: '';
		background-color: $color-green;
		height: 184px;
		width: 100%;
		display: block;
    position: absolute;
    left: 0;
	}

	&__header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
		z-index: 1;
    position: relative;
    margin-top: 21px;
	}
}
	
	.swiper-slide {
		width: 160px;
		min-height: 200px;
	}
</style>