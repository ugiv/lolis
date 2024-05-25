import { useEffect, useState } from "react";
import { 
    StyledButtonSolidGreenTodoCard, StyledButtonSolidGreyTodoCard, StyledInputDateTodoCard, 
    StyledInputTodoCard, StyledLeftText, StyledSelectTodoCard, 
    StyledTextareaTodoCard, StyledTodoCard 
} from "../styled/TodoCard.styled";
import ArrowButton from "./ArrowButton";
import { updateDate, updateDescription, updateTitle } from "../asyncFunction/asyncFunction";

export default function TodoCard(
    {
        props, handleNewCard, 
        defaultStatus, handleDelete,
        handleCancel, handleUpdateTodoListStatus
    }
){
    const {id, title, description, date, status} = props;
    const [detail, setDetail] = useState('listed');
    const [open, setOpen] = useState(false);
    const [listedTitle, setListedTitle] = useState(title);
    const [listedDescription, setListedDescription] = useState(description);
    const [listedDate, setListedDate] = useState(date);
    const [listedStatus, setListedStatus] = useState(status);
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
    }, [defaultStatus]);

    const handleUpdateTitle = (newTitle) => {
        setListedTitle(newTitle);
        updateTitle({title: newTitle, id: id});
    }
    const handleUpdateDescription = (newDescription) => {
        setListedDescription(newDescription);
        updateDescription({description: newDescription, id: id});
    }
    const handleUpdateDate = (data) => {
        setListedDate(data);
        updateDate({date: data, id: id});
    }
    const handleUpdateStatus = (status) => {
        setListedStatus(status)
        handleUpdateTodoListStatus({status: status, id: id});
    }
    const handleSubmit = () => {
        const newData = {
            "title": newTitle,
            "description": newDescription,
            "date": newDate,
            "status": newStatus
        }
        if (newTitle && newDescription && newDate && newStatus) {
            handleNewCard(newData);
        } else if (newTitle && newDescription && newDate){
            handleNewCard({
                "title": newTitle,
                "description": newDescription,
                "date": newDate,
                "status": "On List"
            });
        } else if (newDescription && newDate) {
            alert("Title cannot empty.");
        } else if (newTitle && newDate){
            alert("Description cannot empty.")
        } 
    }
    const handleDeleteTodoList = () => {
        handleDelete(id);
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
            if (status === "Done"){
                return (
                    <StyledTodoCard>
                        <StyledLeftText>
                            <StyledInputTodoCard>
                                <input type="text" 
                                    value={title} 
                                    // onChange={(e) => handleUpdateTitle(e.target.value)}
                                    placeholder="What is important thing should you remember.."/>
                            </StyledInputTodoCard>
                            <StyledTextareaTodoCard>
                                <textarea 
                                    value={description} 
                                    // onChange={(e) => handleUpdateDescription(e.target.value)}
                                    placeholder="Why that is important for you"/>
                            </StyledTextareaTodoCard>
                            <StyledInputDateTodoCard>
                                <p>{date}</p>
                            </StyledInputDateTodoCard>
                            <StyledSelectTodoCard>
                                <p>{status}</p>
                            </StyledSelectTodoCard>
                        </StyledLeftText>
                        <StyledButtonSolidGreyTodoCard>
                            <p onClick={handleDeleteTodoList}>Delete</p>
                        </StyledButtonSolidGreyTodoCard>
                        <StyledButtonSolidGreenTodoCard>
                            <p onClick={() => handleUpdateStatus("In Progress")}>Back</p>
                        </StyledButtonSolidGreenTodoCard>
                        <ArrowButton detail={open} handleClick={handleClick} />
                    </StyledTodoCard>
                );
            } else {
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
                                <select value={listedStatus} onChange={(e) => handleUpdateStatus(e.target.value)}>
                                    <option 
                                            selected 
                                            disabled 
                                            hidden
                                    >{listedStatus}</option>
                                    <option value="On List">On List</option>
                                    <option value="In Progress">In Progress</option>
                                </select>
                            </StyledSelectTodoCard>
                        </StyledLeftText>
                        <StyledButtonSolidGreyTodoCard>
                            <p onClick={handleDeleteTodoList}>Delete</p>
                        </StyledButtonSolidGreyTodoCard>
                        <StyledButtonSolidGreenTodoCard>
                            <p onClick={() => handleUpdateStatus("Done")}>Done</p>
                        </StyledButtonSolidGreenTodoCard>
                        <ArrowButton detail={open} handleClick={handleClick} />
                    </StyledTodoCard>
                ) 
            }
        } else {
            return (
                <StyledTodoCard>
                    <StyledLeftText>
                        <h5>{listedTitle}</h5>
                        <p>{listedDescription}</p>
                        <p>{listedDate}</p>
                    </StyledLeftText>
                    <StyledButtonSolidGreenTodoCard>
                        <p>{listedStatus}</p>
                    </StyledButtonSolidGreenTodoCard>
                    <ArrowButton 
                            detail={open} 
                            handleClick={handleClick}/>
                </StyledTodoCard>
            );
        }
    }
}