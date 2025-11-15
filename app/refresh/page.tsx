import { addPost, getPosts } from "@/actions/postsAction";
import Loader from "@/components/Loader";
import { Post } from "@/utils/types";
import Form from 'next/form';


const RefreshPage = async () => {
    const posts: Post[] = await getPosts();

    if (!posts.length) return <Loader />

    return (
        <div className="m-5">
            <p className="text-center">Refetch nie wpływa na cache komponentu !!!</p>
            <Form action={addPost} className="m-auto block p-3 border rounded-md border-emerald-950 max-w-[800px] [&_input]:border [&_input]:rounded [&_input]:p-2 [&_input]:w-full space-y-3">
                <input type="text" name="title" />
                <input type="text" name="body" />
                <input type="number" name="userId" />
                <input type="number" name="id" />
                <button type="submit" className="m-auto block border rounded-md px-3 py-2 uppercase">Create new post</button>
            </Form>

            <ul className="mx-auto my-10 block max-w-[800px] max-h-[500px] overflow-auto border rounded-md px-3">
                {posts.map((p) => (
                    <li key={p.id}>
                        {p.id}. {p.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default RefreshPage;