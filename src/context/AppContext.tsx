"use client";

import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import { FightCashAbi } from "./FightCashAbi";
import { MyUSDCAbi } from "./MyUSDCAbi";
import { useContractContext } from "./ContracProvider";

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setToggled] = useState<boolean>(false);
  const [isConnect, setConnect] = useState<boolean>(false);
  const [chainBalance, setBalance] = useState<number>(0);

  const { provider, signer } = useContractContext();

  const [gameContract, setGameContract] = useState<ethers.Contract | null>(
    null
  );
  const [usdcContract, setUsdcContract] = useState<ethers.Contract | null>(
    null
  );

  // my wallet private key
  const privateKey =
    "33a6d2184e5d243ebbafa2ed5bbca0a35adb571ea494fa66fb737c64bb224068";
  // Create a wallet/signer with the private key and provider
  const wallet = new ethers.Wallet(privateKey, provider);

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
    if (isConnect && usdcContract) {
      getBalance();
    } else {
      setBalance(0);
    }
  }, [isConnect, usdcContract]);

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

  return (
    <AppContext.Provider
      value={{
        isToggled,
        chainBalance,
        gameContract,
        usdcContract,
        wallet,
        isConnect,
        getBalance,
        setConnect,
        setToggled,
        setBalance,
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
