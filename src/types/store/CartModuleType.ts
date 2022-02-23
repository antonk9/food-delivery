export interface CartProduct {
	productId: string,
	qty: number;
}


export interface CartModuleType {
	cartProducts: Array<CartProduct>,
	cartProductsQty: Number
}