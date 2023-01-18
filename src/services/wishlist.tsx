import React, { createContext, useContext } from 'react';
import { usePersistentState } from 'utilities/persistent-state';

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
      overviewVisible: boolean;
      openOverview: () => void;
      closeOverview: () => void;
      wishlist: WishlistItem[];
      addToWishlist: (product: WishlistProduct) => void;
    }
  | undefined
>(undefined);

function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [overviewVisible, setOverviewVisible] = usePersistentState<boolean>(
    'overview-visibility',
    false
  );
  const [wishlist, setWishlist] = usePersistentState<WishlistItem[]>(
    'wishlist-items',
    []
  );

  function openOverview() {
    setOverviewVisible(true);
  }

  function closeOverview() {
    setOverviewVisible(false);
  }

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
    <WishlistContext.Provider
      value={{
        overviewVisible,
        openOverview,
        closeOverview,
        wishlist,
        addToWishlist,
      }}
    >
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
