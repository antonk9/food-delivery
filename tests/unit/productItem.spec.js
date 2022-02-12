import ProductItem from '@/components/ProductItem'
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

describe('Product item item', () => {
	const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	}]
	const router = createRouter({
		history: createWebHistory(process.env.BASE_URL),
		routes,
	})
	const wrapper = mount(ProductItem, {
		global: {
      plugins: [router]
    },
		propsData: {
			product: {
				id: '1',
				title: 'Soft drink',
				src: '/',
				imageSrc: require('@/assets/images/soft-drink.png'),
				isNew: true,
				isPopular: false,
				store: {
					avatarSrc: require('@/assets/images/tradly-avatar.png'),
					label: 'Tradly Store',
				},
				price: {
					priceNormal: '8'
				}
			}
		}
	})

	it("are product props ok", () => {
		expect(wrapper.props().product.title).toBe('Soft drink')
	})
})