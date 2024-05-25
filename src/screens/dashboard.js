import { StyledBodyLightGreen, StyledBoxFourtyPercent, StyledBoxLarge, StyledHeaderSpaceBetween, StyledImageLarge, StyledParagraphButton, StyledSolidLittleButtonGreen } from "../styled/global.styled";
import hero from '../images/hero.png';
import TodoCard from "../components/TodoCard";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
// this is async function that will fetch data and other async function job.
import { 
        getData, 
        addTodoList, 
        logout, deleteTodoList, 
        updateStatus,
        getUserName
       } from "../asyncFunction/asyncFunction";

export default function Dashboard(){
    let navigate = useNavigate();
    const [newCard, setNewCard] = useState();
    const [data, setData] = useState([]);
    const [list, setList] = useState(true);
    const [name, setName] = useState('');
    const handleData = (data) => {
        setData(data)
    }
    const handleUserName = (name) => {
        setName(name);
    }
    const handleCreateNewCard = () => {
        setNewCard({
            "title": "", 
            "description": "", 
            "date": "", 
            "status": ""})
    }
    const handleNewCard = (data) => {
        addTodoList(data);
    };
    const handleUpdateTodoListStatus = (data) => {
        updateStatus(data);
        window.location.reload();
    }
    const handleLogout = () => {
        logout(navigate);
    }
    const handleCancel = () => {
        setNewCard();
    }
    useEffect(() => {
        const todoList = document.getElementById('ListTodo');
        const history = document.getElementById('HistoryTodo');
        if (list) {
            history.style.borderBottom = 'none';
            history.style.fontWeight = 'normal';
            todoList.style.borderBottom = '2px solid black';
            todoList.style.fontWeight = 'bold';
        } else {
            todoList.style.borderBottom = 'none';
            todoList.style.fontWeight = 'normal';
            history.style.borderBottom = '2px solid black';
            history.style.fontWeight = 'bold';
        }
        getData(handleData);
        getUserName(handleUserName);
        console.log(name);
    }, [list, name])
    return (
        <StyledBodyLightGreen>
            <StyledHeaderSpaceBetween>
                <h2>LOLIS</h2>
                <div style={{width: "auto", margin: "0 10px", display: "flex", flexDirection: "rows", justifyContent: "space-between", alignItems: "center"}}>
                    <StyledParagraphButton 
                                id="ListTodo" 
                                onClick={() => setList(true)}
                    >List Todo
                    </StyledParagraphButton>
                    <StyledParagraphButton 
                                id="HistoryTodo"
                                onClick={() => setList(false)}
                    >History
                    </StyledParagraphButton>
                    <StyledSolidLittleButtonGreen>
                        <p onClick={handleCreateNewCard}>Create New</p>
                    </StyledSolidLittleButtonGreen>
                </div>
            </StyledHeaderSpaceBetween>
            <StyledBoxLarge>
                <StyledBoxFourtyPercent>
                    <StyledImageLarge>
                        <img src={hero} alt="hero"/>
                    </StyledImageLarge>
                    <p style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{name}</p>
                    <h4>IT'S YOUR <br/> LIST OF THE DAYS</h4>
                    <p 
                        onClick={handleLogout} 
                        style={{fontWeight: "bold", cursor: "pointer"}}
                    >
                        Log Out
                    </p>
                </StyledBoxFourtyPercent>
                <StyledBoxFourtyPercent>
                    {
                        newCard && list && <TodoCard 
                                    props={newCard} 
                                    handleNewCard={handleNewCard} 
                                    defaultStatus={'new'}
                                    handleCancel={handleCancel}
                                    />
                    }
                    {
                           list ?
                           data.map(card => {
                               return card.status !== 'Done' ?
                                       <TodoCard 
                                               props={card} 
                                               handleDelete={deleteTodoList} 
                                               handleUpdateTodoListStatus={handleUpdateTodoListStatus}
                                               defaultStatus={'listed'}
                                           />
                                : <></>

                            })
                            :
                            data.map(card => {
                                return card.status === 'Done' ?
                                        <TodoCard 
                                        props={card} 
                                        handleDelete={deleteTodoList}
                                        handleUpdateTodoListStatus={handleUpdateTodoListStatus}
                                        defaultStatus={'listed'}
                                    />
                                : <></>
                            })
                    }
                </StyledBoxFourtyPercent>
            </StyledBoxLarge>
        </StyledBodyLightGreen>
    );
}