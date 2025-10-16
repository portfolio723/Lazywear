import { notFound } from 'next/navigation';

// ✅ CRITICAL: params must be Promise<{ id: string }>
type PageProps = {
  params: Promise<{ id: string }>;
};

// Mock product type
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
};

// Fetch product data
async function getProduct(id: string): Promise<Product | null> {
  try {
    // Replace with your actual API endpoint
    const res = await fetch(`https://api.example.com/products/${id}`, {
      cache: 'no-store', // or 'force-cache' for static
    });
    
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// ✅ Main component - MUST await params
export default async function ProductPage({ params }: PageProps) {
  // ✅ CRITICAL: Await params before accessing id
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const product = await getProduct(id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <div className="mt-6">
        <span className="text-2xl font-semibold">₹{product.price}</span>
      </div>
      <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded">
        Add to Cart
      </button>
    </div>
  );
}

// ✅ Required for static builds
export async function generateStaticParams() {
  // Return array of all product IDs
  // Replace with your actual product data source
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

// ✅ Optional: Generate metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = await getProduct(id);
  
  return {
    title: product?.name || 'Product Not Found',
    description: product?.description || 'Lazy Wear Product',
  };
}
