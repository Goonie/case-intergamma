import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WishlistProvider } from 'services/wishlist';

import { Header } from 'ui-components/Header';
import { WishlistOverview } from 'ui-components/WishlistOverview';
import { ProductOverview } from 'ui-components/ProductOverview';

import 'App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WishlistProvider>
        <WishlistOverview />

        <Header />

        <main className="App">
          <ProductOverview />
        </main>
      </WishlistProvider>
    </QueryClientProvider>
  );
}

export { App };
