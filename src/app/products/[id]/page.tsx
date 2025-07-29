
import ProductDetailClient from './ProductDetailClient'

// This is the Server Component that can safely access params
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // 1. Await the promise to unwrap params
  const { id } = await params;

  // 2. Render the Client Component with a simple string prop
  return <ProductDetailClient id={id} />;
}
