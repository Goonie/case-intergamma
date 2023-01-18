import { useWishlist } from 'services/wishlist';

import './WishlistOverview.css';

function WishlistOverview() {
  const { wishlist, overviewVisible, closeOverview } = useWishlist();

  return (
    <section
      className={'WishlistOverview' + (overviewVisible ? ' visible' : '')}
    >
      <header>
        <h1>Your Wishlist</h1>
        <button onClick={closeOverview}>Close</button>
      </header>

      {wishlist.map((item) => (
        <article>
          <img src={'/product-photos/' + item.product.photo} />
          <h1>
            {item.product.name} <span className="id">{item.product.id}</span>
          </h1>
          <p>
            {item.count} cars, at {item.product.price} a piece
          </p>
          <p className="total-price">
            {(item.product.price * item.count).toFixed(2)}
          </p>
        </article>
      ))}
    </section>
  );
}

export { WishlistOverview };
