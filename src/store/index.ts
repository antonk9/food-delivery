import { createStore } from 'vuex'
import CarouselStoresBanner from '@/types/CarouselStoresBanner';
import ProductCategoriesType from '@/types/ProductCategoriesType';
import { productModule } from '@/store/productModule';
import { storeModule } from '@/store/storeModule';
import { cartModule } from '@/store/cartModule';


export default createStore({
  state: {
    banneritems: [],
    productCategories: [],
    listItems: [{
      'id': '1',
      'icon': 'icon-home',
      'label': 'Home',
      'url': '/'
    }, {
      'id': '2',
      'icon': 'icon-search',
      'label': 'Browse',
      'url': '/#'
    }, {
      'id': '3',
      'icon': 'icon-store',
      'label': 'Store',
      'url': '/stores'
    }, {
      'id': '4',
      'icon': 'icon-order',
      'label': 'Order history',
      'url': '/orders'
    }, {
      'id': '5',
      'icon': 'icon-profile',
      'label': 'Profile',
      'url': '/user-profile'
    }]
  },
  mutations: {
    setCarouselStoreData(state, payload) {
      state.banneritems = payload
    },
    setProductCategories(state, payload) {
      state.productCategories = payload
    }
  },
  actions: {
    receiveStoreBannerItems({ commit }) {
      setTimeout(() =>{
        const bannerItems = <CarouselStoresBanner[]>[
          {
            id: '1',
            buttonText: 'Start Shopping',
            label: 'Ready to deliver to your home',
            src: require('@/assets/images/store-banner.png'),
            storeLink: '/store/1'
          },
          {
            id: '2',
            buttonText: 'Start Shopping',
            label: 'Ready to deliver to your home',
            src: require('@/assets/images/store-banner.png'),
            storeLink: '/store/2'
          },
          {
            id: '3',
            buttonText: 'Start Shopping',
            label: 'Ready to deliver to your home',
            src: require('@/assets/images/store-banner.png'),
            storeLink: '/store/3'
          }
        ]

        commit('setCarouselStoreData', bannerItems)
      }, 1000)
    },
    receiveProductCategories({ commit }) {
      setTimeout(() =>{
        const productCategories = <ProductCategoriesType[]>[
          {
            id: '1',
            title: 'Beverages',
            backgroundSrc: require('@/assets/images/category-beverages.png'),
            categoryLink: '/categories/beverages'
          },
          {
            id: '2',
            title: 'Bread & Bakery',
            backgroundSrc: require('@/assets/images/category-bread-bakery.png'),
            categoryLink: '/categories/beverages'
          },
          {
            id: '3',
            title: 'Vegetables',
            backgroundSrc: require('@/assets/images/category-vegetables.png'),
            categoryLink: '/categories/beverages'
          },
          {
            id: '4',
            title: 'Fruit',
            backgroundSrc: require('@/assets/images/category-fruit.png'),
            categoryLink: '/categories/beverages'
          },
          {
            id: '5',
            title: 'Egg',
            backgroundSrc: require('@/assets/images/category-egg.png'),
            categoryLink: '/categories/egg'
          },
          {
            id: '6',
            title: 'Frozen veg',
            backgroundSrc: require('@/assets/images/category-frozen-veg.png'),
            categoryLink: '/categories/frozen-veg'
          },
          {
            id: '7',
            title: 'Homecare',
            backgroundSrc: require('@/assets/images/category-homecare.png'),
            categoryLink: '/categories/homecare'
          },
          {
            id: '8',
            title: 'Pet care',
            backgroundSrc: require('@/assets/images/category-pet-care.png'),
            categoryLink: '/categories/pet-care'
          }
        ]

        commit('setProductCategories', productCategories)
      }, 2000)
    }
  },
  modules: {
    products: productModule,
    stores: storeModule,
    cart: cartModule
  }
})
