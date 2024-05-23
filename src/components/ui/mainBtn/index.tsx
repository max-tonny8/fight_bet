import { Wrapper } from "./index.styled";

const MainBtn = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <p>{title}</p>
    </Wrapper>
  );
};

export default MainBtn;
