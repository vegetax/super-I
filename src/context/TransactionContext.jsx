import React, { useEffect, useState } from "react";

const { ethereum } = window; // 安装了 metamask后  window就有个ethereum的对象

export const TransactionContext = React.createContext();

// TransactionProvider 包的东西就是children
export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(""); // 向下传递当前账号

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  // 组件加载时， 检查是否连接metamask
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return window.alert("please install metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  };

  // 连接钱包，拉取账号
  const connectWallet = async () => {
    try {
      if (!ethereum) return window.alert("please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum Object.");
    }
  };

  return (
    <TransactionContext.Provider value={{ currentAccount, connectWallet }}>
      {children}
    </TransactionContext.Provider>
  );
};
