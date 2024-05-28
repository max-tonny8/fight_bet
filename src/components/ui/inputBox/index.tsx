import { useAppContext } from "@/context/AppContext";
import { Wrapper } from "./index.styled";

const InputBtn = ({
  amount,
  chainBalance,
  setAmount,
}: {
  amount: number | undefined;
  chainBalance: number;
  setAmount: (state: number) => void;
}) => {
  const handleInputChange = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <Wrapper
      type="number"
      placeholder="0"
      min="0"
      max={chainBalance}
      value={amount}
      onChange={handleInputChange}
    />
  );
};

export default InputBtn;
