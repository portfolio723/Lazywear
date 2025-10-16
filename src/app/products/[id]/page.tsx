
import ProductDetailClient from './ProductDetailClient'
import { allProducts } from '@/lib/data'
import { notFound } from 'next/navigation';
import { type Product } from '@/types';
import type { Metadata } from 'next';

type PageProps = {
  params: { id: string };
};

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = params;
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product not found"
    }
  }

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: [
        `https://lazywear.store${product.image}`
    ],
    description: product.description,
    sku: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Lazywear',
    },
    offers: {
      '@type': 'Offer',
      url: `https://lazywear.store/products/${product.id}`,
      priceCurrency: 'INR',
      price: product.price.toString(),
      itemCondition: 'https://schema.org/NewCondition',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "27"
    }
  };

  return {
    title: `${product.name} - Lazywear`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Lazywear`,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical: `/products/${product.id}`,
    },
    other: {
      'script[type="application/ld+json"]': JSON.stringify(productSchema),
    },
  };
}


// This is the Server Component that can safely access params
export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = params;

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Pass the full product object to the Client Component
  return <ProductDetailClient product={product} />;
}
