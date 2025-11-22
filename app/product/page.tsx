import {getAllProducts} from "@/lib/productsApi";
import Link from "next/link";


const ProductsPage = async () => {
    const {items} = await getAllProducts();

    console.log(items)

    return (
        <main className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Our products:</h1>
            {items.map((singlePost) => {
                const { slug, title, image_product } = singlePost.fields;

                return (
                    <div key={slug} className="border-2 border-gray-300 p-2 m-2">
                        <Link href={`/product/${slug}`} className="group group-hover:text-blue-500">
                            <h2 className="font-extrabold text-xl group-hover:text-blue-500 transition-colors">{title}</h2>
                            <img
                                src={`https:${image_product.fields.file.url}`}
                                alt={image_product.fields.title || ""}
                                className="max-w-full h-auto rounded"
                            />
                        </Link>
                    </div>
                );
            })}
        </main>
    );
};

export default ProductsPage;
