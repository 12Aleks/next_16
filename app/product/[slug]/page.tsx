"use cache"
import {getProduct} from "@/lib/productsApi";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import Image from "next/image";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) return <p>Product not found</p>;
    //
   const {title, description, image_product} = product.fields;

    const imageUrl = image_product?.fields?.file?.url
        ? `https:${image_product.fields.file.url}`
        : null;

    return (
        <main className="min-h-screen p-24 flex justify-center">
            <div className="max-w-2xl">
                <h1 className="font-extrabold text-3xl mb-2">{title}</h1>
                {/*<div className="[&>p]:mb-8 [&>h2]:font-extrabold">{documentToReactComponents(description)}</div>*/}

                <img
                    src={`https:${image_product.fields.file.url}`}
                    alt={image_product.fields.title || ""}
                    className="max-w-full h-auto rounded"
                />

            </div>
        </main>
    );
}
