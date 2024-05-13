import { useState } from "react";
import { StyledButtonSolidGreenTodoCard, StyledInputDateTodoCard, StyledInputTodoCard, StyledLeftText, StyledSelectTodoCard, StyledTextareaTodoCard, StyledTodoCard } from "../styled/TodoCard.styled";
import ArrowButton from "./ArrowButton";

export default function TodoCard({props}){
    const {title, description, date, status} = props;
    const [detail, setDetail] = useState(false);
    const handleClick = () => {
        if (detail) {
            setDetail(false);
        } else {
            setDetail(true);
        }
    };
    if (!detail){
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
                <ArrowButton detail={detail} handleClick={handleClick}/>
            </StyledTodoCard>
        );
    } else {
        return (
            <StyledTodoCard>
                <StyledLeftText>
                    <StyledInputTodoCard>
                        <input type="text" value={title} />
                    </StyledInputTodoCard>
                    <StyledTextareaTodoCard>
                        <textarea value={description} />
                    </StyledTextareaTodoCard>
                    <StyledInputDateTodoCard>
                        <input type="date" value={date} />
                    </StyledInputDateTodoCard>
                    <StyledSelectTodoCard>
                        <select defaultValue={status}>
                            <option value={status} selected disabled hidden>{status}</option>
                            <option>On List</option>
                            <option>In Progress</option>
                        </select>
                    </StyledSelectTodoCard>
                </StyledLeftText>
                <StyledButtonSolidGreenTodoCard>
                    <p>save</p>
                </StyledButtonSolidGreenTodoCard>
                <ArrowButton detail={detail} handleClick={handleClick} />
            </StyledTodoCard>
        )
    }
}