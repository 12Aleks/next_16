"use client"


import {useEffect, useState, useEffectEvent} from "react";
import {getPosts} from "@/actions/postsAction";
import {Post} from "@/utils/types";

const ScrollBlock = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [count, setCount] = useState<number>(0);



   const onScroll = useEffectEvent(() => {
       console.log(count);
       setCount((prev) => prev + 1);
   })

    useEffect(() => {
        async function getData(){
            const data: Post[] = await getPosts()
            if(data.length) setPosts(data)
        }
        getData()
    }, []);


    useEffect(() => {
        const el = document.getElementById("test");
        function handleScroll() {
            onScroll();
        }
        el?.addEventListener("scroll", handleScroll);
        return () => el?.removeEventListener("scroll", handleScroll);
    }, [onScroll]);


    return (
        <>
            <p>{count}</p>
            <div className="max-w-1/6 max-h-[300px] overflow-auto" id="test">
                {posts.map(p => (
                    <p key={p.id}>{p.title}</p>
                ))}
            </div>

            <button onClick={() => setCount(0)}>Reset</button>
        </>

    );
};

export default ScrollBlock;