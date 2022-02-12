<template>
	<div class="product-item">
		<router-link :to="product.src">
			<div class="product-item__image" :style="`background-image:url(${product.imageSrc})`"></div>
			<div class="product-item__details">
				<h3 class="product-item__title">{{ product.title }}</h3>
				<div class="product-item__store">
					<img :src="product.store.avatarSrc" />
					<label>{{ product.store.label }}</label>
				</div>
				<div class="product-item__price">
					<span class="product-item__price-discount" v-if="product.price.priceNew">
						<span class="product-item__price-old">${{ product.price.priceOld }}</span>
						<span class="product-item__price-new">${{ product.price.priceNew }}</span>
					</span>
					<span class="product-item__price-normal" v-else>
						${{ product.price.priceNormal }}
					</span>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductItemType from '@/types/ProductItemType';

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
	.product-item {
		border-radius: 10px;
		background-color: $color-white;
		overflow: hidden;
		border: 1px solid rgba($color-black, 0.1);
		width: 100%;

		&__image {
			display: block;
			background-repeat: none repeat;
			height: 127px;
			width: 100%;
		}

		&__title {
			@include default-black;
			width: 100%;
			margin-bottom: 15px;
		}

		&__details {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			padding: 12px;
			box-sizing: border-box;
		}
		
		&__store {
			display: flex;
			align-items: center;

			img {
				max-height: 20px;
				max-width: 20px;
			}

			label {
				color: rgba($color-black, 0.5);
				margin-left: 6px;
				display: block;
				text-overflow: ellipsis;
				width: 60px;
				overflow: hidden;
				white-space: nowrap;
			}
		}

		&__price {
			&-new,
			&-normal {
				@include default-black-semibold();
				color: $color-green;
				font-weight: $font-weight--semibold;
			}

			&-old {
				@include default-black-small();
				text-decoration: line-through;
				padding-right: 5px;
				vertical-align:middle;
			}

			&-discount {
				vertical-align:middle;
			}
		}
	}
</style>