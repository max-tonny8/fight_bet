import React from "react";
import FightItem from "@/components/ui/fightItem";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const GameItem = () => {
  const { totalBetAmount1, totalBetAmount2 } = useAppContext();

  return (
    <div className="main">
      <FightItem
        src="/images/member1.png"
        name="Jack Paul"
        amount={0}
        gain={0}
        totalBetAmount={totalBetAmount1}
      />
      <div className="game-condition">
        <h2>VS</h2>
        <div className="account-state">
          <div className="state">
            <p>
              Account status: <span className="led"></span>
              <span className="state-bold">Connected</span>
            </p>
            <div className="chain-part">
              <p className="desc">{`[ Switch To Polygon Network  if you haven't ]`}</p>
              <p>
                Chain: <span className="state-bold">{`Polygon(137)`}</span>
              </p>
            </div>
            <div className="vs-amount">
              <p>Total Pot Amount:</p>
              <p>
                <span className="state-bold">${totalBetAmount1}</span> vs{" "}
                <span className="state-bold">${totalBetAmount2}</span>
              </p>
            </div>
          </div>
          <p className="balance">
            Your USDC Balance: <span className="state-bold">11.31</span>
          </p>
          <Link href="">Contract Link</Link>
        </div>
      </div>
      <FightItem
        src="/images/member2.png"
        name="Mike Tyson"
        amount={100}
        gain={100}
        totalBetAmount={totalBetAmount1}
      />
      <p className="share-text">
        Share the site with fight enthusiasts to increase the pot
      </p>
    </div>
  );
};

export default GameItem;
