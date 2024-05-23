import { Wrapper } from "./index.styled";
import Image from "next/image";
import InputBox from "../InputBox";
import MainBtn from "../mainBtn";

const FightItem = ({ src, amount, gain, name }: FightItemType) => {
  return (
    <Wrapper>
      <div className="game-control">
        <Image src={src} alt="No image..." width={150} height={150} />
        <div className="setting">
          <InputBox />
          <MainBtn 
            title="Approve USDC to place your bet"
            $width="80%"
          />
          <MainBtn 
            title={`Place Bet on ${name}`}
            $width="60%"
          />
        </div>
      </div>
      <div className="bonus">
        <p>Your total bet amount: <span>{`$${amount}`}</span></p>
        <p>Potential gains if you win: <span>{`$${gain}`}</span>{`[ check back later ]`}</p>
      </div>
    </Wrapper>
  );
};

export default FightItem;
