import { useProducts } from 'services/products';

import { Product } from 'ui-components/Product';

import './ProductOverview.css';

function ProductOverview() {
  const { isLoading, error, products } = useProducts();

  if (error) {
    return (
      <section className="ProductOverview">
        <h1>Oops, we encountered an error</h1>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="ProductOverview">
        <h1>
          Please sit tight while we're getting our cars ready for showcasing!
        </h1>
      </section>
    );
  }

  return (
    <section className="ProductOverview">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}

export { ProductOverview };
