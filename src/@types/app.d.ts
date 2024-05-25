interface AppContextType {
  isToggled: boolean;
  amount: number;
  isApprove: boolean;
  totalBetAmount1: number;
  totalBetAmount2: number;
  chainBalance: number;
  totalPotAmount1: number;
  totalPotAmount2: number;
  setConnect: (state: boolean) => void;
  setAmount: (state: number) => void;
  setToggled: (state: boolean) => void;
  handleApprove: () => void;
  handleBet: () => void;
}
interface HeaderBtnType {
  avatar?: React.ReactNode;
  title: string | boolean | undefined;
  icon?: React.ReactNode;
  onClick: () => void;
}

interface FightItemType {
  src: string;
  amount: number;
  gain: number;
  name: string;
  totalBetAmount: number;
}
