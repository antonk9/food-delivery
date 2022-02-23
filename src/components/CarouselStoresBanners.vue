<template>
	<swiper 
		:slidesPerView="'auto'"
		:spaceBetween="10"
		class="carousel">
		<swiper-slide v-for="item in items" :key="item.id" :style="`background-image:url(${item.src})`" class="carousel__slide">
			<div class="carousel__item">
				<label>{{ item.label }}</label>
				<c-button class="carousel__item-button" styleType="transparent" @doClick="routeTo(item.storeLink)">
					{{ item.buttonText }}
				</c-button>
			</div>
		</swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useRouter } from 'vue-router';
import cButton from '@/components/ui/cButton.vue';
import CarouselStoresBanner from '@/types/CarouselStoresBanner';
import "swiper/swiper-bundle.css";

export default defineComponent({
	components: {
    Swiper,
		SwiperSlide,
		cButton
  },
  props: {
		items: {
			type: Array as PropType<CarouselStoresBanner[]>,
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
	.carousel {
		margin: 11px 16px 16px 16px;

		&__slide {
			width: 302px !important;
			height: 165px;
			display: block;
			background-repeat: no-repeat;
			border-radius: 7px;

			&:hover {
				cursor: pointer;
			}
		}

		&__item {
			padding: 17px;
			text-align: left;

			&-button {
				text-transform: uppercase;
				font-size: 12px;
				font-weight: $font-weight__bold;
				letter-spacing: 0.73px;
			}

			label {
				margin: 35px 0 17px;
				display: block;
				text-transform: uppercase;
				width: 200px;
				@include default-white();
			}
		}
	}

	.swiper-slide {
		width: 302px;
	}
</style>