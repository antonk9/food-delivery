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
	getters: {},
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
		recalculateTotalProductsQty({ commit }: { commit: Commit }, updatedQtyProducts: Array<CartProduct>): void {
			const totalQty = updatedQtyProducts.reduce((sum, curr) => sum += curr.qty, 0)
			commit('setTotalQty', totalQty)
		}
	},
	namespaced: true
}