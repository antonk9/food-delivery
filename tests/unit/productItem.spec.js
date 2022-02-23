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
				images: {
					small: require('@/assets/images/product-soft-drink.png'),
					large: require('@/assets/images/product-soft-drink-large.png')
				},
				isNew: true,
				isPopular: false,
				store: {
					avatarSrc: require('@/assets/images/tradly-avatar.png'),
					label: 'Tradly Store',
				},
				price: {
					priceNormal: 8
				},
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis cras placerat diam ipsum ut. Nisi vel adipiscing massa bibendum diam. Suspendisse mattis dui maecenas duis mattis. Mattis aliquam at arcu, semper nunc, venenatis et pellentesque eu. Id tristique maecenas tristique habitasse eu elementum sed. Aliquam eget lacus, arcu, adipiscing eget feugiat in dolor sagittis.Non commodo, a justo massa porttitor sed placerat in. Orci tristique etiam tempus sed. Mi varius morbi egestas dictum tempor nisl. In ',
				details: [{
					attr: 'Condition',
					val: 'Organic'
				},{
					attr: 'Price Type',
					val: 'Fixed'
				},{
					attr: 'Category',
					val: 'Beverages'
				},{
					attr: 'Location',
					val: 'Kualalumpur, Malaysia'
				}],
				additionalDetails: {
					deliveryDetails: ['Home Delivery Available', 'Cash On Delivery']
				}
			}
		}
	})

	it("are product props ok", () => {
		expect(wrapper.props().product.title).toBe('Soft drink')
	})
})