import { Document } from '@contentful/rich-text-types';

export type ProductItem = {
    fields: {
        title: string;
        slug: string;
        date: Date;
        content: Document;
        image_product: {fields: {file: {url: string}, title: string}};
    }
}
export type ProductItems = ReadonlyArray<ProductItem>;

export type ProductQueryResult = {
    items: ProductItems;
}