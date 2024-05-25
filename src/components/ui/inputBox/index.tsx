import { useAppContext } from "@/context/AppContext";
import { Wrapper } from "./index.styled";

const InputBtn = ({
  amount,
  setAmount,
}: {
  amount: number;
  setAmount: (state: number) => void;
}) => {
  const handleInputChange = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <Wrapper
      type="number"
      placeholder="0"
      value={amount}
      onChange={handleInputChange}
    />
  );
};

export default InputBtn;
