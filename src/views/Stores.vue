<template>
	<div>
		Stores
	</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

export default {
	setup () {
		const router = useRouter()
		const route = useRoute()

		console.log(router, route)

		return {}
	}
}
</script>

<style lang="scss" scoped>

</style>