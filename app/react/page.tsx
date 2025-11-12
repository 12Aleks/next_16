"use client"
import  {Activity, useState} from 'react';
import Title from "@/components/Title";
import Counter from "@/featchers/react/components/Counter";
import ScrollBlock from "@/featchers/react/components/ScrollBlock";

const ReactPage = () => {
    const [show, setShow] =useState<boolean>(true);
    return (
        <div className="flex flex-col gap-y-5 items-center justify-center w-full p-5">
            <Title title="React Page" />
            <Activity mode={show ? "visible" : "hidden"}>
                <h2 className="text-center text-2xl">If I show the counter with Activity, the state is kept</h2>
                <Counter/>
            </Activity>


            <hr className="w-full px-3 py-2 border-gray-900" />

            <div className={`flex flex-col gap-y-5 items-center justify-center w-full p-5 ${show ? "block" : "hidden"}`}>
                <h2 className="text-center text-2xl">If I show or hide the counter with display: none, the state is cleared and the element is deleted from the DOM. </h2>
                <Counter/>
            </div>
            <button onClick={() => setShow(!show)}  className="border border-gray-900 px-3 py-2 rounded-md cursor-pointer">{ show ? "Hide" : 'Show'}</button>

            <hr className="w-full px-3 py-2 border-gray-900" />

            <h2>Scroll with useEffectEvent</h2>
            <ScrollBlock />
        </div>
    );
};

export default ReactPage;