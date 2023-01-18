import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ProductOverview } from 'ui-components/ProductOverview';

import 'App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="App">
        <ProductOverview />
      </main>
    </QueryClientProvider>
  );
}

export { App };
