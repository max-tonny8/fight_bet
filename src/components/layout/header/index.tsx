import { Wrapper } from "./index.styled";
import Link from "next/link";
import HeaderBtn from "@/components/ui/headerBtn";
import { Icon } from "@/components/ui/icon";
import { HiChevronDown } from "react-icons/hi";

const Navbar = () => {
  return (
    <Wrapper>
      <Link href="">How does this work?</Link>
      <Link href="">How can I trust you?</Link>
      <HeaderBtn 
        avatar={<Icon name="Polygon" width={20} height={20} viewBox="0 0 20 20" />}
        title="Polygon"
        icon={<HiChevronDown size={12} />}
      />
      <HeaderBtn 
        title="0x345eder2..."
        icon={<HiChevronDown size={12} />}
      />
    </Wrapper>
  );
};

export default Navbar;
