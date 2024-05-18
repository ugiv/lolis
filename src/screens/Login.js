import { Link, useNavigate } from "react-router-dom";
import { 
        StyledBody, StyledBoxMedium, 
        StyledHeaderCenter, StyledInput, 
        StyledLabelInput, StyledSubmitButton 
} from "../styled/global.styled";
import { useState } from "react";
import { loginAsync } from "../asyncFunction/asyncFunction";


export default function Login() {
    let navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleLogin = () => {
        const userData = {
            email: email,
            password: password
        }
        loginAsync(userData, navigate);
    }
    return (
        <StyledBody>
            <StyledHeaderCenter>
                <h2>LOLIS</h2>
            </StyledHeaderCenter>
            <StyledBoxMedium>
                <h4 style={{fontSize: 20}}>LOGIN</h4>
                <StyledLabelInput>
                    <p>Email</p>
                </StyledLabelInput>
                <StyledInput className="box">
                    <input 
                            type="text" 
                            onChange={(e) => setEmail(e.target.value)}/>
                </StyledInput>
                <StyledLabelInput>
                    <p>Password</p>
                </StyledLabelInput>
                <StyledInput>
                    <input 
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)} />
                </StyledInput>
                <StyledSubmitButton>
                    <input 
                            type="button" 
                            value="LOGIN" onClick={() => handleLogin()} />
                </StyledSubmitButton>
                <p>Don't have an account? 
                    <Link 
                            to="/signup" 
                            style={{color: "#1FD07D", fontWeight: "bold", cursor: "pointer"}}>
                            SIGNUP
                    </Link>
                </p>
            </StyledBoxMedium>
        </StyledBody>
    );
};