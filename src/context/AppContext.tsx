"use client";

import React, { useState, useContext, createContext } from "react";

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isToggled, setToggled] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isToggled,
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
