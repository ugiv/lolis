import { StyledButtonSolidGreenTodoCard, StyledLeftText, StyledTodoCard } from "../styled/TodoCard.styled";

export default function TodoCard({props}){
    const {title, description, date, status} = props;
    return (
        <StyledTodoCard>
            <StyledLeftText>
                <h5>{title}</h5>
                <p>{description}</p>
                <p>{date}</p>
            </StyledLeftText>
            <StyledButtonSolidGreenTodoCard>
                <p>{status}</p>
            </StyledButtonSolidGreenTodoCard>
        </StyledTodoCard>
    );
}