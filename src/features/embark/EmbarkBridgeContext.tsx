import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';

interface EmbarkBridgeContextValue {
  openEmbarkBridge: () => void;
  openRequestId: number;
}

const EmbarkBridgeContext = createContext<EmbarkBridgeContextValue | undefined>(undefined);

export function EmbarkBridgeContextProvider({ children }: PropsWithChildren) {
  const [openRequestId, setOpenRequestId] = useState(0);
  const openEmbarkBridge = useCallback(() => setOpenRequestId((requestId) => requestId + 1), []);

  return (
    <EmbarkBridgeContext.Provider value={{ openEmbarkBridge, openRequestId }}>
      {children}
    </EmbarkBridgeContext.Provider>
  );
}

export function useEmbarkBridge() {
  const context = useContext(EmbarkBridgeContext);
  if (!context) throw new Error('useEmbarkBridge must be used within EmbarkBridgeContextProvider');

  return context;
}
