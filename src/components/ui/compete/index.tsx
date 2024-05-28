import React, { useState, useEffect } from "react";
import { Wrapper } from "./index.styled";
import FightItem from "@/components/ui/fightItem";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const CompeteItem = (data: CompeteList) => {
  const memberList: any = Object.values(data)[0];

  const [gain1, setGain1] = useState<number>(0);
  const [gain2, setGain2] = useState<number>(0);
  const [totalPotAmount1, setTotalPotAmount1] = useState<number>(0);
  const [totalPotAmount2, setTotalPotAmount2] = useState<number>(0);
  const [totalBetAmount1, setTotalBetAmount1] = useState<number>(0);
  const [totalBetAmount2, setTotalBetAmount2] = useState<number>(0);

  const { chainBalance, gameContract, usdcContract, wallet, isConnect } =
    useAppContext();

  useEffect(() => {
    getInitialData();
  }, [isConnect]);

  useEffect(() => {
    if (gameContract && usdcContract) {
      getTotalBetData();
      getGain();
    }
  }, [gameContract, usdcContract, totalBetAmount1, totalBetAmount2]);

  /**
   * @function getGain
   * @param address
   * @param fighter
   * @returns none
   */
  const getGain = async () => {
    if (!gameContract) return;

    const gainResult1 = await gameContract.userBets(
      wallet.address,
      memberList[0].num
    );
    setGain1(gainResult1.toNumber());
    const gainResult2 = await gameContract.userBets(
      wallet.address,
      memberList[1].num
    );
    setGain2(gainResult2.toNumber());
  };

  /**
   * @function getTotalBetData
   * @param address: user
   * @param fighter
   * @returns none
   */
  const getTotalBetData = async () => {
    if (!gameContract) return;

    const betResult1 = await gameContract.userBets(
      wallet.address,
      memberList[0].num
    );
    setTotalBetAmount1(betResult1.toNumber());
    const betResult2 = await gameContract.userBets(
      wallet.address,
      memberList[1].num
    );
    setTotalBetAmount2(betResult2.toNumber());
  };

  /**
   * @function getInitialData
   * @param fighter
   * @returns none
   */
  const getInitialData = async () => {
    if (!gameContract) return;

    const amountResult1 = await gameContract.totalBetAmount(memberList[0].num);
    setTotalPotAmount1(amountResult1.toNumber());
    const amountResult2 = await gameContract.totalBetAmount(memberList[1].num);
    setTotalPotAmount2(amountResult2.toNumber());
  };

  return (
    <Wrapper className="fighter-part">
      <FightItem
        src={memberList[0].src}
        name={memberList[0].name}
        num={1}
        chainBalance={chainBalance}
        totalBetAmount={totalBetAmount1}
        gain={gain1}
        getInitialData={getInitialData}
        getTotalBetData={getTotalBetData}
        getGain={getGain}
      />
      <div className="game-condition">
        <h2>VS</h2>
        <div className="account-state">
          <div className="vs-amount">
            <p>Total Pot Amount:</p>
            <p>
              <span className="state-bold">${totalPotAmount1}</span> vs{" "}
              <span className="state-bold">${totalPotAmount2}</span>
            </p>
          </div>
          <Link href="">Contract Link</Link>
        </div>
      </div>
      <FightItem
        src={memberList[1].src}
        name={memberList[1].name}
        num={2}
        chainBalance={chainBalance}
        totalBetAmount={totalBetAmount2}
        gain={gain2}
        getInitialData={getInitialData}
        getTotalBetData={getTotalBetData}
        getGain={getGain}
      />
    </Wrapper>
  );
};

export default CompeteItem;
