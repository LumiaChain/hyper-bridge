import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';
import { EmbarkBridgeContextProvider } from './EmbarkBridgeContext';

const EmbarkBridgeClient = dynamic(
  () => import('./EmbarkBridgeClient').then((mod) => mod.EmbarkBridgeClient),
  { ssr: false },
);

export function EmbarkBridgeProvider({ children }: PropsWithChildren) {
  return (
    <EmbarkBridgeContextProvider>
      {children}
      <EmbarkBridgeClient />
    </EmbarkBridgeContextProvider>
  );
}
