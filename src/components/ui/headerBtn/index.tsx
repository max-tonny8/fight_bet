import { Wrapper } from "./index.styled";

const HeaderBtn = ({ avatar, title, icon, onClick }: HeaderBtnType) => {
  return (
    <Wrapper onClick={onClick}>
      <div className="title">
        {avatar!}
        <p>{title}</p>
      </div>
      {icon}
    </Wrapper>
  );
};

export default HeaderBtn;
