import { Wrapper } from "./index.styled";

const MainBtn = ({
  title,
  $width,
  onClick,
}: {
  title: string;
  $width: string;
  onClick: (data: any) => void;
}) => {
  return (
    <Wrapper $width={$width} id={title} onClick={onClick}>
      <p>{title}</p>
    </Wrapper>
  );
};

export default MainBtn;
