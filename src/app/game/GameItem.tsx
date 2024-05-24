import React from "react";
import FightItem from "@/components/ui/fightItem";
import Link from "next/link";

const GameItem = () => {
  return (
    <div className="main">
      <div className="game-condition">
        <h2>Fight Cash</h2>
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
          <p className="balance">
            Your USDC Balance: <span className="state-bold">11.31</span>
          </p>
        </div>
        <div className="vs-amount">
          <p>Total Pot Amount:</p>
          <p>
            <span className="state-bold">$5000</span> vs{" "}
            <span className="state-bold">$3500</span>
          </p>
        </div>
        <Link href="">Contract Link</Link>
      </div>
      <hr />
      <div className="game-member">
        <FightItem
          src="/images/member1.png"
          name="Jack Paul"
          amount={0}
          gain={0}
        />
        <FightItem
          src="/images/member2.png"
          name="Mike Tyson"
          amount={100}
          gain={100}
        />
      </div>
      <p className="share-text">
        Share the site with fight enthusiasts to increase the pot
      </p>
    </div>
  );
};

export default GameItem;
