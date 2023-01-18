import { WishlistIcon } from 'ui-components/WishlistIcon';

import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1>Our Products</h1>

      <WishlistIcon />
    </header>
  );
}

export { Header };
