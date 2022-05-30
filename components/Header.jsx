import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CentralizedDiv from "./CentralizedDiv";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Header({ setSearchText, logos }) {
  const router = useRouter();
  const [actualLogo, setActualLogo] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (logos.length != 0) {
      console.log(logos[0]);
      setActualLogo(logos[getRandomArbitrary(0, logos.length - 1)][1]);
    }
  }, [logos]);

  useEffect(() => {
    window.innerWidth >= 630 ? setIsMobile(false) : setIsMobile(true);
    window.addEventListener("resize", (e) => {
      window.innerWidth >= 630 ? setIsMobile(false) : setIsMobile(true);
    });
  }, []);
  function goTo(e, href) {
    e.preventDefault();
    router.push(href);
  }
  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }
  return (
    <HeaderStyle className="animate__animated animate__slideInDown">
      <LogoImage
        onClick={(e) => goTo(e, "/")}
        src={`${actualLogo}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://www.margirius.com.br/wp-content/uploads/woocommerce-placeholder.png";
        }}
      />
      {isMobile ? (
        <>
          <SearchBar setSearchText={setSearchText} />
          <CentralizedDiv style={{ marginRight: 10, height: "100%" }}>
            <Image
              src={"/about-icon.svg"}
              width={20}
              height={20}
              onClick={(e) => goTo(e, "about")}
            />
            <Image src={"/register-icon.svg"} width={20} height={20} />
          </CentralizedDiv>
        </>
      ) : (
        <>
          {/* <LogoImage onClick={(e) => goTo(e, "/")} src={`${actualLogo}`} /> */}
          <CentralizedDiv
            style={{ width: "550px", justifyContent: "space-around" }}
          >
            <HeaderText
              href="https://forms.gle/iauncyEiWJfiwq4C7"
              target={"_blank"}
            >
              {" "}
              Registre seu Projeto
            </HeaderText>
            <HeaderText onClick={(e) => goTo(e, "about")}>Sobre</HeaderText>
            <SearchBar setSearchText={setSearchText} />
          </CentralizedDiv>
        </>
      )}
    </HeaderStyle>
  );
}

const LogoImage = styled.img`
  max-width: 300px;
  max-height: 70px;
  cursor: pointer;
  @media (max-width: 630px) {
    width: 20%;
    max-height: 100%;
    margin-left: 15px;
  }
`;
const HeaderStyle = styled.header`
  max-width: 100vw;
  height: 9vh;
  background-color: white;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  span {
    cursor: pointer !important;
    display: none !important;
  }
  @media (max-width: 1000px) {
    padding: 0;
  }
  @media (max-width: 700px) {
    padding: 0;
    font-size: 0.8rem;
  }

  @media (max-width: 630px) {
    span {
      display: block !important;
    }
  }
`;

const HeaderText = styled.a`
  text-decoration: none;
  font-family: "Inter", sans-serif;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #7b7878;
  height: max-content;
  margin: 0;
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
    width: 100%;
    height: 1px;
    background: #a7a9ae;
    position: absolute;
    left: 0;
    right: 100%;
    bottom: -10px;
    height: 2px;
  }
  ::after {
    content: "";
    width: 100%;
    height: 1px;
    background: #a7a9ae;
    position: absolute;
    left: 0;
    right: 100%;
    top: -10px;
    height: 2px;
  }
  @media (max-width: 630px) {
    display: none;
  }
  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;
