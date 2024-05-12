import { Link } from "react-router-dom";
import { StyledBody, StyledBoxMedium, StyledHeaderCenter, StyledInput, StyledLabelInput, StyledSubmitButton } from "../styled/global.styled";

export default function Login() {
    return (
        <StyledBody>
            <StyledHeaderCenter>
                <h2>LOLIS</h2>
            </StyledHeaderCenter>
            <StyledBoxMedium>
                <h4 style={{fontSize: 24}}>LOGIN</h4>
                <StyledLabelInput>
                    <p>Email</p>
                </StyledLabelInput>
                <StyledInput className="box">
                    <input type="text" />
                </StyledInput>
                <StyledLabelInput>
                    <p>Password</p>
                </StyledLabelInput>
                <StyledInput>
                    <input type="text" />
                </StyledInput>
                <StyledSubmitButton>
                    <input type="submit" value="LOGIN" />
                </StyledSubmitButton>
                <p>Don't have an account? <Link to="/signup" style={{color: "#1FD07D", fontWeight: "bold", cursor: "pointer"}}>SIGNUP</Link></p>
            </StyledBoxMedium>
        </StyledBody>
    );
};