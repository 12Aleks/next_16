import {Post} from "@/utils/types";
import {getPosts} from "@/actions/postsAction";
import Loader from "@/components/Loader";
import Link from "next/link";


const PostList = async () => {

    const posts: Post[] = await getPosts();

    if (posts.length === 0) return <Loader />

    return (
        <div className="m-5 max-w-[500px] flex flex-col gap-x-4">
            <h1 className="text-2xl font-bold text-center text-amber-500">  Post list</h1>
            {
                posts?.map(post =>
                <Link key={post.id} href={`/posts/${post.id}`}>{post.id}. {post.title}</Link>)
            }
        </div>
    );
};

export default PostList;