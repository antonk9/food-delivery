<template>
	<header>
			<SectionTitle title="Groceries" />
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SectionTitle from '@/components/header/SectionTitle.vue'

export default defineComponent({
	components: {
		SectionTitle
	}
})
</script>

<style lang="scss" scoped>
	header {
		padding: 16px;
	}
</style>