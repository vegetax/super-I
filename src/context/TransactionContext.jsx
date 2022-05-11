// web3账号拉取  以及登陆检测

import React, { useEffect, useState } from "react";

const { ethereum } = window; // 安装了 metamask后  window就有个ethereum的对象

export const TransactionContext = React.createContext();

// TransactionProvider 包的东西就是children
export const TransactionProvider = ({ children }) => {
  //   const [currentAccount, setCurrentAccount] = useState(""); // 向下传递当前账号
  const [isLogin, setisLogin] = useState(false); // 设置登陆状态
  const localAccounts = window.localStorage.getItem("local_accounts"); // 将登陆账号存入浏览器中

  const [language, setLanguage] = useState(0); //设置语言   0英语、1汉语
  const selectLanguage = () => {
    language == 1 ? setLanguage(0) : setLanguage(1);
  };

  useEffect(() => {
    checkIfWalletIsConnected(); // 检测有没有metamask
    checkIsLogin(); // 检测是否之前有登陆过
  }, []);
  // 页面刷新时检测是否是已经登陆
  const checkIsLogin = () => {
    localAccounts ? setisLogin(true) : setisLogin(false);
  };
  // 组件加载时， 检查是否连接metamask
  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return window.alert("please install metamask");
    const accounts = await ethereum.request({ method: "eth_accounts" });
  };

  // 连接钱包，拉取账号
  const connectWallet = async () => {
    try {
      if (!ethereum) return window.alert("please install metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      window.localStorage.setItem("local_accounts", accounts[0]); // 在浏览器中记录登陆状态，下次直接登陆
      setisLogin(true); // 设置登陆状态为ture
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum Object.");
    }
  };

  const signOut = () => {
    window.localStorage.clear("local_accounts");
    setisLogin(false);
  };
  ``;
  return (
    <TransactionContext.Provider
      value={{ isLogin, language, selectLanguage, signOut, connectWallet }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
