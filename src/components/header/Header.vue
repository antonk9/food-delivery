<template>
	<header>
		<div class="header-top">
			<SectionTitle title="Groceries" />
			<i class="icon-heart-filled"></i>
			<i class="icon-cart"></i>
		</div>
		<div class="header-bottom">
			<Search />
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionTitle from '@/components/header/SectionTitle.vue'
import Search from '@/components/header/Search.vue'

export default defineComponent({
	components: {
		SectionTitle,
		Search
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
			margin-bottom: 17px;

		.icon-heart-filled {
			margin-left: auto;
			margin-right: 20px;
		}

		i {
			font-size: 18px;
		}
	}
</style>