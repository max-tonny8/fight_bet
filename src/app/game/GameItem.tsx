import React, { useState, useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import CompeteItem from "@/components/ui/compete";
import { useContractContext } from "@/context/ContracProvider";

const competesList: CompeteList[] = [
  [
    {
      name: "Jack Paul",
      src: "https://lezetomedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/05/09191713/Conor-McGregor-Net-Worth-scaled.jpg",
      num: 1,
    },
    {
      name: "Mike Tyson",
      src: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/05/michael-chandler-ufc-274-ceremonial-weigh-ins.jpg",
      num: 2,
    },
  ],
  [
    {
      name: "McGregor",
      src: "https://lezetomedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/05/09191713/Conor-McGregor-Net-Worth-scaled.jpg",
      num: 3,
    },
    {
      name: "Chandler",
      src: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/05/michael-chandler-ufc-274-ceremonial-weigh-ins.jpg",
      num: 4,
    },
  ],
  [
    {
      name: "Alex",
      src: "https://lezetomedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/05/09191713/Conor-McGregor-Net-Worth-scaled.jpg",
      num: 5,
    },
    {
      name: "Mac",
      src: "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/05/michael-chandler-ufc-274-ceremonial-weigh-ins.jpg",
      num: 6,
    },
  ],
];

const GameItem: React.FC = () => {
  const [chainBalance, setBalance] = useState<number>(0);

  const { wallet, usdcContract, isConnect, chainID, chainName } =
    useAppContext();

  useEffect(() => {
    if (wallet) {
      getBalance();
    } else {
      setBalance(0);
    }
  }, [isConnect, wallet, usdcContract]);

  /**
   * @function getBalance
   * @param adress: user
   * @returns none
   */
  const getBalance = async () => {
    if (!usdcContract) return;

    const chainResult = await usdcContract.balanceOf(wallet!);
    setBalance(chainResult.toNumber());
  };

  return (
    <div className="main">
      <div className="account-part">
        <div className="state">
          <p>
            Account status: <span className="led"></span>
            <span className="state-bold">
              {isConnect ? "Connected" : "Disconnected"}
            </span>
          </p>
          <div className="chain-part">
            <p className="desc">{`[ Switch To Polygon Network  if you haven't ]`}</p>
            <p>
              Chain:{" "}
              <span className="state-bold">{`${chainName}(${chainID})`}</span>
            </p>
          </div>
          <p className="balance">
            Your USDC Balance:{" "}
            <span className="state-bold">{chainBalance}</span>
          </p>
        </div>
      </div>
      <div className="compete-part">
        {competesList.map((item: Compete[], index: number) => (
          // @ts-ignore
          <CompeteItem
            data={item}
            key={index}
            chainBalance={chainBalance}
            getBalance={getBalance}
          />
        ))}
      </div>
      <p className="share-text">
        Share the site with fight enthusiasts to increase the pot
      </p>
    </div>
  );
};

export default GameItem;
