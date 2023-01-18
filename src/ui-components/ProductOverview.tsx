import { useProducts } from 'services/products';

import { Product } from 'ui-components/Product';

import './ProductOverview.css';

function ProductOverview() {
  const { products } = useProducts();

  return (
    <section className="ProductOverview">
      {products.map((product) => (
        <Product {...product} />
      ))}
    </section>
  );
}

export { ProductOverview };
