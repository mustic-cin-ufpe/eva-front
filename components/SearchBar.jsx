import styled from "styled-components";
import Image from 'next/image';
import { useState } from "react";

export default function SearchBar({ setSearchText }) {
    const [tempSearchText, setTempSearchText] = useState('')
    function handleKeyEnter(e) {
        if (e.key == 'Enter'){
            setSearchText(tempSearchText)
        }
    }
    return (
        <SearchBox>
            <SearchIcon src={'/searchIcon.svg'}/>
            <InputSearchBox list="tags" placeholder="Busca" onKeyPress={(e) => { handleKeyEnter(e) }} onChange={(e) => {setTempSearchText(e.target.value)}} />
            <datalist id="tags">
                <option value="Lorem Ipsum"/>
                <option value="Lorem Ipsum"/>
                <option value="Lorem Ipsum"/>
                <option value="Lorem Ipsum"/>
                <option value="Lorem Ipsum"/>
            </datalist>
        </SearchBox>
    )
}

const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    z-index: 999;
    left: 5px;
    position: absolute;
    top: 24%;

    @media (max-width: 630px) {
        top: 20%;
        width: 15px;
        height: 15px;
        
    }
`
const SearchBox = styled.div`
    width: 250px;
    height: 45px;
    border-radius: 10px;
    position: relative;
    border: none;
    padding-top: 1px;
    background-color: #E7EDF1;
    
    @media (max-width: 630px) {
        width: 50% !important;
        height: 23px;
    }

    @media (max-width: 700px) {
        width: 150px;
    }
`
const InputSearchBox = styled.input`
    position: absolute;
    left: 30px;
    top: 0;
    //250px - 30px
    width: 220px;
    height: 100%;
    padding: 0;
    background-color: #E7EDF1;
    border-radius: 10px;
    border: none;
    font-family: Inter;
    color: #A7A9AE;
    font-weight: 400;
    outline: none;
    :focus{
        color: black;
    }
    
    @media (max-width: 630px) {
        width: 160px !important;
        left: 25px;
        height: 23px;
    }

    @media (max-width: 700px) {
        width: 120px;
    }
    
`