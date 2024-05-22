import { useEffect, useState } from "react";
import { 
    StyledButtonSolidGreenTodoCard, StyledButtonSolidGreyTodoCard, StyledInputDateTodoCard, 
    StyledInputTodoCard, StyledLeftText, StyledSelectTodoCard, 
    StyledTextareaTodoCard, StyledTodoCard 
} from "../styled/TodoCard.styled";
import ArrowButton from "./ArrowButton";
import { updateDate, updateDescription, updateStatus, updateTitle } from "../asyncFunction/asyncFunction";

export default function TodoCard({props, handleNewCard, defaultStatus, handleDelete, handleCancel}){
    const {id, title, description, date, status} = props;
    const [detail, setDetail] = useState('listed');
    const [open, setOpen] = useState(false);
    const [listedTitle, setListedTitle] = useState('');
    const [listedDescription, setListedDescription] = useState('');
    const [listedDate, setListedDate] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newStatus, setNewStatus] = useState("");
    useEffect(() => {
        setListedTitle(title);
        setListedDescription(description);
        setListedDate(date);
        if (defaultStatus === 'listed'){
            setDetail('listed');
        } else {
            setDetail('new')
        }
    }, [defaultStatus, title, description, date]);

    const handleUpdateTitle = (newTitle) => {
        setListedTitle(newTitle);
        updateTitle({title: newTitle});
    }
    const handleUpdateDescription = (newDescription) => {
        setListedDescription(newDescription);
        updateDescription({description: newDescription});
    }
    const handleUpdateDate = (data) => {
        setListedDate(data);
        updateDate({date: data});
    }
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
        window.location.reload();
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
                                value={listedTitle} 
                                onChange={(e) => handleUpdateTitle(e.target.value)} 
                                placeholder="What is important thing should you remember.."/>
                        </StyledInputTodoCard>
                        <StyledTextareaTodoCard>
                            <textarea 
                                value={listedDescription} 
                                onChange={(e) => handleUpdateDescription(e.target.value)} 
                                placeholder="Why that is important for you"/>
                        </StyledTextareaTodoCard>
                        <StyledInputDateTodoCard>
                            <input type="date" 
                                value={listedDate} 
                                onChange={(e) => handleUpdateDate(e.target.value)}/>
                        </StyledInputDateTodoCard>
                        <StyledSelectTodoCard>
                            <select value={status} onChange={(e) => handleUpdateStatus({status: e.target.value})}>
                                <option 
                                        selected 
                                        disabled 
                                        hidden
                                >{status}</option>
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
                        <h5>{listedTitle}</h5>
                        <p>{listedDescription}</p>
                        <p>{listedDate}</p>
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