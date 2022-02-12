import ProductItemType from '@/types/ProductItemType';

export const productModule = {
	state: {
		products: []
	},
	mutations: {
		setProductsData(state, payload) {
			state.products = payload
		}
	}, 
	getters: {}, 
	actions: {
		receiveNewProducts({ commit }) {
			return setTimeout(() =>{
				const products = <ProductItemType[]>[
          {
            id: '1',
						title: 'Soft drink',
						src: '/product/1',
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
          },
					{
            id: '2',
						title: 'Brocolli',
						src: '/product/2',
						imageSrc: require('@/assets/images/product-brocolli.png'),
						isNew: true,
						isPopular: false,
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: '25',
							priceOld: '25',
							priceNew: '21'
						}
          },
					{
            id: '3',
						title: 'Chocolate bakery',
						src: '/product/3',
						imageSrc: require('@/assets/images/product-bakery.png'),
						isNew: true,
						isPopular: false,
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: '25',
							priceOld: '35',
							priceNew: '25'
						}
          },
					{
            id: '4',
						title: 'Fruit punch',
						src: '/product/4',
						imageSrc: require('@/assets/images/product-fruit-punch.png'),
						isNew: true,
						isPopular: false,
						store: {
							avatarSrc: require('@/assets/images/tradly-avatar.png'),
							label: 'Tradly Store',
						},
						price: {
							priceNormal: '25'
						}
          }
        ]

        commit('setProductsData', products)
			}, 500)
		},
	},
	namespaced: true
}