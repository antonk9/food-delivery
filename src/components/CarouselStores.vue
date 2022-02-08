<template>
	<Carousel :items-to-show="1.5" snapAlign="start" :wrap-around="true">
		<template #slides>
			<Slide v-for="item in items" :key="item.id" :style="`background-image:url(${item.src})`">
				<div class="carousel__item">
					<label>{{ item.label }}</label>
					<c-button class="carousel__item-button" styleType="transparent" @doClick="routeTo(item.storeLink)">
						{{ item.buttonText }}
					</c-button>
				</div>
			</Slide>
		</template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Carousel, Slide } from 'vue3-carousel';
import { useRouter } from 'vue-router';
import cButton from '@/components/ui/cButton.vue';
import CarouselStoresTypeItem from '@/types/CarouselStoresType';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
	components: {
    Carousel,
    Slide,
		cButton
  },
  props: {
		items: {
			type: Array as PropType<CarouselStoresTypeItem[]>,
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
		&__slide {
			width: 302px !important;
			height: 165px;
			display: block;
			background-repeat: no-repeat;
			margin: 11px 0 16px 16px;
			border-radius: 7px;
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
			}
		}
	}
</style>