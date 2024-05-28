interface AppContextType {
  isToggled: boolean;
<<<<<<< HEAD
  amount1: number | undefined;
  amount2: number | undefined;
  isApprove1: boolean;
  isApprove2: boolean;
  gain1: number;
  gain2: number;
=======
  amount1: number;
  amount2: number;
  isApprove: boolean;
>>>>>>> 4ae561449548d984e31e9680af9a960e75dbe48e
  totalBetAmount1: number;
  totalBetAmount2: number;
  chainBalance: number;
  totalPotAmount1: number;
  totalPotAmount2: number;
  setConnect: (state: boolean) => void;
  setAmount1: (state: number) => void;
  setAmount2: (state: number) => void;
  setToggled: (state: boolean) => void;
  handleApprove: (state: string) => void;
  handleBet: (state: string) => void;
}
interface HeaderBtnType {
  avatar?: React.ReactNode;
  title: string | boolean | undefined;
  icon?: React.ReactNode;
  onClick: () => void;
}

interface FightItemType {
  src: string;
  amount: number | undefined;
  gain: number;
  name: string;
  totalBetAmount: number;
  amount: number;
  isApprove: boolean;
  chainBalance: number;
  setAmount: (state: number) => void;
  handleApprove: (state: string) => void;
  handleBet: (state: string) => void;
}
