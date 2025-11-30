import {getUser} from "@/actions/usersAction";
import {IUser} from "@/utils/types";

const Page = async ({params}: {params: Promise<{slug: string}>}) => {
    const {slug} =  await params;
    const user: IUser = await getUser(slug);

    return (
        <div className="flex group flex-wrap flex-col gap-3 m-3 border border-gray-300 p-3 rounded-lg  text-gray-500">
            <h1 className="text-2xl group-hover:text-red-800 duration-500">{user.name}</h1>
            <p className="text-xl">User data: </p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
        </div>
    );
};

export default Page;