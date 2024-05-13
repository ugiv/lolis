import { StyledBodyLightGreen, StyledBoxFourtyPercent, StyledBoxLarge, StyledHeaderSpaceBetween, StyledImageLarge, StyledSolidLittleButtonGreen } from "../styled/global.styled";
import hero from '../images/hero.png';
import TodoCard from "../components/TodoCard";
import { userData } from "../data/dummy";

const data = userData.todo;

export default function Dashboard(){
    console.log(data[0]);
    return (
        <StyledBodyLightGreen>
            <StyledHeaderSpaceBetween>
                <h2>LOLIS</h2>
                <div style={{width: 300, display: "flex", flexDirection: "rows", justifyContent: "space-between", alignItems: "center"}}>
                    <p>List Todo</p>
                    <p>History</p>
                    <StyledSolidLittleButtonGreen>
                        <p>Create New</p>
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
                </StyledBoxFourtyPercent>
                <StyledBoxFourtyPercent>
                    {
                        data.map(card => {
                            return <TodoCard props={card} />
                        })
                    }
                </StyledBoxFourtyPercent>
            </StyledBoxLarge>
        </StyledBodyLightGreen>
    );
}