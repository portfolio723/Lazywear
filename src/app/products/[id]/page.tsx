import { notFound } from 'next/navigation';
import { allProducts } from '@/lib/data';
import ProductDetailClient from './ProductDetailClient';
import type { Product } from '@/types';
import type { Metadata } from 'next';

type ProductDetailPageProps = {
  params: { id: string }; 
};

function getProduct(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id);
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = params;
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
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: `${product.name} | Lazywear`,
      description: product.description.substring(0, 150),
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = params;
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
