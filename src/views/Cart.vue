<template>
	<div>
		<div class="cart__address">
			Add New Address
		</div>
		<ul class="cart__items">
			<li v-for="product in cartProducts" :key="product.id">
				<div class="cart__item-image" :style="`background-image:url(${product.images.small})`"></div>
				<div class="cart__item-details">
					<p class="cart__item-title">{{ product.title }}</p>
					<item-price class="cart__item-price" :price="product.price" />
					<div class="cart__item-qty">{{ product.qty }}</div>
					<span @click="removeProduct(product.id)">Remove</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';
import ItemPrice from '@/components/ItemPrice.vue';

export default defineComponent({
	components: {
		ItemPrice
	},
	setup () {
		const store = useStore();

		return {
			cartProducts: computed(() => store.getters['cart/getCartProducts']),
			removeProduct: productId => store.dispatch('cart/removeProduct', productId)
		}
	}
})
</script>

<style lang="scss" scoped>

</style>