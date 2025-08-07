
import ProductDetailClient from './ProductDetailClient'
import { allProducts } from '@/lib/data'
import { notFound } from 'next/navigation';
import { type Product } from '@/types';

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

// This is the Server Component that can safely access params
export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // In Next.js 15, params is a promise. We need to await it.
  const { id } = await params;

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Pass the full product object to the Client Component
  return <ProductDetailClient product={product} />;
}
