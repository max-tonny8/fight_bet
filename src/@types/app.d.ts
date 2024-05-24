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
}

interface AppContextType {
  isToggled: boolean;
  setToggled: (state: boolean) => void;
}
