"use client";

import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import { FightCashAbi } from "./FightCashAbi";
import { MyUSDCAbi } from "./MyUSDCAbi";
import { useContractContext } from "./ContracProvider";

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setToggled] = useState<boolean>(false);
  // const [chainBalance, setBalance] = useState<number>(0);

  const { provider, signer, isConnect, setConnect } = useContractContext();

  const [gameContract, setGameContract] = useState<ethers.Contract | null>(
    null
  );
  const [usdcContract, setUsdcContract] = useState<ethers.Contract | null>(
    null
  );
  const [wallet, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (signer && provider) {
      const contractAddress = "0xb3FF18F2a8713477307b04107570d6670f02DE24"; // my contract address
      const contractToken = "0xA172F1DFcee0eB48D3C493d631b11cdA196255A6"; // my contract token

      signer
        .getAddress()
        .then((address: string) => {
          setAddress(address);
        })
        .catch((error) => {
          console.error("Error getting address:", error);
        });

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

  // useEffect(() => {
  //   if (wallet) {
  //     getBalance();
  //   } else {
  //     setBalance(0);
  //   }
  // }, [isConnect, usdcContract]);

  // /**
  //  * @function getBalance
  //  * @param adress: user
  //  * @returns none
  //  */
  // const getBalance = async () => {
  //   if (!usdcContract) return;
  //   console.log(wallet);

  //   const chainResult = await usdcContract.balanceOf(wallet!);
  //   setBalance(chainResult.toNumber());
  // };

  return (
    <AppContext.Provider
      value={{
        isToggled,
        // chainBalance,
        gameContract,
        usdcContract,
        wallet,
        isConnect,
        // getBalance,
        setConnect,
        setToggled,
        // setBalance,
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
