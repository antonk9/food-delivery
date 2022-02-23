export interface ItemStore {
	id: string,
	avatarSrc: string;
	label: string;
}

export interface ItemPrice {
	priceNormal: number;
	priceOld: number;
	priceNew: number;
}

export interface ItemDetails {
	attr: string;
	val: string;
}

export interface ItemAdditionalDetails {
	deliveryDetails: string[];
}

export interface ItemImage {
	small: string;
	large: string;
}

export default interface ProductItemType {
	id: string;
	title: string;
	src: string;
	images: ItemImage;
	isNew: boolean;
	isPopular: boolean;
	categoryId: string;
	store: ItemStore;
	price: ItemPrice;
	description: string;
	details: ItemDetails[];
	additionalDetails: ItemAdditionalDetails;
}
