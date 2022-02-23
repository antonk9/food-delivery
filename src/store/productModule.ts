import ProductItemType from '@/types/ProductItemType';
import { Commit } from 'vuex';
import ProductModuleType from '@/types/store/ProductModuleType';

export const productModule = {
	state: {
		products: [],
		currentProduct: '',
		filteredProducts: []
	},
	mutations: {
		setProductsData(state: ProductModuleType, payload: Array<ProductItemType>):void {
			state.products = payload
		},
		setCurrentProduct(state: ProductModuleType, payload: ProductItemType):void {
			state.currentProduct = payload
		},
		setFilteredProducts(state: ProductModuleType, payload: Array<ProductItemType>):void {
			state.filteredProducts = payload
		}
	}, 
	getters: {
		getNewProducts(state: ProductModuleType): Array<ProductItemType> {
			return state.products.filter(product => product.isNew)
		},
		getPopularProducts(state: ProductModuleType): Array<ProductItemType> {
			return state.products.filter(product => product.isPopular)
		}
	}, 
	actions: {
		receiveProducts({ commit }: { commit: Commit }):void {
			setTimeout(() =>{
				const products = <ProductItemType[]>[
          {
            id: '1',
						title: 'Soft drink',
						src: '/product/1',
						images: {
							small: require('@/assets/images/product-soft-drink.png'),
							large: require('@/assets/images/product-soft-drink-large.png')
						},
						isNew: true,
						isPopular: false,
						categoryId: '1',
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: 50,
							priceOld: 50,
							priceNew: 25
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
          },
					{
            id: '2',
						title: 'Brocolli',
						src: '/product/2',
						images: {
							small: require('@/assets/images/product-brocolli.png'),
							large: require('@/assets/images/product-brocolli-large.png')
						},
						isNew: true,
						isPopular: true,
						categoryId: '3',
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: 25,
							priceOld: 25,
							priceNew: 21
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
          },
					{
            id: '3',
						title: 'Chocolate bakery',
						src: '/product/3',
						images: {
							small: require('@/assets/images/product-bakery.png'),
							large: require('@/assets/images/product-bakery-large.png')
						},
						isNew: true,
						isPopular: true,
						categoryId: '2',
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: 35,
							priceOld: 35,
							priceNew: 25
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
          },
					{
            id: '4',
						title: 'Fruit punch',
						src: '/product/4',
						images: {
							small: require('@/assets/images/product-fruit-punch.png'),
							large: require('@/assets/images/product-fruit-punch-large.png')
						},
						isNew: false,
						isPopular: true,
						categoryId: '1',
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: 25
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
          },
					{
            id: '5',
						title: 'Lemonade',
						src: '/product/4',
						images: {
							small: require('@/assets/images/product-lemonade.png'),
							large: require('@/assets/images/product-lemonade-large.png')
						},
						isNew: false,
						isPopular: true,
						categoryId: '1',
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: 25
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
        ]

        commit('setProductsData', products)
			}, 500)
		},
		defineCurrentProduct({ commit, state }: { commit: Commit, state: ProductModuleType }, productId: string):void {
			const currentProduct = state.products.find(p => p.id == productId)
			commit('setCurrentProduct', currentProduct)
		},
		filteredProducts({ commit, state }: { commit: Commit, state: ProductModuleType }, searchQuery: string):void {
			const filteredProducts = state.products.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
			commit('setFilteredProducts', filteredProducts)
		}
	},
	namespaced: true
}