"use cache"
import {getProduct} from "@/lib/productsApi";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from "next/image";
import {Metadata, ResolvingMetadata} from "next";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};
type Props = {
    params: Promise<{ slug: string  }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export async function generateMetadata( { params, searchParams }: Props, parent: ResolvingMetadata):Promise<Metadata>{
    const { slug } = await params;
    const product = await getProduct(slug);
    const {title, content, image_product} = product.fields;
    return {
        title: title,
        openGraph: {
            images: [`https:${image_product?.fields?.file.url}`],
        },
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) return <p>Product not found</p>;

   const {title, content, image_product} = product.fields;

    return (
        <main className="min-h-screen p-24 flex justify-center">
            <div className="max-w-2xl">
                <h1 className="font-extrabold text-3xl mb-2">{title}</h1>
                <div className="[&>p]:mb-8 [&>h2]:font-extrabold">{documentToReactComponents(content)}</div>

                <Image
                    src={`https:${image_product?.fields?.file.url}`}
                    alt={title}
                    className="max-w-full h-auto rounded"
                    width={640}
                    height={640}
                />

            </div>
        </main>
    );
}
