import { StyledBodyLightGreen, StyledBoxFourtyPercent, StyledBoxLarge, StyledHeaderSpaceBetween, StyledImageLarge, StyledSolidLittleButtonGreen } from "../styled/global.styled";
import hero from '../images/hero.png';
import TodoCard from "../components/TodoCard";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


export default function Dashboard(){
    let navigate = useNavigate();
    const [newCard, setNewCard] = useState();
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
            const req = await fetch('http://localhost:8154/get/todo_list', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });
            const response = await req.json();
            if (response.status === 'ok'){
                setData(response.response)
            }
        } catch(err) {
            console.log(err);
        }
    }
    const addTodoList = async (data) => {
        console.log(data);
        try {
            const req = await fetch('http://localhost:8154/add/todo_list', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });
            const response = await req.json();
            if (response.status === "ok"){
                window.location.reload();
            }
        } catch (err) {
            console.log(err)
        }
    }
    const logout = async () => {
        try {
            await fetch('http://localhost:8154/logout', {
                method: 'GET',
                credentials: 'include',
            })
            navigate('/login')
        } catch (err){
            console.log(err)
        }
    }
    const deleteTodoList = async (id) => {
        try {
            const req = await fetch('http://localhost:8154/delete/todo_list', {
                method: "DELETE",
                mode: 'cors',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({id: id})
            });
            const response = await req.json();
            if (response.status === "ok"){
                window.location.reload();
            }
        } catch (error){
            console.log(error)
        }
    }
    const handleCreateNewCard = () => {
        setNewCard({"title": "", "description": "", "date": "", "status": ""})
    }
    const handleNewCard = (data) => {
        addTodoList(data);
    };
    const handleLogout = () => {
        logout();
    }
    useEffect(() => {
        getData();
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
                    <p>jdfjkhjkeahf</p>
                    <h4>IT'S YOUR <br/> LIST OF THE DAYS</h4>
                    <p onClick={handleLogout} style={{fontWeight: "bold"}}>Log Out</p>
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