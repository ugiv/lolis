import { Link } from "react-router-dom";
import { StyledBodyLightGreen, StyledHeaderSpaceBetween, StyledHollowLittleButtonBlack, StyledSolidLittleButtonBlack } from "../styled/global.styled";

export default function Home() {
    return (
        <StyledBodyLightGreen>
            <StyledHeaderSpaceBetween>
                <h2>LOLIS</h2>
                <div style={{width: "200px", display: "flex", flexDirection: "rows", justifyContent: "space-between", alignItems: "center"}}>
                    <StyledHollowLittleButtonBlack>
                        <Link to="/signup" style={{color: "black", textDecoration: 'none', fontWeight: "bold"}}>Signup</Link>
                    </StyledHollowLittleButtonBlack>
                    <StyledSolidLittleButtonBlack>
                        <Link to="/login" style={{color: "white", textDecoration: 'none', fontWeight: "bold"}}>Login</Link>
                    </StyledSolidLittleButtonBlack>
                </div>
            </StyledHeaderSpaceBetween>
        </StyledBodyLightGreen>
    )
};