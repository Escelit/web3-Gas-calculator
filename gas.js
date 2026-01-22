/**
 * Simple demonstration of gas fee calculation
 * Assumption: Standard ETH transfer uses 21,000 gas
 */

function calculateGasFee(gasUsed, gasPriceGwei) {
  const GWEI_TO_ETH = 1e-9; // conversion factor
  return gasUsed * gasPriceGwei * GWEI_TO_ETH;
}

// Assumed values
const gasUsed = 21000; // standard ETH transfer
const gasPriceGwei = 20; // assumed network gas price

const gasFeeEth = calculateGasFee(gasUsed, gasPriceGwei);

console.log(`Gas Used: ${gasUsed}`);
console.log(`Gas Price: ${gasPriceGwei} Gwei`);
console.log(`Gas Fee: ${gasFeeEth} ETH`);
