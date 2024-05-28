import { Wrapper } from "./index.styled";
import Image from "next/image";
import InputBox from "../inputBox";
import MainBtn from "../mainBtn";
import { useAppContext } from "@/context/AppContext";

const FightItem = ({
  src,
  gain,
  name,
  totalBetAmount,
  amount,
  isApprove,
  chainBalance,
  setAmount,
  handleApprove,
  handleBet,
}: FightItemType) => {
  return (
    <Wrapper>
      <div className="game-control">
        <div className="fighter-info">
          <p className="fighter-name">{name}</p>
          <Image src={src} alt="No image..." width={220} height={180} />
        </div>
        <div className="setting">
          <InputBox
            amount={amount}
            setAmount={setAmount}
            chainBalance={chainBalance}
          />
          {isApprove ? (
            <MainBtn
              title="Approve USDC to place your bet"
              $width="290px"
              onClick={() => handleApprove(name)}
            />
          ) : (
            <MainBtn
              title={`Place Bet on ${name}`}
              $width="230px"
              onClick={() => handleBet(name)}
            />
          )}
        </div>
      </div>
      <div className="bonus">
        <p>
          Your total bet amount: <span>{`$${totalBetAmount}`}</span>
        </p>
        <p>
          Potential gains if you win: <span>{`$${gain}`}</span>
          {`[ check back later ]`}
        </p>
      </div>
    </Wrapper>
  );
};

export default FightItem;
