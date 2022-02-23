<template>
	<div class="category-products">
		<product-item :product="product" v-for="product in getCategoryProducts" :key="product.id" />
	</div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import ProductItem from '@/components/ProductItem.vue';

export default defineComponent({
	components: {
		ProductItem
	},
	setup () {
		const store = useStore();
		const route = useRoute()
		
		const products = computed(() => store.state.products.filteredProducts.length ? 
			store.state.products.filteredProducts : 
			store.state.products.products)

		return {
			getCategoryProducts: computed(() => products.value.filter(product => product.categoryId == route.params.categoryId))
		}
	}
})
</script>

<style lang="scss" scoped>
	.category-products {
		display: flex;
		flex-wrap: wrap;
		padding: 30px 23px;
		justify-content: space-between;

		.product-item {
			width: calc(50% - 5px);
			box-sizing: border-box;
			margin-bottom: 10px;
		}
	}
</style>