import React from "react";
import { Wrapper } from "./index.styled";
import { HiX, HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import HeaderBtn from "../headerBtn";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ToggleNav = () => {
  const { isToggled, setToggled } = useAppContext();

  return (
    <Wrapper>
      <div className="close-icon" onClick={() => setToggled(!isToggled)}>
        <HiX size={30} />
      </div>
      <h1>Fight Cash</h1>
      <div className="link-quest">
        <Link href="">How does this work?</Link>
        <Link href="">How can I trust you?</Link>
      </div>
      <div className="btn-group">
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <HeaderBtn
                        title="Connect Wallet"
                        onClick={openConnectModal}
                      />
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <HeaderBtn
                        title="Wrong network"
                        onClick={openChainModal}
                      />
                    );
                  }

                  return (
                    <div style={{ display: "flex", gap: 12 }}>
                      <HeaderBtn
                        avatar={
                          chain.iconUrl && (
                            <Image
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              width={24}
                              height={24}
                            />
                          )
                        }
                        title={chain.hasIcon && chain.name}
                        onClick={openChainModal}
                      />
                      <HeaderBtn
                        title={`${account.displayName}${
                          account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""
                        }`}
                        onClick={openAccountModal}
                      />
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </Wrapper>
  );
};

export default ToggleNav;
