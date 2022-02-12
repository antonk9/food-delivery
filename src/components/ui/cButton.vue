<template>
	<button 
		@click="clickAction" 
		data-testid="button"
		:class="['button', {
							'button__transparent': styleType == 'transparent',
							'button__small': styleType == 'small'
						}]">
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
	.button {
		&__transparent {
			font-size: 14px;
			line-height: 17px;
			text-align: center;
			padding: 7px 19px;
			background-color: initial;
			border: 1px solid $color-white;
			border-radius: 14px;
			color: $color-white;
		}

		&__small {
			background-color: $color-green;
			border-radius: 24px;
			font-size: 12px;
			line-height: 14px;
			color: $color-white;
			padding: 4px 23px;
		}
}
</style>