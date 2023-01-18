import { useWishlist } from 'services/wishlist';

import './WishlistIcon.css';

function WishlistIcon() {
  const { wishlist } = useWishlist();

  // const countTotal = wishlist.length;
  const countTotal = wishlist.reduce((count, item) => count + item.count, 0);

  return (
    <button className="WishlistIcon">
      <h1>&lt;3</h1>
      {countTotal > 0 && <span className="count-total">{countTotal}</span>}
    </button>
  );
}

export { WishlistIcon };
