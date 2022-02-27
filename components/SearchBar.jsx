import styled from "styled-components";

export default function SearchBar() {
    
    return (
        <SearchBox>
            <InputSearchBox list="tags" placeholder="Busca" />
            <datalist id="tags">
                <option value="Edge"/>
                <option value="Firefox"/>
                <option value="Chrome"/>
                <option value="Opera"/>
                <option value="Safari"/>
            </datalist>
        </SearchBox>
    )
}

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
    @media (max-width: 400px) {
        width: 125px;
    }

    @media (max-width: 700px) {
        width: 150px;
    }
`
const InputSearchBox = styled.input`
    position: absolute;
    left: 30px;
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
    
    @media (max-width: 400px) {
        width: 95px;
    }

    @media (max-width: 700px) {
        width: 120px;
    }
    
`