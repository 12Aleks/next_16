import React from 'react';
import {headlessAction} from "@/actions/headlessAcrion";
import Link from "next/link";
import Loader from "@/components/Loader";

const HeadlessPage = async () => {
    const res = await headlessAction();
    console.log(res.data)

    if (!res.data || res.data.length === 0) return <Loader />

    return (
        <div>
            {
                res.data.map((item: any) => (
                    <Link href={`/headless/${item.id}`} key={item.id}><p>{item.attributes.title} {item.attributes.body.value}</p></Link>))
            }
        </div>
    );
};

export default HeadlessPage;