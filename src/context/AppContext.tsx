"use client";

import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import { FightCashAbi } from "./FightCashAbi";
import { MyUSDCAbi } from "./MyUSDCAbi";
import { useContractContext } from "./ContracProvider";
import { Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setToggled] = useState(false);
  const [amount1, setAmount1] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [fighter, setFighter] = useState<number>(1);
  const [isApprove1, setApprove1] = useState<boolean>(true);
  const [isApprove2, setApprove2] = useState<boolean>(true);
  const [gain1, setGain1] = useState<number>(0);
  const [gain2, setGain2] = useState<number>(0);
  const [isConnect, setConnect] = useState<boolean>(false);
  const [chainBalance, setBalance] = useState<number>(0);
  const [totalPotAmount1, setTotalPotAmount1] = useState<number>(0);
  const [totalPotAmount2, setTotalPotAmount2] = useState<number>(0);
  const [totalBetAmount1, setTotalBetAmount1] = useState<number>(0);
  const [totalBetAmount2, setTotalBetAmount2] = useState<number>(0);

  const { provider, signer } = useContractContext();

  const [gameContract, setGameContract] = useState<ethers.Contract | null>(
    null
  );
  const [usdcContract, setUsdcContract] = useState<ethers.Contract | null>(
    null
  );

  useEffect(() => {
    if (signer && provider) {
      const contractAddress = "0xb3FF18F2a8713477307b04107570d6670f02DE24"; // my contract address
      const contractToken = "0xA172F1DFcee0eB48D3C493d631b11cdA196255A6"; // my contract token

      const gameContractInstance = new ethers.Contract(
        contractAddress,
        FightCashAbi,
        signer
      );
      const usdcContractInstance = new ethers.Contract(
        contractToken,
        MyUSDCAbi,
        signer
      );

      setGameContract(gameContractInstance);
      setUsdcContract(usdcContractInstance);
    }
  }, [signer, provider]);

  useEffect(() => {
    if (gameContract && usdcContract) {
      getTotalBetData();
      getGain();
    }
  }, [gameContract, usdcContract, totalBetAmount1, totalBetAmount2]);

  useEffect(() => {
    if (isConnect && usdcContract) {
      getBalance();
    } else {
      setBalance(0);
    }
    if (gameContract) {
      getInitialData();
    }
  }, [isConnect, usdcContract, gameContract]);

  // my wallet private key
  const privateKey =
    "33a6d2184e5d243ebbafa2ed5bbca0a35adb571ea494fa66fb737c64bb224068";

  // Create a wallet/signer with the private key and provider
  const wallet = new ethers.Wallet(privateKey, provider);

  /**
   * @function getGain
   * @param address
   * @param fighter
   * @returns none
   */
  const getGain = async () => {
    if (!gameContract) return;

    const gainResult1 = await gameContract.userBets(wallet.address, 1);
    setGain1(gainResult1.toNumber());
    const gainResult2 = await gameContract.userBets(wallet.address, 2);
    setGain2(gainResult2.toNumber());
  };

  /**
   * @function getTotalBetData
   * @param address: user
   * @param fighter
   * @returns none
   */
  const getTotalBetData = async () => {
    if (!gameContract) return;

    const betResult1 = await gameContract.userBets(wallet.address, 1);
    setTotalBetAmount1(betResult1.toNumber());
    const betResult2 = await gameContract.userBets(wallet.address, 2);
    setTotalBetAmount2(betResult2.toNumber());
  };

  /**
   * @function getInitialData
   * @param fighter
   * @returns none
   */
  const getInitialData = async () => {
    if (!gameContract) return;

    const amountResult1 = await gameContract.totalBetAmount(1);
    setTotalPotAmount1(amountResult1.toNumber());
    const amountResult2 = await gameContract.totalBetAmount(2);
    setTotalPotAmount2(amountResult2.toNumber());
  };

  /**
   * @function getBalance
   * @param adress: user
   * @returns none
   */
  const getBalance = async () => {
    if (!usdcContract) return;

    const chainResult = await usdcContract.balanceOf(wallet.address);
    setBalance(chainResult.toNumber());
  };

  /**
   * @function handleApprove
   * @param name
   * @returns none
   */
  const handleApprove = async (name: string) => {
    if (!usdcContract) return;

    if (name != "Jack Paul") {
      setFighter(2);
      try {
        const approveResult: any = await usdcContract.approve(
          wallet.address,
          ethers.utils.parseUnits(amount2.toString(), 9)
        );
        const receipt: boolean = await approveResult.wait();
        if (receipt) {
          setApprove2(!isApprove2);
          setTimeout(() => {
            getInitialData();
            getTotalBetData();
            getGain();
          }, 2000);
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
    } else {
      try {
        const approveResult = await usdcContract.approve(
          wallet.address,
          ethers.utils.parseUnits(amount1!.toString(), 9)
        );
        const receipt: boolean = await approveResult.wait();
        if (receipt) {
          setApprove1(!isApprove1);
          setTimeout(() => {
            getInitialData();
            getTotalBetData();
            getGain();
          }, 2000);
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
    }
  };

  /**
   * @function handlebet
   * @param name
   * @returns none
   */
  const handleBet = async (name: string) => {
    if (!gameContract) return;

    if (name != "Jack Paul") {
      try {
        setFighter(2);
        const betResult = await gameContract.placeBet(fighter, amount2!);
        const receipt: boolean = await betResult.wait();
        if (receipt) {
          setApprove2(!isApprove2);
          setTimeout(() => {
            getInitialData();
            getBalance();
            getTotalBetData();
            getGain();
          }, 4000);
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
    } else {
      try {
        const betResult = await gameContract.placeBet(fighter, amount1!);
        const receipt: boolean = await betResult.wait();
        if (receipt) {
          setApprove1(!isApprove1);
          setTimeout(() => {
            getInitialData();
            getBalance();
            getTotalBetData();
            getGain();
          }, 4000);
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
    }
  };

  return (
    <AppContext.Provider
      value={{
        isToggled,
        amount1,
        amount2,
        isApprove1,
        isApprove2,
        gain1,
        gain2,
        totalBetAmount1,
        totalBetAmount2,
        chainBalance,
        totalPotAmount1,
        totalPotAmount2,
        setConnect,
        setAmount1,
        setAmount2,
        setToggled,
        handleApprove,
        handleBet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context == undefined) {
    throw new Error("useTimeContext must be used within a TimeProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
