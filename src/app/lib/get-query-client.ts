'use client';

import { QueryClient } from '@tanstack/react-query';

let clientQueryClientSingleton: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return new QueryClient();
  } else {
    // Browser: use a singleton pattern to keep the same query client
    return (clientQueryClientSingleton ??= new QueryClient());
  }
};

export default getQueryClient;
