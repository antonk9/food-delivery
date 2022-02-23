<template>
	<footer>
		<nav class="footer-nav">
			<li v-for="item in listItems" :key="item.id">
				<router-link :to="item.url">
					<i :class="item.icon"></i>
					<span>{{ item.label }}</span>
				</router-link>
			</li>
		</nav>
	</footer>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { useStore } from 'vuex';
import FooterNavigation from '@/types/FooterNavigation'

export default defineComponent({
	components: {},
	setup() {
		const store = useStore();

		return {
			listItems: computed(() => store.state.listItems as PropType<FooterNavigation>)
		}
	}
})
</script>

<style lang="scss" scoped>
	footer {
		background-color: $color-white;
		position: fixed;
		bottom: 0;
		width: 480px;
		z-index: 10;
		border-top: 1px solid rgba($color-black, 20%);

		.footer-nav {
			list-style: none;
			display: flex;
			padding: 16px 20px;
			justify-content: space-between;

			li {
				text-align: center;

				a {
					text-decoration: none;
					color: $color-black;
				}

				&.active {
					color: $color-green;
				}

				i {
					display: block;
					font-size: 24px;
					margin-bottom: 5px;
					height: 30px;
					line-height: 30px;
				}
			}
		}
	}
</style>