import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import CentralizedDiv from './CentralizedDiv'
import SearchBar from './SearchBar'

export default function Header() {
    const router = useRouter();
    
    function goTo(e, href){
        e.preventDefault()
        router.push(href)
    }
    return (
        <HeaderStyle>
            <Image 
                onClick={(e) => goTo(e, '/')} 
                src={'/eva-logo.svg'} 
                width={297} 
                height={69}
            />
            <CentralizedDiv style={{width: '550px', justifyContent: 'space-around'}}>
                <HeaderText>Registre seu Projeto</HeaderText>
                <HeaderText onClick={(e) => goTo(e, 'about')}>Sobre</HeaderText>
                <SearchBar/>
            </CentralizedDiv>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    max-width: 100vw;
    height: 10vh;
    background-color: white;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;

    @media (max-width: 1000px) {
        padding: 0;
    }
    @media (max-width: 700px) {
        padding: 0;
        font-size: 0.8rem;
        span{
            width: 200px !important;
            height: 50px !important;
        }
    }

    @media (max-width: 400px) {
        padding: 0;
        span{
            display: none !important;
        }
    }
`
const HeaderText = styled.h1`
    font-family: 'Inter', sans-serif;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    color: #7B7878;
    height: max-content;
    margin: 0;
    position: relative;
    cursor: pointer;
    ::before{
        content: '';
        width: 100%;
        height: 1px;
        background: #A7A9AE;
        position: absolute;
        left: 0;
        right: 100%;
        bottom: -10px;
        height: 2px;
    }
    ::after{
        content: '';
        width: 100%;
        height: 1px;
        background: #A7A9AE;
        position: absolute;
        left: 0;
        right: 100%;
        top: -10px;
        height: 2px;
    }
    @media (max-width: 400px) {
        font-size: 0.8rem;
    }
    @media (max-width: 700px) {
        font-size: 0.8rem;
    }
`