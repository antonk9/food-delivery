<template>
	<div class="search">
		<c-input 
			@doSearch="doSearch" 
			icon="icon-search" 
			placeholder="Search Product" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import cInput from '@/components/ui/cInput.vue';

export default defineComponent({
	components: {
		cInput
	},
	setup() {
		const store = useStore();

		function doSearch(input: string) {
			store.dispatch('products/filteredProducts', input)
		}

		return {
			doSearch
		}
	}
})
</script>

<style lang="scss" scoped>
	.search {
		margin-top: 23px;
	}
</style>