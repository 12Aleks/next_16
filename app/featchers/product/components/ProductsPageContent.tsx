import { getAllProducts } from "@/lib/productsApi";
import Link from "next/link";
import Image from "next/image";

export default async function ProductsPageContent() {
    const { items } = await getAllProducts();

    if (!items.length) return <p>No products available.</p>;

    return (
        <main className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Contentful CMS products:</h1>


            <div className="flex flex-wrap">


            {items.map((singlePost) => {
                const { slug, title, image_product, date } = singlePost.fields;
                return (
                    <div key={slug}
                         className="border-2 border-gray-300 p-2 m-2 overflow-hidden rounded">
                        <Link href={`/product/${slug}`} className="group flex flex-col hover">
                            <h2 className="font-extrabold text-xl group-hover:text-blue-500 transition-colors">{title}</h2>
                            <div className="overflow-hidden rounded mt-2 w-[680px] h-[400px]">
                            <Image
                                src={`https:${image_product.fields.file.url}`}
                                alt={image_product.fields.title || title}
                                className="w-full h-full object-cover transform transition-transform duration-800 ease-in-out group-hover:scale-105"
                                width={640}
                                height={450}
                            />
                            </div>
                            <span className="text-sm text-gray-500 mt-2">
                                Posted on{" "}
                                {new Date(date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </Link>
                    </div>
                );
            })}
            </div>
        </main>
    );
}
