import { Modal, useConnectFns } from '@hyperlane-xyz/widgets';
import { ProtocolType } from '@hyperlane-xyz/utils';
import { useEmbarkBridge } from '../embark/EmbarkBridgeContext';

interface WalletConnectionModalProps {
  close: () => void;
  isOpen: boolean;
}

export function WalletConnectionModal({ close, isOpen }: WalletConnectionModalProps) {
  const connectFns = useConnectFns();
  const { openEmbarkBridge } = useEmbarkBridge();

  const connectEthereumWallet = () => {
    close();
    connectFns[ProtocolType.Ethereum]?.();
  };

  const connectEmbarkWallet = () => {
    close();
    openEmbarkBridge();
  };

  return (
    <Modal isOpen={isOpen} close={close} panelClassname="htw-max-w-sm htw-p-4">
      <div className="htw-flex htw-flex-col htw-space-y-2.5 htw-pb-2 htw-pt-4">
        <button
          type="button"
          onClick={connectEthereumWallet}
          className="htw-flex htw-w-full htw-flex-col htw-items-center htw-space-y-2.5 htw-rounded-lg htw-border htw-border-gray-200 htw-py-3.5 htw-transition-all hover:htw-bg-gray-100 active:htw-scale-95"
        >
          <span className="htw-text-lg htw-font-semibold htw-text-gray-800">Ethereum</span>
          <span className="htw-text-sm htw-text-gray-500">Connect to an EVM compatible wallet</span>
        </button>

        <div className="htw-border-t htw-border-gray-200 htw-pt-2.5">
          <button
            type="button"
            onClick={connectEmbarkWallet}
            className="htw-flex htw-w-full htw-flex-col htw-items-center htw-space-y-1.5 htw-rounded-lg htw-border htw-border-primary-500 htw-bg-primary-50 htw-py-3.5 htw-transition-all hover:htw-bg-primary-100 active:htw-scale-95"
          >
            <span className="htw-text-lg htw-font-semibold htw-text-gray-800">I use Embark</span>
            <span className="htw-text-sm htw-text-gray-600">Open the Embark wallet bridge</span>
          </button>
        </div>
      </div>
    </Modal>
  );
}
