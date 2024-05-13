import styled from "styled-components";


export const StyledTodoCard = styled.div`
    position: relative;
    width: 100%;
    height: 130px;
    margin: 20px 0;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: rows;
    justify-content: space-between;
    align-items: flex-start;
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