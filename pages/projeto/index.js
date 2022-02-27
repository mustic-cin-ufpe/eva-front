import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Art from "../../components/projeto/Art";

export default function Project() {
  return (
    <>
      <Header/>
      <Art/>
      <Footer/>
    </>
  )
}
const TitleExemple = styled.h1`
    font-size: 100px;
    color: blue;
    font-weight: 900;
`