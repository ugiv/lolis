import { StyledBody, StyledBoxMedium, StyledHeaderCenter, StyledInput, StyledLabelInput, StyledSubmitButton } from "../styled/global.styled";
import { Link } from "react-router-dom";

export default function Signup(){
    return (
        <StyledBody>
            <StyledHeaderCenter>
                <h2>LOLIS</h2>
            </StyledHeaderCenter>
            <StyledBoxMedium>
                <h4 style={{fontSize: 20}}>SIGNUP</h4>
                <StyledLabelInput>
                    <p>Username</p>
                </StyledLabelInput>
                <StyledInput>
                    <input type="text" />
                </StyledInput>
                <StyledLabelInput>
                    <p>Email</p>
                </StyledLabelInput>
                <StyledInput>
                    <input type="email" />
                </StyledInput>
                <StyledLabelInput>
                    <p>Password</p>
                </StyledLabelInput>
                <StyledInput>
                    <input type="password" />
                </StyledInput>
                <StyledSubmitButton>
                    <input type="submit" value="SIGNUP" />
                </StyledSubmitButton>
                <p>Aready have an account? <Link to="/login" style={{color: "#1FD07D", fontWeight: "bold", cursor: "pointer"}}>LOGIN</Link></p>
            </StyledBoxMedium>
        </StyledBody>
    );
}