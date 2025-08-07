
import ProductDetailClient from './ProductDetailClient'
import { allProducts } from '@/lib/data'

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

// This is the Server Component that can safely access params
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // The `id` is now directly available from params
  const { id } = params;

  // Render the Client Component with a simple string prop
  return <ProductDetailClient id={id} />;
}
