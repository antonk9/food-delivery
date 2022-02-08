<template>
	<div :class="['field-input', {'field-input__with-icon': icon}]">
		<i :class="icon" v-if="icon" ></i>
		<input type="text" :placeholder="placeholder" @input="searchAction" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
    icon: {
			type: String,
			required: false
		},
		placeholder: {
			type: String,
			default: ''
		}
  },
	setup (props, { emit }) {
		const searchAction = (event: any): void => { // eslint-disable-line
			emit("doSearch", event.target.value)
		}

		return { searchAction }
	}
})
</script>

<style lang="scss" scoped>
	.field-input {
		position: relative;

		input {
			background-color: $color-white;
			padding: 15px 18px 14px;
			border: none;
		}

		&__with-icon {
			input {
				padding-left: 64px;
			}
		}

		i {
			position: absolute;
			top: 12px;
			left: 18px;
			font-size: 22px;
			color: $color-green;
		}
	}
	
</style>