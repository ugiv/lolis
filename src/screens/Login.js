import { Link, useNavigate } from "react-router-dom";
import { 
        StyledBody, StyledBoxMedium, 
        StyledHeaderCenter, StyledInput, 
        StyledLabelInput, StyledSubmitButton 
} from "../styled/global.styled";
import { useState } from "react";


export default function Login() {
    let navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleLogin = async () => {
        const userData = {
            email: email,
            password: password
        }
        try {
            const request = await fetch('http://localhost:8154/login', {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(userData)
            });
            const response = await request.json();
            console.log(response);
            if (response.status === "ok"){
                console.log(response.status)
                navigate('/dashboard')
            }
        } catch(err){
            throw err
        }
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
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </StyledInput>
                <StyledLabelInput>
                    <p>Password</p>
                </StyledLabelInput>
                <StyledInput>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </StyledInput>
                <StyledSubmitButton>
                    <input type="submit" value="LOGIN" onClick={() => handleLogin()}/>
                </StyledSubmitButton>
                <p>Don't have an account? <Link to="/signup" style={{color: "#1FD07D", fontWeight: "bold", cursor: "pointer"}}>SIGNUP</Link></p>
            </StyledBoxMedium>
        </StyledBody>
    );
};