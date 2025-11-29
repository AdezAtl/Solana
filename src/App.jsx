import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = () => {
    if (!isConnected) {
      // Generate a fake Solana wallet address
      const fakeAddress = 'So1' + Math.random().toString(36).substr(2, 32);
      setWalletAddress(fakeAddress);
      setIsConnected(true);
    } else {
      setWalletAddress('');
      setIsConnected(false);
    }
  };

  return (
    <div className="App">
      <Header 
        isConnected={isConnected}
        walletAddress={walletAddress}
        onConnectWallet={handleConnectWallet}
      />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
