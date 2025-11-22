import React from 'react';
import {getProduct} from "@/actions/headlessAcrion";
import Product from "@/featchers/headless/components/Product";
import Loader from "@/components/Loader";


const ProductWrapper = async ({params}: { params: { slug: string } }) => {
    const {slug} =  await params;
    const res = await getProduct(slug)
    if (!res.data || res.data.length === 0) return <Loader />
    return (
        <div>
          <Product res={res.data} />
        </div>
    );
};

export default ProductWrapper;