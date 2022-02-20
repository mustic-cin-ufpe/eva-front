import Image from 'next/image'
import styled from 'styled-components'
import CentralizedDiv from './CentralizedDiv'
import SearchBar from './SearchBar'

export default function Header() {
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
    `
    
    return (
        <HeaderStyle>
            <Image src={'/eva-logo.svg'} width={297} height={69} />
            <CentralizedDiv style={{width: '30vw', justifyContent: 'space-around'}}>
                <HeaderText>Registre seu Projeto</HeaderText>
                <HeaderText>Sobre</HeaderText>
                <SearchBar/>
            </CentralizedDiv>
        </HeaderStyle>
    )
}
