import { 
        StyledBody, StyledBoxMedium, 
        StyledHeaderCenter, StyledInput, 
        StyledLabelInput, StyledSubmitButton 
} from "../styled/global.styled";
import { Link, useNavigate } from "react-router-dom";
import { signupAsync } from "../asyncFunction/asyncFunction";
import { useState } from "react";

export default function Signup(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        signupAsync({
                    name: name, 
                    email: email, 
                    password: password
        }, navigate);
    }
    return (
        <StyledBody>
            <StyledHeaderCenter>
                <h2>LOLIS</h2>
            </StyledHeaderCenter>
            <StyledBoxMedium>
                <h4 style={{fontSize: 20}}>SIGNUP</h4>
                <StyledLabelInput>
                    <p>Name</p>
                </StyledLabelInput>
                <StyledInput>
                    <input 
                            type="text" 
                            onChange={(e) => setName(e.target.value)}/>
                </StyledInput>
                <StyledLabelInput>
                    <p>Email</p>
                </StyledLabelInput>
                <StyledInput>
                    <input 
                            type="email" 
                            onChange={(e) => setEmail(e.target.value)}/>
                </StyledInput>
                <StyledLabelInput>
                    <p>Password</p>
                </StyledLabelInput>
                <StyledInput>
                    <input 
                            type="password" 
                            onChange={(e) => setPassword(e.target.value)}/>
                </StyledInput>
                <StyledSubmitButton>
                    <input 
                        type="submit" 
                        value="SIGNUP" 
                        onClick={handleSubmit}
                    />
                </StyledSubmitButton>
                <p>Aready have an account? 
                    <Link 
                        to="/login" 
                        style={{color: "#1FD07D", fontWeight: "bold", cursor: "pointer"}}>
                        LOGIN
                    </Link>
                </p>
            </StyledBoxMedium>
        </StyledBody>
    );
}