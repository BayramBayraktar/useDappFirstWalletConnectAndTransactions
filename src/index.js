import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DAppProvider, Mainnet } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'


const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet')
  },
  gasLimitBufferPercentage: 10,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
);

