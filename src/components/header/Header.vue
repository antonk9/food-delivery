<template>
	<header>
		<div class="header-top">
			<section-title title="Groceries" />
			<i class="icon-heart-filled"></i>
			<router-link :to="{name: 'cart'}">
				<i class="icon-cart">
					<span class="cart-qty" v-if="cartProductsQty">{{ cartProductsQty }}</span>
				</i>
			</router-link>
		</div>
		<div class="header-bottom">
			<search v-if="route.name == 'categories'" />
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import SectionTitle from '@/components/header/SectionTitle.vue'
import Search from '@/components/header/Search.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	components: {
		SectionTitle,
		Search
	},
	setup() {
		const route = useRoute();
		const store = useStore();

		return{
			route,
			cartProductsQty: computed(() => store.state.cart.cartProductsQty)
		}
	}
})
</script>

<style lang="scss" scoped>
	header {
		padding: 16px;
		background: $color-green;
	}

	.header-top {
		display: flex;
		align-items: center;

		.icon-heart-filled {
			margin-left: auto;
			margin-right: 20px;
		}

		i {
			font-size: 18px;
			color: $color-white;
			position: relative;

			&:hover {
				cursor: pointer;
			}
		}

		.cart-qty {
			width: 14px;
			height: 14px;
			background-color: $color-red;
			border-radius: 14px;
			display: inline-block;
			font-size: 10px;
			font-family: $font-family__primary;
			line-height: 14px;
			text-align: center;
			position: absolute;
			top: -5px;
			right: -10px;
		}
	}
</style>