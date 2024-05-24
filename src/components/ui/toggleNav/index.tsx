import React from "react";
import { Wrapper } from "./index.styled";
import { HiX, HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import HeaderBtn from "../headerBtn";
import { Icon } from "../icon";
import { useAppContext } from "@/context/AppContext";

const ToggleNav = () => {
  const { isToggled, setToggled } = useAppContext();

  return (
    <Wrapper>
      <div className="close-icon">
        <HiX size={30} />
      </div>
      <h1>Fight Cash</h1>
      <div className="link-quest">
        <Link href="">How does this work?</Link>
        <Link href="">How can I trust you?</Link>
      </div>
      <div className="btn-group">
        <HeaderBtn
          avatar={
            <Icon name="Polygon" width={20} height={20} viewBox="0 0 20 20" />
          }
          title="Polygon"
          icon={<HiChevronDown size={12} />}
          onClick={() => setToggled(!isToggled)}
        />
        <HeaderBtn
          title="0x345eder2..."
          icon={<HiChevronDown size={12} />}
          onClick={() => setToggled(!isToggled)}
        />
      </div>
    </Wrapper>
  );
};

export default ToggleNav;
