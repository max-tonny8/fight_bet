import { useAppContext } from "@/context/AppContext";
import { Wrapper } from "./index.styled";

const InputBtn = () => {
  const { amount, setAmount } = useAppContext();

  const handleInputChange = (event: any) => {
    setAmount(event.target.value);
  };

  return (
    <Wrapper
      type="number"
      placeholder="0"
      value={amount}
      onClick={handleInputChange}
    />
  );
};

export default InputBtn;
