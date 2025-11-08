"use service"

import {Post} from "@/utils/types";

export const getPosts = async(): Promise<Post[]> => {
    try{
        const data = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER}/posts`, {
            cache: 'force-cache',
            next: {revalidate: 60}
        });
        return await data.json();
    }catch(e){
        throw new Error(`${e}`)
    }
}



export const getPost = async(params: string): Promise<Post> => {
    try{
        const data = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER}/posts/${params}`, {
            cache: 'force-cache',
            next: {revalidate: 60}
        });
        return await data.json();
    }catch(e){
        throw new Error(`${e}`)
    }
}