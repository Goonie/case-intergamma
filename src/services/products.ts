import { useEffect, useState } from 'react';

import mockData from 'mock-data/products.json';

interface Product {
  id: string;
  name: string;
  price: number;
  photo: string;
  description: string;
}

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(mockData.products);
  }, []);

  return { products };
}

export type { Product };
export { useProducts };
