"use client"
import {useActionState} from 'react';
import Form from 'next/form'
import {createPost} from "@/actions/postsAction";



const PostForm = () => {
    const [state, formAction, isPending] = useActionState(sendData, { message: '' });

    async function sendData(prevState: { message: string }, formData: FormData){
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;

        if (!title || !description) {
            return { message: 'Title and description are required.' };
        }

        const newPost = {
            title,
            body: description,
            userId: 1,
            id: Math.floor(Math.random() * 1000000),
        }

        await createPost(newPost);


        return { message: `Post "${title}" added successfully, if you can be use real database ;)!` };
    }

    return (
        <Form action={formAction} className="[&_input]:border [&_input]:rounded [&_input]:p-2 [&_input]:w-full
         [&_textarea]:border [&_textarea]:rounded [&_textarea]:p-2 [&_textarea]:w-full flex flex-col items-center
          gap-y-3 max-w-[600px] p-2 mt-3 w-full
          ">
            <input type="text" name="title" placeholder="Post title" />
            <textarea  name="description" placeholder="Post description" />
            <button type="submit" className="cursor-pointer border flex h-12 w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                {isPending ? 'Submitting...' : 'Submit'}</button>

            {state.message && (
                <p className="text-center text-sm mt-2 text-red-600">{state.message}</p>
            )}
        </Form>
    );
};

export default PostForm;