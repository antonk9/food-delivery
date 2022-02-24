import { CartModuleType, CartProduct } from '@/types/store/CartModuleType';
import { Commit, Dispatch } from 'vuex';

export const cartModule = {
	state: {
		cartProducts: [],
		cartProductsQty: 0
	},
	mutations: {
		setCartProducts(state: CartModuleType, payload: Array<CartProduct>): void {
			state.cartProducts = payload
		},
		setTotalQty(state: CartModuleType, payload: number): void {
			state.cartProductsQty = payload
		}
	},
	getters: {
		getCartProducts(state, getters, rootState) {
			return rootState.cart.cartProducts.map(item => {
				const detailedProduct = rootState.products.products.find(el => el.id == item.productId ? el : false)

				return {...item, ...detailedProduct}
			})
		}
	},
	actions:{
		addToCart({ dispatch, commit, state }: { dispatch: Dispatch, commit: Commit, state: CartModuleType }, params: CartProduct ): void {
			const cartProductIndex = state.cartProducts.findIndex(p => p.productId === params.productId)
			if (cartProductIndex >= 0) {
				const updatedQtyProducts = [...state.cartProducts]
				updatedQtyProducts[cartProductIndex].qty++
				dispatch('recalculateTotalProductsQty', updatedQtyProducts)
				commit('setCartProducts', updatedQtyProducts)
			} else {
				dispatch('recalculateTotalProductsQty', [...state.cartProducts, params])
				commit('setCartProducts', [...state.cartProducts, params])
			}
		},
		removeProduct({ dispatch, commit, state }, productId) {
			const index = state.cartProducts.findIndex(item => item.productId == productId)
			const updatedCartProducts = [...state.cartProducts]
			updatedCartProducts.splice(index, 1)
			commit('setCartProducts', updatedCartProducts)
			dispatch('recalculateTotalProductsQty', updatedCartProducts)
		},
		recalculateTotalProductsQty({ commit }: { commit: Commit }, updatedQtyProducts: Array<CartProduct>): void {
			const totalQty = updatedQtyProducts.reduce((sum, curr) => sum += curr.qty, 0)
			commit('setTotalQty', totalQty)
		}
	},
	namespaced: true
}