import ProductItemType from '@/types/ProductItemType';


export default interface ProductModuleType {
	products: Array<ProductItemType>,
	currentProduct: ProductItemType,
	filteredProducts: Array<ProductItemType>
}