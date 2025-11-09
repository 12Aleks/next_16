"use client"
import {useRef} from 'react';
import {Post} from "@/utils/types";
import {useVirtualizer} from "@tanstack/react-virtual";
import Link from "next/link";

interface IPost {
    posts: Post[];
}

const VirtualPostList = ({posts}: IPost) => {
    const listRef = useRef<HTMLDivElement>(null);
    const listVirtualizer = useVirtualizer({
       count: posts.length,
       getScrollElement: () => listRef.current ,
       estimateSize: () => 48
    });
    return (
        <div ref={listRef} className="max-h-[600px] w-full max-w-[600px] border border-gray-200 rounded-lg overflow-auto p-5 bg-blue-100">
            <div className="relative"
                 style={{
                         height: `${listVirtualizer.getTotalSize()}px`}}

            >
            {
                listVirtualizer.getVirtualItems().map((item) => {
                    const post: Post = posts[item.index];
                    return (
                        <div
                            key={post.id}
                            ref={listVirtualizer.measureElement}
                            className="absolute top-0 left-0 right-0 bottom-0"
                            style={{transform:  `translateY(${item.start}px)`}}

                        >

                            <Link
                                href={`/posts/${post.id}`}
                                className="block p-2 border-b border-gray-200 hover:bg-amber-50 transition bg-neutral-100"
                            >
                               <span className="text-amber-600 font-medium mr-2">
                                      {post.id}.
                               </span>
                                {post.title}
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>

    );
};

export default VirtualPostList;