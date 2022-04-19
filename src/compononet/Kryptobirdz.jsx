import React, { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";
import Kryptobirdz from "../abis/Kryptobirdz.json";

const KryptobirdzApp = () => {
  const web3 = new Web3(window.web3.currentProvider);
  const [accounts, setCurrentAccount] = useState("");
  const [contract, setContract] = useState();

  // myWeb3library: 拉取合约
  useEffect(() => {
    getContract();
  }, []);
  const getContract = async () => {
    setCurrentAccount(await web3.eth.getAccounts());

    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Kryptobirdz.networks[networkId];
    const contract = new web3.eth.Contract(
      Kryptobirdz.abi,
      deployedNetwork && deployedNetwork.address
    );

    setContract(contract); // 创建合约

    // 增加event监听
    // contract.events
    //   .itemOnTheWay({ filter: { ItemState: 1 } })
    //   .on("data", async (e) => {
    //     const add = e.returnValues.ItemId;
    //     window.alert(`item ${add} has paid, please deliver it! `);
    //   });
  };

  const getAccounts = async () => {
    console.log(accounts[0]);
  };

  return (
    <div>
      <nav>
        <div style={{ color: "white" }}>Kryptobirdz</div>

        <div>{accounts[0]}</div>
      </nav>

      <div>
        <p>debug:</p>
        <button onClick={getAccounts}> getAccounts</button>
      </div>
    </div>
  );
};

export default KryptobirdzApp;
