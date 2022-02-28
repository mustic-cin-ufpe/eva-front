import styled from "styled-components";

const SearchBox = styled.div`
    width: 250px;
    height: 45px;
    border-radius: 10px;
    position: relative;
    border: none;
    padding-top: 1px;
    background-color: #E7EDF1;
    ::before{
        content: '';
        width: 24px;
        height: 24px;
        background-image: url('searchIcon.svg');
        z-index: 999;
        left: 5px;
        position: absolute;
        top: 25%;
    }
`
const InputSearchBox = styled.input`
    position: absolute;
    left: 30px;
    width: 100%;
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
    
`
export default function SearchBar() {
    
    return (
        <SearchBox>
            <InputSearchBox placeholder="Busca" />
        </SearchBox>
    )
}