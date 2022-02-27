import Image from "next/image"
import styled from "styled-components"
import Footer from "../Footer"


export default function Art(){
    return(
    <div style={{display: "flex", flexDirection: 'column' , alignItems: "center", justifyContent: "center", marginBottom: 10}}>
        <ArtTitle>Nome da Obra</ArtTitle> 
        <img 
        src={'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'} 
        width = {784} height = {784}
        />
        <ArtDescription>
            <LineStyle/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <AuthorName>
                        Nome do Autor
                    </AuthorName>
                    <ArtName>
                        Nome da Obra
                    </ArtName>
                </div>
                <div style={{display: 'flex'}}>
                    <SocialBox style={{borderRight: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0}}>
                        <Image src={'/githubIcon.svg'} width={25} height={25}/>
                    </SocialBox>
                    <SocialBox style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>
                        <Image src={'/instagramIcon.svg'} width={25} height={25}/>
                    </SocialBox>
                </div>
            </div>
            
            <TextArtDescription>
            Descrição da obra, dependendo da obra a forma como é mostrada é modificado, caso seja varias imagens pode ter uma galeria (com um carrossel de imagens, iframe, audiio, entre outros)
            </TextArtDescription>
            <Members>
                Outros Integrantes
            </Members>

            <ListMembers>
            <li>Membro 1</li>
            <li>Membro 2</li>
            <li>Membro 3</li>
            <li>Membro 4</li>
            </ListMembers>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <BoxTag>
                    <InfoTag>#tag1</InfoTag>
                </BoxTag>
                <BoxTag>
                    <InfoTag>#tag2</InfoTag>
                </BoxTag>
                <BoxTag>
                    <InfoTag>#tag3</InfoTag>
                </BoxTag>
                <BoxTag>
                    <InfoTag>#tag4</InfoTag>
                </BoxTag>
            </div>
        </ArtDescription>
    </div>
)
}

const ArtDescription = styled.div`
`

const ArtTitle = styled.h1`
    display: grid;
    width: 858px;
    height: 48px;
    left: 291px;
    top: 178px;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
    /* identical to box height, or 48px */

    text-align: center;

    color: #000000;
`

const LineStyle = styled.hr`
    width: 640px;
    height: 0px;

    border: 2px solid #000000;
`
const AuthorName = styled.p `
    width: 159px;
    height: 19px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #000000;
`
const ArtName = styled.p`
    width: 159px;
    height: 19px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`
const SocialBox = styled.div`
    width: 55px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    
`
const TextArtDescription = styled.p`
    /* Descrição da obra, dependendo da obra a forma como é mostrada é modificado, caso seja varias imagens pode ter uma galeria (com um carrossel de imagens, iframe, audiio, entre outros */


    width: 640px;
    height: 102px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 170%;
    /* or 34px */


    color: #000000;
`
const Members = styled.h3`
    width: 201px;
    height: 35px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 160%;
    /* or 35px */


    color: #000000;
`
const ListMembers = styled.ul`
    width: 146px;
    height: 136px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 170%;
    /* or 34px */


    color: #000000;
`
const BoxTag = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EAEAEA;
    border-radius: 6px;
    margin: 15px;
`
const InfoTag = styled.p`
    width: 53px;
    height: 34px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 34px;
    /* identical to box height, or 34px */


    color: #000000;
`
