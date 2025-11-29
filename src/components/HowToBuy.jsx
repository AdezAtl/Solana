import React from 'react';

const HowToBuy = () => {
  const steps = [
    {
      step: 1,
      title: "Create a Wallet",
      description: "Download Phantom or Solflare wallet"
    },
    {
      step: 2,
      title: "Get SOL",
      description: "Purchase SOL from any major exchange"
    },
    {
      step: 3,
      title: "Connect to DEX",
      description: "Go to Raydium or Orca DEX"
    },
    {
      step: 4,
      title: "Swap for SOLT",
      description: "Swap your SOL for SOLToken"
    }
  ];

  const handleCopyAddress = () => {
    // Fake contract address
    const fakeContract = 'So1anaT0k3nM0ckAddr3ss123456789';
    navigator.clipboard.writeText(fakeContract).then(() => {
      alert('Contract address copied to clipboard!');
    });
  };

  return (
    <section id="howtobuy" className="how-to-buy">
      <div className="container">
        <h2>How to Buy SOLToken</h2>
        <div className="steps">
          {steps.map(step => (
            <div key={step.step} className="step-card">
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className="contract-address">
          <h4>Contract Address:</h4>
          <code>So1anaT0k3nM0ckAddr3ss123456789</code>
          <button className="btn-copy" onClick={handleCopyAddress}>Copy</button>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
