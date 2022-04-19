import React, { useEffect, useState } from "react";
import Web3 from "web3/dist/web3.min.js";
import ItemContrat from "../contract/ItemContrat.json";
import ShoppingItems from "../contract/ShoppingItems.json";

const ShoppingItemsComp = () => {
  const web3 = new Web3(window.web3.currentProvider);

  const [form, setForm] = useState({ identifier: "", cost: "" });
  const [ItemId, setItemId] = useState(0);
  const [accounts, setCurrentAccount] = useState("");

  // 拉取合约
  const [contract, setContract] = useState();
  useEffect(() => {
    getContract();
  }, []);
  const getContract = async () => {
    setCurrentAccount(await web3.eth.getAccounts());

    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = ShoppingItems.networks[networkId];
    const shoppingItems = new web3.eth.Contract(
      ShoppingItems.abi,
      deployedNetwork && deployedNetwork.address
    );

    setContract(shoppingItems); // 创建合约

    // 增加event监听
    shoppingItems.events
      .itemOnTheWay({ filter: { ItemState: 1 } })
      .on("data", async (e) => {
        const add = e.returnValues.ItemId;
        window.alert(`item ${add} has paid, please deliver it! `);
      });
  };

  // 网页结构####################################################

  const handleinput = (e) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.identifier || !form.cost) {
      return window.alert("不能有空值！");
    } else {
      createItem(form.identifier, form.cost);
    }
  };

  // 合约交互 #########################

  // 拉取当前账户
  const getAccounts = async () => {
    const Accounts = await web3.eth.getAccounts();
    console.log(Accounts);
  };

  // 查询合约余额
  const getBalance = async () => {
    console.log(await contract.methods.getBalance().call());
  };

  // 创建item
  const createItem = async (_identifier, _cost) => {
    try {
      contract.methods
        .createItem(_identifier, _cost)
        .send({ from: accounts[0] })
        .on("transactionHash", function (hash) {
          console.log(hash);
        })
        .on("receipt", (receipt) => {
          console.log("SUCCESS!!!");
          const address = receipt.events.itemOnTheWay.returnValues.itemaddress;
          window.alert(`please sender price to ${address} `);
        });
    } catch (error) {
      console.log("error!!!!!");
      console.error(error);
    }
  };
  // 查itemlist ##########
  const ItemList = async () => {
    console.log(await contract.methods.ItemList(ItemId).call());
  };
  // 获取查询ID
  const debugItemlistinput = (e) => {
    setItemId(e.target.value);
  };

  // event  ########################################

  const logevent = async () => {
    const results = await contract.getPastEvents("itemOnTheWay", {
      // filter: { ItemId: 2 },
      fromBlock: 0,
    });
    console.log(results);
  };

  return (
    <div>
      <h1>Event Trigger / Supply Chain Example</h1>
      <h2>Items</h2>
      <h2>Add Items</h2>
      Cost in Wei: <input type="text" name="cost" onChange={handleinput} />
      Item Identifier:{" "}
      <input type="text" name="identifier" onChange={handleinput} />
      <button type="button" onClick={handleSubmit}>
        Send now
      </button>
      <div>
        DEbug
        <div>
          getBalance <button onClick={getBalance}> BTN</button>
        </div>
        <div>
          createItem <button onClick={createItem}> BTN</button>
        </div>
        <div>
          <button onClick={getAccounts}> getAccounts</button>
        </div>
        <div>
          <button onClick={logevent}> logEvent</button>
        </div>
        <div>
          ItemList
          <input type="text" onChange={debugItemlistinput} />
          <button onClick={ItemList}> BTN</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItemsComp;
