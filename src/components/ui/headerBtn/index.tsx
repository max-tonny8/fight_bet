import { Wrapper } from "./index.styled";

const HeaderBtn = ({ avatar, title, icon, onClick }: HeaderBtnType) => {
  return (
    <Wrapper>
      <div className="title" onClick={onClick}>
        {avatar!}
        <p>{title}</p>
      </div>
      {icon}
    </Wrapper>
  );
};

export default HeaderBtn;
