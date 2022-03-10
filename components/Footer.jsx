import Image from "next/image"
import styled from "styled-components"

export default function Footer() {
    return (
        <FooterStyle className="animate__animated animate__slideInUp">
            <Image src={'/eva-logo-footer.svg'} width={150} height={50} />
        </FooterStyle>
    )
}

const FooterStyle = styled.footer`
    max-width: 100vw;
    height: 10vh;
    background-color: white;
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.08);
    padding-left: 100px;
    display: flex;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 0;
    @media (max-width: 1000px) {
        justify-content: center;
        padding-left: 0;
    }
`