<template>
	<h1>{{ title }}</h1>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'SectionTitle',
		props: {
			title: {
				type: String,
				required: true
			},
		}
	})
</script>

<style lang="scss" scoped>
	h1 {
		margin-bottom: 17px;
	}
</style>