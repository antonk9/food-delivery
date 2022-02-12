export interface ItemStore {
	id: string,
	avatarSrc: string;
	label: string;
}

export interface ItemPrice {
	priceNormal: string;
	priceOld: string;
	priceNew: string;
}

export default interface ProductItemType {
	id: string;
	title: string;
	src: string;
	imageSrc: string;
	isNew: boolean;
	isPopular: boolean;
	store: ItemStore;
	price: ItemPrice;
}
