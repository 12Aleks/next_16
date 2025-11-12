"use cache"
import React from 'react';
import {cacheLife} from "next/cache";
import Title from "@/components/Title";
import {getPost} from "@/actions/postsAction";

const CahcePage = async() => {
    cacheLife("test");
    const data = await getPost('1');
    return (
        <div>
            <Title title={'Cache page'} />
            <p>{data.title}</p>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    );
};

export default CahcePage;