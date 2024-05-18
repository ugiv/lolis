import { StyledBodyLightGreen, StyledBoxFourtyPercent, StyledBoxLarge, StyledHeaderSpaceBetween, StyledImageLarge, StyledSolidLittleButtonGreen } from "../styled/global.styled";
import hero from '../images/hero.png';
import TodoCard from "../components/TodoCard";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
// this is async function that will fetch data and other async function job.
import { 
        getData, 
        addTodoList, 
        logout, deleteTodoList 
       } from "../asyncFunction/asyncFunction";

export default function Dashboard(){
    let navigate = useNavigate();
    const [newCard, setNewCard] = useState();
    const [data, setData] = useState([]);
    const handleData = (data) => {
        setData(data)
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
    const handleLogout = () => {
        logout(navigate);
    }
    useEffect(() => {
        getData(handleData);
    }, [])
    return (
        <StyledBodyLightGreen>
            <StyledHeaderSpaceBetween>
                <h2>LOLIS</h2>
                <div style={{width: 300, display: "flex", flexDirection: "rows", justifyContent: "space-between", alignItems: "center"}}>
                    <p>List Todo</p>
                    <p>History</p>
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
                    <p>Your Name</p>
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
                        newCard && <TodoCard 
                                    props={newCard} 
                                    handleNewCard={handleNewCard} 
                                    defaultStatus={true}
                                    />
                                }
                    {
                        data.map(card => {
                            return (<TodoCard 
                                    props={card} 
                                    handleDelete={deleteTodoList} 
                                />
                            )
                        })
                    }
                </StyledBoxFourtyPercent>
            </StyledBoxLarge>
        </StyledBodyLightGreen>
    );
}