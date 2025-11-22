import React from 'react';

const ProductUI = (data: any ) => {
    console.log(data.res[0].attributes.title)
    return (
        <div>
           <h1 className="text-2xl text-black">{data.res[0].attributes.title}</h1>
        </div>
    );
};

export default ProductUI;