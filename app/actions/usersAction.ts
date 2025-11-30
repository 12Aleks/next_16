"use server"

import {IUser} from "@/utils/types";

export const getUsers = async(): Promise<IUser[]> => {
    try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        next: {revalidate: 60},
        cache: "force-cache"
    });
    if(!res.ok) {
        throw new Error(`${res.statusText} ${res.statusText}`);
    }

    return await res.json();
    }catch(err){
        throw new Error(`${err}`)
    }
}

export const getUser = async(slug: string): Promise<IUser> => {
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`, {
            next: {revalidate: 60},
            cache: "force-cache"
        });

        if(!res.ok) {
            throw new Error(`${res.statusText} ${res.statusText}`);
        }

        return await res.json();
    }catch(err){
        throw new Error(`${err}`)
    }
}