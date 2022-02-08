<template>
	<div class="product-categories-grid">
		<router-link 
			v-for="category in productCategories" 
			:key="category.id" 
			:to="category.categoryLink"
			:style="`background-image:url(${category.src})`"
			class="product-categories-grid__item">
			<p class="product-categories-grid__item-title">{{ category.title }}</p>
		</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductCategoriesType from '@/types/ProductCategoriesType';

export default defineComponent({
	props: {
		productCategories: {
			type: Array as PropType<ProductCategoriesType[]>,
			required: true
		}
	}
})
</script>

<style lang="scss" scoped>
	.product-categories-grid {
		display: flex;
		flex-wrap: wrap;

		&__item {
			border-right: 1px solid $color-white;
			border-bottom: 1px solid $color-white;
			width: calc(25% - 1px);
			height: 115px;
			background-size: cover;
			background-position: center;
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			color: $color-white;

			&:nth-child(4n) {
				border-right: none;
			}

			&-title {
				font-size: 11px;
				font-weight: $font-weight__semi-bold;
			}
		}
	}
</style>