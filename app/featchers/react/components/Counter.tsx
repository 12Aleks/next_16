"use client"
import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div className="flex flex-col items-center justify-center w-full [&_button]:border [&_button]:px-3 [&_button]:mt-3 [&_button]:py-1 [&_button]:border-gray-800 [&_button]:rounded-md [&_button]:cursor-pointer">
            <p className="text-2xl">{count}</p>
            <button  onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(Math.max(count - 1, 0))}>-</button>
        </div>
    );
};

export default Counter;