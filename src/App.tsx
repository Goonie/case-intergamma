import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WishlistProvider } from 'services/wishlist';

import { ProductOverview } from 'ui-components/ProductOverview';

import 'App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WishlistProvider>
        <main className="App">
          <ProductOverview />
        </main>
      </WishlistProvider>
    </QueryClientProvider>
  );
}

export { App };
