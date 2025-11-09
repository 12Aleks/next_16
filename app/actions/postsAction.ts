"use server"

import {Post} from "@/utils/types";
import { revalidatePath } from "next/cache";

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

export const createPost = async(data: Post) => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER}/posts`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            throw new Error("Failed to add post");
        }

        revalidatePath('/posts')

        const json = await res.json();
        console.log(json);
        return json;
    }catch(e){
        throw new Error(`${e}`)
    }
}