import { createStore } from 'vuex'


const createVuexStore = (initialState) =>
	createStore({
		state: {
			...initialState
		},
		mutations: {
			setCarouselStoreData(state, payload) {
				state.bannerItems = payload
			},
			setProductCategories(state, payload) {
				state.productCategories = payload
			}
		}
	})

describe("Home", () => {
  it("check if state is working", () => {
    const store = createVuexStore({
			bannerItems: [],
			productCategories: []
		})

		const bannerItems = [{
			id: '1',
			buttonText: 'Start Shopping',
			label: 'Ready to deliver to your home',
			src: require('@/assets/images/store-banner.png'),
			storeLink: '/store/1'
		},]
		const productCategories = [{
			id: '1',
			title: 'Beverages',
			src: '',
			categoryLink: '/categories/beverages'
		},
		{
			id: '2',
			title: 'Bread & Bakery',
			src: require('@/assets/images/category-bread-bakery.png'),
			categoryLink: '/categories/beverages'
		}]


		store.commit('setCarouselStoreData', bannerItems)
		store.commit('setProductCategories', productCategories)

    expect(store.state.bannerItems.length).toBe(1)
    expect(store.state.productCategories.length).toBe(2)
  })
})