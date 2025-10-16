
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allProducts } from '@/lib/data';
import ProductDetailClient from './ProductDetailClient';

type ProductPageProps = {
  params: { id: string };
};

// Fetch product data from local data
async function getProduct(id: string) {
  const product = allProducts.find((p) => p.id === id);
  return product;
}

// Main component
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = await getProduct(id);
  
  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}

// Required for static builds
export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }));
}

// Optional: Generate metadata
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = params;
  const product = await getProduct(id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | Lazywear`,
    description: product.description,
  };
}
