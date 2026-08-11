import { PageKey, Provider, useOpenPage } from '@embarkai/ui-kit';
import { useEffect, useRef } from 'react';
import { useEmbarkBridge } from './EmbarkBridgeContext';
import { embarkBridgeConfig, initializeEmbarkI18n } from './embarkI18n';

const EMBARK_PROJECT_ID = process.env.NEXT_PUBLIC_EMBARK_PROJECT_ID;

initializeEmbarkI18n();

export function EmbarkBridgeClient() {
  return (
    <Provider projectId={EMBARK_PROJECT_ID} initialConfig={embarkBridgeConfig}>
      <EmbarkBridgeLauncher />
    </Provider>
  );
}

function EmbarkBridgeLauncher() {
  const { openRequestId } = useEmbarkBridge();
  const { open } = useOpenPage();
  const lastHandledRequestId = useRef(0);

  useEffect(() => {
    if (!openRequestId || lastHandledRequestId.current === openRequestId) return;

    lastHandledRequestId.current = openRequestId;
    open(PageKey.SEND, { sendFlow: 'bridge' });
  }, [open, openRequestId]);

  return null;
}
