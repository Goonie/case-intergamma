import type { Product as ProductProps } from 'services/products';

import './Product.css';

function Product({ id, name, price, photo, description }: ProductProps) {
  return (
    <article className="Product">
      <h1>{name}</h1>
      <img src={'/product-photos/' + photo} />
      <p>{description}</p>
    </article>
  );
}

export { Product };
