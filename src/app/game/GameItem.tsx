import React, { useState, useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { useContractContext } from "@/context/ContracProvider";
import CompeteItem from "@/components/ui/compete";
import { useAccount } from "wagmi";
import { Zoom, toast } from "react-toastify";

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

  const { isConnected, address, chainId, chain } = useAccount();

  const { usdcContract } = useAppContext();
  const { setConnect } = useContractContext();

  useEffect(() => {
    if (isConnected) {
      getBalance();
    } else {
      setBalance(0);
    }
    setConnect(isConnected);
  }, [isConnected, address!, chainId, usdcContract]);

  /**
   * @function getBalance
   * @param adress: user
   * @returns none
   */
  const getBalance = async () => {
    if (!usdcContract)
      return toast("🔊 Again connect wallet!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });

    const chainResult = await usdcContract.balanceOf(address!);
    setBalance(chainResult.toNumber() / 10 ** 6);
  };

  return (
    <div className="main">
      <div className="account-part">
        <div className="state">
          <p>
            Account status: <span className="led"></span>
            <span className="state-bold">
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </p>
          <div className="chain-part">
            <p className="desc">{`[ Switch To Polygon Network  if you haven't ]`}</p>
            <p>
              Chain:{" "}
              <span className="state-bold">{`${
                chain == undefined ? "" : chain.name
              }(${chainId})`}</span>
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
