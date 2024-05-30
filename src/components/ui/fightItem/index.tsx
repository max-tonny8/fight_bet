import React, { useState } from "react";
import { ethers } from "ethers";
import { Wrapper } from "./index.styled";
import Image from "next/image";
import InputBox from "../inputBox";
import MainBtn from "../mainBtn";
import { useAppContext } from "@/context/AppContext";
import { Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FightItem = ({
  src,
  gain,
  num,
  name,
  totalBetAmount,
  chainBalance,
  getInitialData,
  getTotalBetData,
  getGain,
  getBalance,
}: FightItemType) => {
  const [amount, setAmount] = useState<number>(0);
  const [isApprove, setApprove] = useState<boolean>(true);

  const { usdcContract, gameContract, wallet } = useAppContext();

  /**
   * @function handleApprove
   * @param name
   * @returns none
   */
  const handleApprove = async (name: string) => {
    if (!usdcContract) return;

    try {
      const approveResult: any = await usdcContract.approve(
        wallet!,
        amount * 10 ** 6
      );
      const receipt: boolean = await approveResult.wait();
      if (receipt) {
        setApprove(!isApprove);
        setTimeout(() => {
          getInitialData();
          getTotalBetData();
          getGain();
        }, 1000);
      } else {
        toast("🔊 This transaction is failed!", {
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
      }
    } catch (error: any) {
      if (error) {
        toast("🔊 Let's try again transaction!", {
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
      }
    }
  };

  /**
   * @function handlebet
   * @param name
   * @returns none
   */
  const handleBet = async (name: string) => {
    if (!gameContract) return;

    try {
      const betResult = await gameContract.placeBet(num, amount!);
      const receipt: boolean = await betResult.wait();

      if (receipt) {
        setApprove(!isApprove);
        setTimeout(() => {
          getInitialData();
          getBalance();
          getTotalBetData();
          getGain();
        }, 1000);
      } else {
        toast("🔊 This transaction is failed!", {
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
      }
    } catch (error: any) {
      if (error) {
        toast("🔊 Let's try again transaction!", {
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
      }
    }
  };

  /**
   * @name handleWithDraw
   * @param name
   * @returns none
   */
  const handleWithDraw = async () => {
    console.log("Click the With Draw!");
    try {
      const betResult = await gameContract.withdrawReward();
      const receipt: boolean = await betResult.wait();

      if (receipt) {
        setApprove(!isApprove);
        setTimeout(() => {
          getInitialData();
          getBalance();
          getTotalBetData();
          getGain();
        }, 1000);
      } else {
        toast("🔊 This transaction is failed!", {
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
      }
    } catch (error: any) {
      if (error) {
        toast("🔊 Let's try again transaction!", {
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
      }
    }
  };

  return (
    <Wrapper>
      <div className="game-control">
        <div className="fighter-info">
          <p className="fighter-name">{name}</p>
          <Image src={src} alt="No image..." width={220} height={180} />
        </div>
        <div className="setting">
          <InputBox
            amount={amount}
            setAmount={setAmount}
            chainBalance={chainBalance}
          />
          {isApprove ? (
            <MainBtn
              title="Approve USDC to place your bet"
              $width="290px"
              onClick={() => handleApprove(name)}
            />
          ) : (
            <MainBtn
              title={`Place Bet on ${name}`}
              $width="230px"
              onClick={() => handleBet(name)}
            />
          )}
          <MainBtn
            title={`WithDraw ${name}`}
            $width="230px"
            onClick={() => handleWithDraw}
          />
        </div>
      </div>
      <div className="bonus">
        <p>
          Your total bet amount: <span>{`$${totalBetAmount}`}</span>
        </p>
        <p>
          Potential gains if you win: <span>{`$${gain}`}</span>
          {`[ check back later ]`}
        </p>
      </div>
    </Wrapper>
  );
};

export default FightItem;
