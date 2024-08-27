import Colors from '@styles/colors';
import Fonts from '@styles/fonts';
import ResetStyles from '@styles/myReset';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Router from './Router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResetStyles />
      <Colors />
      <Router />
      <Fonts />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
