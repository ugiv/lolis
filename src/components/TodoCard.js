import { useEffect, useState } from "react";
import { 
    StyledButtonSolidGreenTodoCard, StyledButtonSolidGreyTodoCard, StyledInputDateTodoCard, 
    StyledInputTodoCard, StyledLeftText, StyledSelectTodoCard, 
    StyledTextareaTodoCard, StyledTodoCard 
} from "../styled/TodoCard.styled";
import ArrowButton from "./ArrowButton";
import { updateStatus } from "../asyncFunction/asyncFunction";

export default function TodoCard({props, handleNewCard, defaultStatus, handleDelete, handleCancel}){
    const {id, title, description, date, status} = props;
    const [detail, setDetail] = useState('listed');
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newStatus, setNewStatus] = useState("");
    useEffect(() => {
        if (defaultStatus === 'listed'){
            setDetail('listed');
        } else {
            setDetail('new')
        }
    }, [defaultStatus])
    const handleSubmit = () => {
        const newData = {
            "title": newTitle,
            "description": newDescription,
            "date": newDate,
            "status": newStatus
        }
        handleNewCard(newData);
    }
    const handleDeleteTodoList = () => {
        handleDelete(id);
    }
    const handleUpdateStatus = (data) => {
        updateStatus(data);
    }
    const handleClick = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true);
        }
    };
    if (detail === 'new'){
        return (
            <StyledTodoCard>
                <StyledLeftText>
                    <StyledInputTodoCard>
                        <input type="text" 
                            value={newTitle ? newTitle : title} 
                            onChange={(e) => setNewTitle(e.target.value)} 
                            placeholder="What is important thing should you remember.."/>
                    </StyledInputTodoCard>
                    <StyledTextareaTodoCard>
                        <textarea 
                            value={newDescription ? newDescription : description} 
                            onChange={(e) => setNewDescription(e.target.value)} 
                            placeholder="Why that is important for you"/>
                    </StyledTextareaTodoCard>
                    <StyledInputDateTodoCard>
                        <input type="date" 
                            value={newDate ? newDate : date} 
                            onChange={(e) => setNewDate(e.target.value)}/>
                    </StyledInputDateTodoCard>
                    <StyledSelectTodoCard>
                        <select onChange={(e) => setNewStatus(e.target.value)}>
                            <option 
                                    value={'Status'} 
                                    selected 
                                    disabled 
                                    hidden
                            >Status</option>
                            <option value="On List">On List</option>
                            <option value="In Progress">In Progress</option>
                        </select>
                    </StyledSelectTodoCard>
                </StyledLeftText>
                <StyledButtonSolidGreyTodoCard>
                    <p onClick={handleCancel}>Cancel</p>
                </StyledButtonSolidGreyTodoCard>
                <StyledButtonSolidGreenTodoCard>
                    <p onClick={handleSubmit}>Save</p>
                </StyledButtonSolidGreenTodoCard>
            </StyledTodoCard>
        )
    } else if (detail === 'listed') {
        if (open) {
            return (
                <StyledTodoCard>
                    <StyledLeftText>
                        <StyledInputTodoCard>
                            <input type="text" 
                                value={newTitle ? newTitle : title} 
                                onChange={(e) => setNewTitle(e.target.value)} 
                                placeholder="What is important thing should you remember.."/>
                        </StyledInputTodoCard>
                        <StyledTextareaTodoCard>
                            <textarea 
                                value={newDescription ? newDescription : description} 
                                onChange={(e) => setNewDescription(e.target.value)} 
                                placeholder="Why that is important for you"/>
                        </StyledTextareaTodoCard>
                        <StyledInputDateTodoCard>
                            <input type="date" 
                                value={newDate ? newDate : date} 
                                onChange={(e) => setNewDate(e.target.value)}/>
                        </StyledInputDateTodoCard>
                        <StyledSelectTodoCard>
                            <select onChange={(e) => setNewStatus(e.target.value)}>
                                <option 
                                        value={newStatus ? newStatus : status} 
                                        selected 
                                        disabled 
                                        hidden
                                >{newStatus ? newStatus : status}</option>
                                <option value="On List">On List</option>
                                <option value="In Progress">In Progress</option>
                            </select>
                        </StyledSelectTodoCard>
                    </StyledLeftText>
                    <StyledButtonSolidGreyTodoCard>
                        <p onClick={handleDeleteTodoList}>Delete</p>
                    </StyledButtonSolidGreyTodoCard>
                    <StyledButtonSolidGreenTodoCard>
                        <p onClick={() => handleUpdateStatus({status: "done"})}>Done</p>
                    </StyledButtonSolidGreenTodoCard>
                    <ArrowButton detail={open} handleClick={handleClick} />
                </StyledTodoCard>
            ) 
        } else {
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
                    <ArrowButton 
                            detail={open} 
                            handleClick={handleClick}/>
                </StyledTodoCard>
            );
        }

        }
}