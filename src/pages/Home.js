import { Alchemy, Network } from 'alchemy-sdk';
import React, { useEffect, useState } from 'react';
import LastBlockInfo from '../components/LastBlockInfo'

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

const alchemy = new Alchemy(settings);
const Home = () => {
  const [blockNumber, setBlockNumber] = useState(null);
  const [blockInfo, setBlockInfo] = useState(null);
  useEffect(() => {
    getBlockNumber();
  }, []);
  const getBlockNumber = async () => {
    try {
      const blockNumber = await alchemy.core.getBlockNumber();
      setBlockNumber(blockNumber);
      const blockInfoTx = await alchemy.core.getBlockWithTransactions(blockNumber);
      setBlockInfo(blockInfoTx);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <React.Fragment>
      <LastBlockInfo
        blockInfo={blockInfo}
      />
    </React.Fragment>
  )
}

export default Home