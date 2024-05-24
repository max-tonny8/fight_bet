interface HeaderBtnType {
  avatar?: React.ReactNode;
  title: string;
  icon: React.ReactNode;
}

interface FightItemType {
  src: string;
  amount: number;
  gain: number;
  name: string;
}

interface AppContextType {
  isToggled: boolean;
  setToggled: (state: boolean) => void;
}
