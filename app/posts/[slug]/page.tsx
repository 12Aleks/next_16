import type { Metadata } from 'next';
import React from 'react';
import {getPost} from "@/actions/postsAction";
import {Post} from "@/utils/types";
import Loader from "@/components/Loader";


export const generateMetadata = async ({params}: {params: Promise<{slug: string}>}):Promise<Metadata> => {

    const {slug} =  await params;
    const postMeta: Post = await getPost(slug);

    return {
        title: postMeta.title,
        description: postMeta.body,
        openGraph: {
            images: ['/next.svg']
        }
    }

}

const SinglePost = async({params}: { params: Promise<{ slug: string }> }) => {
    'use cache'
    const {slug} =  await params;
    const post: Post = await getPost(slug);

    if (!post.title) return <Loader />


    return (
        <div className="m-5">
            <h1>Title: {post.title}</h1>
            <p>Description: {post.body}</p>
            <p>Id user: {post.userId}</p>
        </div>
    );
};

export default SinglePost;