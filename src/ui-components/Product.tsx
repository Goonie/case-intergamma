import type { Product as ProductProps } from 'services/products';
import { useWishlist } from 'services/wishlist';

import './Product.css';

function Product({ id, name, price, photo, description }: ProductProps) {
  const { addToWishlist } = useWishlist();

  return (
    <article className="Product">
      <h1>{name}</h1>
      <img src={'/product-photos/' + photo} />

      <div className="options">
        <button
          onClick={() => {
            addToWishlist({ id, name, price, photo });
          }}
        >
          Add to Wishlist
        </button>
      </div>

      <p>{description}</p>
    </article>
  );
}

export { Product };
