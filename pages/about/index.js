import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";

export default function About() {
  return (
    <>

      <Container>

        <Title>O que é EVA?</Title>

        <Description>EVA - Exposição Virtual de Arte, Tecnologia e Criatividade é uma plataforma de exibição interativa dos trabalhos da interseção de arte, computação, design e expressão gráfica desenvolvidos nas disciplinas de Introdução à Programação, Introdução à Multimídia, Computação Musical, Jogos Digitais, Criatividade Computacional e Design Gerativo das graduações de Ciência da Computação, Engenharia da Computação, Sistemas de Informação, Design e Expressão Gráfica da UFPE.</Description>

        <Description>A ideia principal deste projeto interdisciplinar é apresentar de forma interativa e cativante o vasto universo de trabalhos que usam a computação como meio para expressão criativa realizados no âmbito das disciplinas da UFPE.</Description>

        <Title>Objetivos</Title>

        <Description>
          O objetivo deste projeto é realizar a curadoria, desenvolver uma plataforma de exibição online e organizar uma exposição virtual de trabalhos da interseção de arte, tecnologia e criatividade desenvolvidos nos contextos das disciplinas da UFPE. Os alunos envolvidos na equipe de execução terão protagonismo e autonomia na definição dos processos do projeto, sendo mentorados pelos docentes.
        </Description>

        <Title>Equipe</Title>
        <SubTitle>Desenvolvimento</SubTitle>
        <ul>
          <li> João Pedro de Moraes Madruga </li>
          <li> Wytoria Rodrigues Paustino </li>
          <li> Vítor Aguiar Tavares </li>
        </ul>
        <SubTitle>Curadoria</SubTitle>
        <ul>
          <li> Isaac Ferreira Silva </li>
          <li> Manuela Henrique Lopes </li>
        </ul>
        <SubTitle>Design</SubTitle>
        <ul>
          <li> Douglas Felipe Candido dos Santos </li>
        </ul>
        <SubTitle>Experimentações</SubTitle>
        <ul>
          <li> Douglas Felipe Candido dos Santos </li>
          <li> Lucas Emanuel monteiro de Macêdo Gois </li>
        </ul>
        <SubTitle>Coordenação</SubTitle>
        <ul>
          <li> Filipe Calegario </li>
          <li> Guilherme Ranoya </li>
        </ul>
        <SubTitle>Parceria</SubTitle>
        <ul>
          <li> Giordano Cabral </li>
          <li> Pedro Aléssio </li>
        </ul>

      </Container>
      <Footer />
    </>
  )
}
const Container = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  width: 50%;
  height: 90%;
  margin: 5px auto;
  background-color: #fff;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  font-size: 18px;
`;

const Title = styled.h2`
  font-size: 30px
`;
const SubTitle = styled.h3`
  font-size: 20px
`;
