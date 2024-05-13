import styled from "styled-components";


export const StyledTodoCard = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    height-min: 130px;
    margin: 20px 0;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    align-items: flex-start;
    cursor: pointer;
`;

export const StyledLeftText = styled.div`
    width: 90%;
    margin: 10px 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    h5 {
        font-size: 18px;
        line-height: 0;
        margin: 15px 0;
        color: #1FD07D;
    }

    p {
        font-size: 14px;
        line-height: 0;
        color: #454343;
    }
`;

export const StyledButtonSolidGreenTodoCard = styled.div`
    position: absolute;
    bottom: 15px;
    right: 15px;
    padding: 0 15px;
    background: #1FD07D;
    line-height: 0;
    border-radius: 5px;
    color: white;
    font-weight: bold;
`;

export const StyledInputTodoCard = styled.div`
    width: 80%;
    height: 40px;
    border-bottom: 1px solid #CCCCCC;
    margin: 10px 0;
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: center;
    input {
        width: 100%;
        height: 95%;
        border: none;
        font-size: 18px;
        color: #1FD07D;
    }

    input:focus {
        outline: none;
    }
`;

export const StyledTextareaTodoCard = styled.div`
    width: 80%;
    height: auto;
    border-bottom: 1px solid #CCCCCC;
    margin: 5px 0;
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: center;

    textarea {
        resize: none;
        width: 100%;
        height: 95%;
        border: none;
        font-size: 14px;
        color: #454343;
    }

    textarea:focus {
        outline: none;
    }
`;

export const StyledInputDateTodoCard = styled.div`
    width: 30%;
    height: 40px;
    background: #CCCCCC;
    border-radius: 5px;
    margin: 5px 0;
    input {
        width: 90%;
        height: 100%;
        border: none;
        background: none;
    }

    input:focus {
        outline: none;
    }
`;

export const StyledSelectTodoCard = styled.div`
    width: 30%;
    height: 40px;
    background: #CCCCCC;
    border-radius: 5px;
    margin: 5px 0;
    select {
        width: 90%;
        height: 100%;
        border: none;
        background: none;
    }

    select:focus {
        outline: none;
    }
`;
