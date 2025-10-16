import { notFound } from 'next/navigation';
import { allProducts } from '@/lib/data';
import ProductDetailClient from './ProductDetailClient';
import type { Product } from '@/types';

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;  // <-- Use Promise here
};

function getProduct(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { id } = await params;  // <-- Await params
  const product = getProduct(id);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} | Lazywear`,
    description: `Shop the ${product.name} - ${product.description.substring(0, 150)}...`,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;  // <-- Await params
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}
