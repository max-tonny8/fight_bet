import React from "react";
import FightItem from "@/components/ui/fightItem";

const GameItem = () => {
  return (
    <div className="main">
      <div className="state"></div>
      <div className="line"></div>
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
      <p className="share-text">Share the site with fight enthusiasts to increase the pot</p>
    </div>
  );
};

export default GameItem;