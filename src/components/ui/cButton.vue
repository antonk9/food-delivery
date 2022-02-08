<template>
	<button @click="clickAction" :class="['button',{'button__transparent': styleType == 'transparent'}]">
			<slot></slot>
		</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		styleType: {
			type: String,
			default: ''
		}
  },
	setup (props, { emit }) {
		const clickAction = (event: any): void => { // eslint-disable-line
			emit("doClick", event.target.value)
		}

		return { clickAction }
	}
})
</script>

<style lang="scss" scoped>
	
</style>