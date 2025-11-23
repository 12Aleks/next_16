import {client} from "@/lib/contentfulInitial";
import {ProductItem, ProductQueryResult} from "@/types";

//many posts
export const getAllProducts = async ():Promise<ProductQueryResult> => {
    const entries = await client.getEntries({content_type: 'product'});
    return  entries as unknown as ProductQueryResult;
}

//single post
export const getProduct = async(slug: string):Promise<ProductItem> => {
    const queryOptions = {
        content_type: 'product',
        "fields.slug[match]": slug
    }

    const queryResult = await client.getEntries(queryOptions);
    return queryResult.items[0] as unknown as ProductItem;
}