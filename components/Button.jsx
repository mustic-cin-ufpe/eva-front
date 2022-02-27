import styled from "styled-components";

const Button = styled.button`
    background-color: black;
    border: none;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    box-shadow: 0px 6px 14px rgba(192, 192, 192, 0.08);
    cursor: pointer;
    font-family: Inter;
    color: white;
    transition: all 1s ease-in-out;
    :disabled{
        background-color: #7B7878;
        cursor: not-allowed;
    }
`

export default Button