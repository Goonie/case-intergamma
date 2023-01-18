import { useQuery } from '@tanstack/react-query';

interface Product {
  id: string;
  name: string;
  price: number;
  photo: string;
  description: string;
}

function useProducts() {
  function fetchProducts() {
    return fetch('mock-data/products.json')
      .then((response) => response.json())
      .then((response) => response.products);
  }

  const { isLoading, error, data } = useQuery<Product[]>({
    queryKey: ['product-data'],
    queryFn: fetchProducts,
  });

  return { isLoading, error, products: data ?? [] };
}

export type { Product };
export { useProducts };
