import { Document } from '@contentful/rich-text-types';

export type ProductItem = {
    fields: {
        title: string;
        slug: string;
        description: Document;
        image_product: {fields: {file: {url: string}}}
    }
}
export type ProductItems = ReadonlyArray<ProductItem>;

export type ProductQueryResult = {
    items: ProductItems;
}