import { Wrapper } from "./index.styled";

const HeaderBtn = ({avatar, title, icon}: HeaderBtnType) => {
    return <Wrapper>
        <div className="title">
            {avatar!}
            <p>{title}</p>
        </div>
        {icon}
    </Wrapper>
}

export default HeaderBtn;