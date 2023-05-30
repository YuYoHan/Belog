import React from 'react';
import Routing from 'routes/Routing';
import GlobalStyles from 'libs/styles/global';
import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot} from 'recoil';

<meta name="viewport" content="width=device-width, initial-scale=1.0"/>


function App() {


  const qureyClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60 * 24,
            cacheTime: 1000 * 60 * 5,
        },
    },
  });


  return (
    <QueryClientProvider client={qureyClient}>
        <RecoilRoot>
          <GlobalStyles/>
          <Routing/>
        </RecoilRoot>
      </QueryClientProvider>

  );
}

export default App;
