import { Suspense } from "react";
import ProductsPageContent from "@/featchers/product/components/ProductsPageContent";


export default function ProductsPage() {
    return (
        <Suspense fallback={<div>Loading products...</div>}>
            <ProductsPageContent />
        </Suspense>
    );
}
