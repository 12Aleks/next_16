import {Post} from "@/utils/types";
import {getPosts} from "@/actions/postsAction";
import Loader from "@/components/Loader";
import VirtualPostList from "@/featchers/posts/components/VirtualPostList";
import {Metadata} from "next";
import PostForm from "@/featchers/posts/components/PostForm";


export const metadata: Metadata =  {
        title: 'Post list',
        description: 'This is a list of posts',
        keywords: ['posts', 'blog', 'articles', 'Next.js'],
}


const PostList = async () => {

    const posts: Post[] = await getPosts();

    if (!posts || posts.length === 0) return <Loader />

    return (
        <div className="p-5 h-screen w-full flex flex-col items-center gap-x-4  ">
            <h1 className="text-2xl font-bold text-center text-amber-500 mb-4">Post list with react-virtual:</h1>
            <VirtualPostList posts={posts}/>
            <h2 className="text-xl font-bold text-center text-amber-500 mt-4">You can add new post:</h2>
            <PostForm/>
        </div>
    );
};

export default PostList;