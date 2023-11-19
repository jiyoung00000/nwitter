import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    margin-top: 100px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

export const LoginInput = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

export const LoginToggle = styled.span`
    cursor: pointer;
    margin: 10px 0px;
    color: #0095f6;
    font-weight: 600;
`;

export const LoginButton = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: #04aaff;
    color: white;
    text-align: center;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        background-color: #0378a6;
    }
`;
