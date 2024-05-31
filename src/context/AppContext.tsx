"use client";

import React, { useState, useContext, createContext, useEffect } from "react";
import { ethers } from "ethers";
import { FightCashAbi } from "./FightCashAbi";
import { MyUSDCAbi } from "./MyUSDCAbi";
import { useContractContext } from "./ContracProvider";

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isToggled, setToggled] = useState<boolean>(false);

  const { provider, signer } = useContractContext();

  const [gameContract, setGameContract] = useState<ethers.Contract | null>(
    null
  );
  const [usdcContract, setUsdcContract] = useState<ethers.Contract | null>(
    null
  );

  /**
   * Amoy testnet
   */
  // "MyUSDCModule#MyUSDC": "0xA172F1DFcee0eB48D3C493d631b11cdA196255A6",
  // "FightCashModule#FightCash": "0xb3FF18F2a8713477307b04107570d6670f02DE24"

  /**
   * Polygon mainnet
   */
  // const contractAddress = "0x0a90D0FB21a9E7d0934f0A0475329f521d42Dd70"; // my contract address
  // const contractToken = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; // my contract token

  useEffect(() => {
    if (signer && provider) {
      const contractAddress = "0x0a90D0FB21a9E7d0934f0A0475329f521d42Dd70"; // my contract address
      const contractToken = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; // my contract token

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

  return (
    <AppContext.Provider
      value={{
        isToggled,
        gameContract,
        usdcContract,
        setToggled,
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
