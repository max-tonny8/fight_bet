import { Wrapper } from "./index.styled";

const MainBtn = ({ title, $width }: { title: string; $width: string }) => {
  return (
    <Wrapper $width={$width}>
      <p>{title}</p>
    </Wrapper>
  );
};

export default MainBtn;
