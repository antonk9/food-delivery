<template>
	<div class="page-product" v-if="currentProduct">
		<div class="page-product__image" :style="`background-image:url(${currentProduct.images.large})`">
			<span class="icon-back" @click="previousPage"></span>
		</div>
		<div class="page-product__main">
			<p class="page-product__title">
				{{ currentProduct.title }}
			</p>
			<item-price 
				class="page-product__price" 
				:price="currentProduct.price" />
		</div>
		<div class="page-product__store">
			<span class="page-product__store-avatar" :style="`background-image:url(${currentProduct.store.avatarSrc})`"></span>
			<span class="page-product__store-label">{{ currentProduct.store.label }}</span>
			<c-button styleType="small" class="page-product__store-button">
				Follow
			</c-button>
		</div>
		<div class="page-product__description">
			<div class="page-product__description-content">{{currentProduct.description}}</div>
		</div>
		<ul class="page-product__details">
			<li v-for="(detail, i) in currentProduct.details" :key="i">
				<p class="label">{{ detail.attr }}</p>
				<p class="title">{{ detail.val }}</p>
			</li>
		</ul>
		<div class="page-product__details-additional">
			<h3>Additional Details</h3>
			<ul>
				<p class="label">Delvery details</p>
				<li v-for="(detail, i) in currentProduct.additionalDetails.deliveryDetails" :key="i">
					<template v-if="i !== 0">, </template>
					<span class="title">{{ detail }}</span>
				</li>
			</ul>
		</div>
	</div>
	<div class="page-product__add-to-cart-button">
			<c-button styleType="bottom" @doClick="addToCart(currentProduct.id)">Add To Cart</c-button>
		</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import ItemPrice from '@/components/ItemPrice.vue';
import cButton from '@/components/ui/cButton.vue';
import { useRouter } from 'vue-router'

export default defineComponent({
	components: {
		ItemPrice,
		cButton
	},
	setup () {
		const store = useStore();
		const router = useRouter();


		return {
			currentProduct: computed(() => store.state.products.currentProduct),
			addToCart: productId => store.dispatch('cart/addToCart', { productId, qty: 1 }),
			previousPage: () => router.go(-1)
		}
	}
})
</script>

<style lang="scss" scoped>
	.page-product {
		padding-bottom: 72px;

		&__image {
			width: 100%;
			height: 260px;
			background-position: center;
			position: relative;

			.icon-back {
				width: 32px;
				height: 32px;
				display: inline-block;
				background-color: rgba($color-white, 0.3);
				color: $color-white;
				border-radius: 32px;
				line-height: 32px;
				text-align: center;
				font-size: 20px;
				position: absolute;
				top: 20px;
				left: 20px;

				&:hover {
					cursor: pointer;
				}
			}
		}

		&__main {
			padding: 16px 16px 25px;
			background-color: $color-white;
		}

		&__title {
			@include font-title();
			margin-bottom: 10px;
		}
		
		&__price {
			@include font-title();
			color: $color-green;
		}

		&__store {
			display: flex;
			align-items: center;
			padding: 20px 12px;
			background-color: $color-white;
			margin-top: 6px;

			&-avatar {
				display: inline-block;
				width: 32px;
				height: 32px;
				margin-right: 10px;
				background-size: cover;
			}

			&-button {
				margin-left: auto;
			}
		}

		&__description {
			padding: 60px 30px;
			color: rgba($color-black,0.7);
			line-height: 20px;
			letter-spacing: 0.17px;
			margin-top: 6px;
			background-color: $color-white;
		}

		&__details,
		&__details-additional {
			list-style: none;
			padding: 25px 30px;
			margin-top: 6px;
			margin-bottom: 0;
			background-color: $color-white;

			li {
				display: flex;
				line-height: 20px;

				&:last-child {
					.label {
						margin-bottom: 0;
					}
				}
			}

			.label {
				color: rgba($color-black,0.7);
				width: 140px;
				margin-right: 30px;
				margin-bottom: 15px;
			}
		}

		&__details-additional {
			ul {
				padding: 0;
				margin-bottom: 0;
			}

			h3 {
				@include font-title();
			}

			li {
				display: inline;
			}

			.label {
				float: left;
			}
		}

		&__add-to-cart-button {
			padding: 12px 32px;
			background-color: $color-white;
			position: fixed;
			bottom: 86px;
			width: 411px;
			box-shadow: 0px -19px 38px rgba(58, 76, 130, 0.2);

			&:before {
				content: '';
				height: 20px;
				position: relative;
				top: -20px;
				box-shadow: 0 10px 25px #88888821;;
			}
		}
	}
</style>