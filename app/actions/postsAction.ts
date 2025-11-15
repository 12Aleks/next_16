"use server"

import { Post } from "@/utils/types";
import { refresh, revalidatePath } from "next/cache";

export const getPosts = async (): Promise<Post[]> => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER}/posts`, {
            cache: 'force-cache',
            next: { revalidate: 60 }
        });
        return await data.json();
    } catch (e) {
        throw new Error(`${e}`)
    }
}

export const getPost = async (params: string): Promise<Post> => {
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER}/posts/${params}`, {
            cache: 'force-cache',
            next: { revalidate: 60 }
        });
        return await data.json();
    } catch (e) {
        throw new Error(`${e}`)
    }
}

export const createPost = async (data: Post) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER}/posts`, {
            method: 'POST',
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            throw new Error("Failed to add post");
        }

        revalidatePath('/posts')

        const json = await res.json();
        return json;
    } catch (e) {
        throw new Error(`${e}`)
    }
}

export async function addPost(formData: FormData) {
    try {
        const title = formData.get("title") as string
        const body = formData.get("body") as string
        const userId = formData.get("userId");
        const id = formData.get("id");

        await fetch(`${process.env.NEXT_PUBLIC_JSON_PLACEHOLDER}/posts`, {
            method: "POST",
            headers: { "Content-type": "aplication/json" },
            body: JSON.stringify({
                title,
                body,
                userId,
                id
            })
        });

        refresh();
    } catch (e) {
        throw new Error('Data isnt send')
    }

}

