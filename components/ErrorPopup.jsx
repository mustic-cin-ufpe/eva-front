import Image from "next/image"
import styled from "styled-components"

export default function ErrorPopup({ errorTitle, errorDescription }) {
    return (
        <PopupBackground height={document.documentElement.scrollHeight}>
            <Title>{errorTitle}</Title>
            <Description>{errorDescription}</Description>
        </PopupBackground>
    )
}

const PopupBackground = styled.div`
    background-color: #EE4848;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 0;
    height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    position: absolute;
    top: ${props => (props.height - 300) + 'px'};
    left: 50%;
    transform: translate(-50%, 0);
    animation: showError 5s ease-in-out;
    opacity: 0;
    z-index: -1;
    
    @keyframes showError {
        0%{ 
            width: 300px;
            height: 150px;
            top: ${props => props.height + 'px'};
            opacity: 0;
            z-index: 999;
        }
        50%{
            width: 300px;
            height: 150px;
            top: ${props => (props.height - 300) + 'px'};
            opacity: 100%;
            z-index: 999;
        }
        70%{
            width: 300px;
            height: 150px;
            top: ${props => (props.height - 300) + 'px'};
            opacity: 100%;
            z-index: 999;
        }
        100%{
            width: 300px;
            height: 150px;
            opacity: 0;
        }
        
    }
    
`
const Title = styled.h1`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 0;
    color: white;
    text-align: center;
    margin-bottom: 0;
    animation: showErrorTitle 5s ease-in-out;
    @keyframes showErrorTitle {
        0%{ 
            font-size: 1.5rem;
            opacity: 0;
            z-index: 999;
        }
        50%{
            font-size: 1.5rem;
            opacity: 100%;
            z-index: 999;
        }
        70%{
            font-size: 1.5rem;
            opacity: 100%;
            z-index: 999;
        }
        100%{
            font-size: 1.5rem;
            opacity: 0;
        }
        
    }
`

const Description = styled.p`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    color: white;
    font-size: 0;
    text-align: center;

    animation: showErrorDescription 5s ease-in-out;
    @keyframes showErrorDescription {
        0%{ 
            font-size: 1.5rem;
            opacity: 0;
            z-index: 999;
        }
        50%{
            font-size: 1.5rem;
            opacity: 100%;
            z-index: 999;
        }
        70%{
            font-size: 1.5rem;
            opacity: 100%;
            z-index: 999;
        }
        100%{
            font-size: 1.5rem;
            opacity: 0;
        }
        
    }
`