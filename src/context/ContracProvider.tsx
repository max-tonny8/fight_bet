"use client";

import React, {
  useEffect,
  useState,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { ethers } from "ethers";
import { Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the context type
interface ContractContextType {
  provider: ethers.providers.Web3Provider | undefined;
  signer: ethers.Signer | null;
}

// Create the context
const ContractContext = createContext<ContractContextType | undefined>(
  undefined
);

const ContractProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<
    ethers.providers.Web3Provider | undefined
  >(undefined);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);

  useEffect(() => {
    const initialFunc = async () => {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        try {
          const newSignerAddr = (await window.ethereum.request({
            method: "eth_requestAccounts",
          })) as Array<string>;

          const web3Provider = new ethers.providers.Web3Provider(
            (window as any).ethereum
          );
          setProvider(web3Provider);
          setSigner(web3Provider.getSigner());
        } catch (error: any) {
          if (error) {
            toast("🔊 Let's progress wallet connect!", {
              position: "top-left",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Zoom,
            });
          }
        }
      } else {
        toast("🔊 Your wallet couldn't be connected!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        });
      }
    };
    initialFunc();
  }, []);

  return (
    <ContractContext.Provider value={{ provider, signer }}>
      {children}
    </ContractContext.Provider>
  );
};

const useContractContext = (): ContractContextType => {
  const context = useContext(ContractContext);
  if (context == undefined) {
    throw new Error("useTimeContext must be used within a TimeProvider");
  }
  return context;
};

export default ContractProvider;
export { useContractContext };
