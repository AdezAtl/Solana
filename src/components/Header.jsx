import React from 'react';

const Header = ({ isConnected, walletAddress, onConnectWallet }) => {
  const shortenAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>🚀 SOLToken</h2>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#howtobuy">How to Buy</a>
          <a href="#roadmap">Roadmap</a>
          <button 
            className={`wallet-button ${isConnected ? 'connected' : ''}`}
            onClick={onConnectWallet}
          >
            {isConnected ? (
              <span>Connected: {shortenAddress(walletAddress)}</span>
            ) : (
              'Connect Wallet'
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
