import styled from "styled-components";

export default function SearchBar() {
    const SearchBox = styled.div`
        width: 250px;
        height: 45px;
        border-radius: 10px;
        position: relative;
    `
    const InputSearchBox = styled.input`
        position: absolute;
        width: 100%;
        height: 100%;
        width: 250px;
        height: 45px;
        background-color: #E7EDF1;
        border-radius: 10px;
        border: none;
        font-family: Inter;
        color: #A7A9AE;
        font-weight: 400;
    `
    return (
        <SearchBox>
            <InputSearchBox placeholder="Busca" />
        </SearchBox>
    )
}