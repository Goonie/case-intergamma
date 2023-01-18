import React, { createContext, useContext, useState } from 'react';

interface WishlistProduct {
  id: string;
  name: string;
  price: number;
  photo: string;
}

interface WishlistItem {
  product: WishlistProduct;
  count: number;
}

const WishlistContext = createContext<
  | {
      wishlist: WishlistItem[];
      addToWishlist: (product: WishlistProduct) => void;
    }
  | undefined
>(undefined);

function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  function addToWishlist(product: WishlistProduct) {
    const foundIndex = wishlist.findIndex(
      (item) => item.product.id === product.id
    );

    if (foundIndex >= 0) {
      setWishlist(
        wishlist.map((item) =>
          item.product.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
      return;
    }

    setWishlist([...wishlist, { product, count: 1 }]);
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  const context = useContext(WishlistContext);

  if (context === undefined) {
    throw new Error('useWishlist must be used inside a WishlistProvider');
  }

  return context;
}

export { WishlistProvider, useWishlist };
