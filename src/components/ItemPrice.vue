<template>
	<div class="item__price">
		<span class="item__price-discount" v-if="price.priceNew">
			<span class="item__price-new">${{ price.priceNew }}</span>
			<span class="item__price-old">${{ price.priceOld }}</span>
			<span class="item__price-percentage" v-if="pricePercentage">{{ pricePercentage }}% off</span>
		</span>
		<span class="item__price-normal" v-else>
			${{ price.priceNormal }}
		</span>
	</div>
</template>


<script lang="ts">
import { defineComponent, PropType, toRefs, computed } from 'vue'
import { ItemPrice } from '@/types/ProductItemType';

export default defineComponent({
	props: {
		price: {
			type: Object as PropType<ItemPrice>,
			required: true
		}
	},
	setup(props) {
			let { price } = toRefs(props)
			const pricePercentage = computed(() => price.value.priceNew * 100 / price.value.priceOld)


			return {
				pricePercentage
			}
		}
})
</script>

<style lang="scss" scoped>
		.item__price {
			&-old {
				@include default-black();
				text-decoration: line-through;
			}

			&-new,
			&-normal {
				@include font-title();
				color:$color-green;
				margin-right: 14px;
			}

			&-percentage {
				@include default-black();
				padding-left: 5px;
			}
		}
</style>