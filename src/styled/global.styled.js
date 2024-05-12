import styled from "styled-components";


export const StyledBody = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #E9E9E9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledBodyLightGreen = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #E2FFF1;
`;

export const StyledHeaderCenter = styled.div`
    position: absolute;
    top: 0;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledHeaderSpaceBetween = styled.div`
    position: absolute;
    top: 0;
    height: 80px;
    width: 90%;
    padding: 0 5%;
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    align-items: center;
`;
export const StyledBoxMedium = styled.div`
    position: relative;
    width: 30%;
    height: auto;
    padding: 40px 0;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    div.box:focus {
        border: 1px solid #1FD07D;
    }
`;

export const StyledInput = styled.div`
    width: 70%;
    height: 30px;
    border: 1px solid #CCCCCC;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;

    input {
        border: none;
        width: 90%;
        height: 90%;
        border-radius: 20px;
    }

    input:focus {
        outline: none;
    }
`;

export const StyledLabelInput = styled.div`
    width: 70%;
    height: auto;
    text-align: left;
`;

export const StyledSubmitButton = styled.div`
    width: 70%;
    height: 30px;
    background-color: #1FD07D;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    input {
        width: 90%;
        height: 90%;
        background: none;
        border: none;
        font-weight: bold;
        font-size: 16px;
        color: white;
        cursor: pointer;
    }
`;

export const StyledSolidLittleButtonBlack = styled.div`
    height: 40px;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    border: 1px solid black;
    border-radius: 10px;
`;

export const StyledHollowLittleButtonBlack = styled.div`
    height: 40px;
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
`;