import React from "react";
import FightItem from "@/components/ui/fightItem";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const GameItem = () => {
  const {
    totalPotAmount1,
    totalPotAmount2,
    totalBetAmount1,
    totalBetAmount2,
    amount1,
    amount2,
    chainBalance,
    isApprove1,
    isApprove2,
    gain1,
    gain2,
    setAmount1,
    setAmount2,
    handleApprove,
    handleBet,
  } = useAppContext();
  return (
    <div className="main">
      <FightItem
        src="https://lezetomedia.s3.us-east-2.amazonaws.com/wp-content/uploads/2020/05/09191713/Conor-McGregor-Net-Worth-scaled.jpg"
        name="Jack Paul"
        amount={amount1}
        isApprove={isApprove1}
        chainBalance={chainBalance}
        setAmount={setAmount1}
        totalBetAmount={totalBetAmount1}
        handleApprove={handleApprove}
        handleBet={handleBet}
        gain={gain1}
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
                <span className="state-bold">${totalPotAmount1}</span> vs{" "}
                <span className="state-bold">${totalPotAmount2}</span>
              </p>
            </div>
          </div>
          <p className="balance">
            Your USDC Balance:{" "}
            <span className="state-bold">{chainBalance}</span>
          </p>
          <Link href="">Contract Link</Link>
        </div>
      </div>
      <FightItem
        src="https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2022/05/michael-chandler-ufc-274-ceremonial-weigh-ins.jpg"
        name="Mike Tyson"
        amount={amount2}
        chainBalance={chainBalance}
        isApprove={isApprove2}
        setAmount={setAmount2}
        totalBetAmount={totalBetAmount2}
        handleApprove={handleApprove}
        handleBet={handleBet}
        gain={gain2}
      />
      <p className="share-text">
        Share the site with fight enthusiasts to increase the pot
      </p>
    </div>
  );
};

export default GameItem;
