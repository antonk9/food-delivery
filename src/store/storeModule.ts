import StoreType from '@/types/StoreType';
import StoreModuleType from '@/types/store/StoreModuleType';
import { Commit } from 'vuex';

export const storeModule = {
	state: {
		stores: []
	},
	mutations: {
		setStoresData(state: StoreModuleType, payload: Array<StoreType>):void {
			state.stores = payload
		}
	},
	getters: {},
	actions:{
		receiveStores({ commit }: { commit: Commit }): void {
			setTimeout(() => {
				const stores = <StoreType[]>[
					{
						id: '1',
						backgroundSrc: require('@/assets/images/store-tradly.png'),
						avatarSrc: require('@/assets/images/tradly-avatar.png'),
						label: 'Tradly Store',
						products: ['1', '2', '3'],
						href: '/store/tradly'
					},
					{
						id: '2',
						backgroundSrc: require('@/assets/images/store-groceries.png'),
						avatarSrc: require('@/assets/images/groceries-avatar.png'),
						label: 'Groceries store',
						products: ['2', '3','4'],
						href: '/store/groceries'
					}
				]

				commit('setStoresData', stores)
			}, 600)
		}
	},
	namespaced: true
}