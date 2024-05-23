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
    min-height: 750px;
    background-color: #E2FFF1;
    display: flex;
    overflow: scroll;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 94%;
    padding: 0 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 900px){
        width: 90%;
        padding: 0 5%;
    }
`;
export const StyledBoxLarge = styled.div`
    position: relative;
    width: 100%;
    height: 80%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (min-width: 1000px){
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 90%;
    }
`;

export const StyledBoxFourtyPercent = styled.div`
    position: relative;
    width: 90%;
    hight: auto;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media only screen and (min-width: 900px){
        width: 40%
    }
`;

export const StyledBoxMedium = styled.div`
    position: relative;
    width: 80%;
    min-width: 200px;
    max-width: 400px;
    height: auto;
    padding: 10px 0;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 900px){
        width: 30%;
        min-width: 300px;
    }   
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
        line-height: 2;
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

export const StyledSolidLittleButtonGreen = styled.div`
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1FD07D;
    border: 1px solid #1FD07D;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    line-height: 0.5;
    cursor: pointer;
    font-size: 14px;
    @media only screen and (min-max: 900px){
        font-size: 16px;
    }
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

export const StyledImageLarge = styled.div`
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: auto;
    }
`;

export const StyledParagraphButton = styled.p`
    font-size: 14px;
    padding: 10px 5px;
    margin-right: 10px;
    cursor: pointer;
`;