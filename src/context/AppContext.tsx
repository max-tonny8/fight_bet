"use client";

import React, { useState, useContext, createContext } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isToggled, setToggled] = useState(false);
  const [amount1, setAmount1] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [fighter, setFighter] = useState<number>(1);
  const [isApprove, setApprove] = useState<boolean>(false);
  const [gain, setGain] = useState<string>("0");
  const [isConnect, setConnect] = useState<boolean>(false);

  let chainBalance: number = 0;
  let totalBetAmount1: number = 0;
  let totalBetAmount2: number = 0;
  let totalPotAmount1: number = 0;
  let totalPotAmount2: number = 0;

  const handleApprove = (name: string) => {
    console.log("-----> handleApprove", name);
  };

  const handleBet = (name: string) => {
    console.log("-----> handleBet", name);
  };

  return (
    <AppContext.Provider
      value={{
        isToggled,
        amount1,
        amount2,
        isApprove,
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
