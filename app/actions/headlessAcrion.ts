"use server"


import {ApiError} from "@/utils/types";

export const headlessAction = async () => {
    try{
        const data = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_API}`, {
            cache: 'force-cache',
            next: { revalidate: 60 },
        });
        if(!data.ok){
            const errorBody = await data.text();
            throw new ApiError(`Error:  ${errorBody}`, data.status);
        }
        return await data.json();
    }catch (e){
        throw e instanceof ApiError ? e : new ApiError('Something went wrong', 500)
    }
}

export const getProduct = async(slug: string) => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_DRUPAL_API}?filter[id]=${slug}`);
        if(!res.ok){
            const errorBody = await res.text();
            throw new ApiError(`Error:  ${errorBody}`, res.status);
        }
        return await res.json();

    }catch (e){
        throw e instanceof  ApiError ? e : new ApiError('Something went wrong', 500)
    }
}