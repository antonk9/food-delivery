<template>
	<div class="product-item">
		<router-link :to="product.src">
			<div class="product-item__image" :style="`background-image:url(${product.imageSrc})`"></div>
			<h3 class="product-item__title">{{ product.title }}</h3>
			<div class="product-item__details">
				<div class="product-item__store">
					<img :src="product.store.avatarSrc" />
					<label>{{ product.store.label }}</label>
				</div>
				<div class="product-item__price">
					<span class="product-item__price-new" v-if="product.price.priceNew">
						<stroke>{{ product.price.priceOld }}</stroke>
						<b>{{ product.price.priceNew }}</b>
					</span>
					<span class="product-item__price-normal" v-else>
						{{ product.price.priceNormal }}
					</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductItemType from '@/types/ProductItemType';
import StoreType from '@/types/StoreType';

export default defineComponent({
	props: {
		product: {
			type: Object as PropType<ProductItemType>,
			required: true
		}
	}
})
</script>

<style lang="scss" scoped>

</style>