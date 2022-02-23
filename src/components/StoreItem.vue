<template>
	<div class="store-item">
		<router-link :to="{name: 'stores', params: {storeName: store.href}}">
			<div class="store-item__image" :style="`background-image:url(${store.backgroundSrc})`"></div>
			<div class="store-item__avatar" :style="`background-image:url(${store.avatarSrc})`"></div>
			<h3 class="store-item__title">{{ store.label }}</h3>
			<c-button styleType="small" class="store-item__button">
				Follow
			</c-button>
		</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StoreType from '@/types/StoreType';
import cButton from '@/components/ui/cButton.vue';

export default defineComponent({
	components: {
		cButton
	},
	props: {
		store: {
			type: Object as PropType<StoreType>,
			required: true
		}
	}
})
</script>

<style lang="scss" scoped>
	.store-item {
		border-radius: 10px;
		background-color: $color-white;
		overflow: hidden;
		border: 1px solid rgba($color-black, 0.1);
		width: 100%;
		text-align: center;

		&__image {
			display: block;
			background-repeat: no-repeat;
			height: 85px;
			width: 100%;
		}

		&__title {
			@include default-black;
			width: 100%;
			margin-top: 7px;
		}

		&__button {
			margin: 20px 0;
		}

		&__avatar {
			width: 65px;
			height: 65px;
			margin: -32px auto 0 auto;
		}
	}
</style>