import Image from "next/image"
import styled from "styled-components"
import Footer from "../Footer"


export default function Art({ content }){
    const {ArtName, Description, ImageLink, AuthorName, Class, GithubLink, InstagramLink, Tags} = content;
    const arrayAuthorName = AuthorName.split(',')
    const arrayTags = Tags.split(',')
    console.log(arrayAuthorName)
    return(
    <div style={{display: "flex", flexDirection: 'column' , alignItems: "center", justifyContent: "center", marginBottom: 10}}>
        <ArtTitle>{ArtName}</ArtTitle> 
        <img 
        src={ImageLink} 
        width = {784} height = {784}
        />
        <ArtDescription>
            <LineStyle/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <div>
                    <Author>
                        {arrayAuthorName[0]}
                    </Author>
                    <ClassName>
                        {Class}
                    </ClassName>
                </div>
                <div style={{display: 'flex'}}>
                    <SocialBox style={{borderRight: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0}} href={`${GithubLink}`} target="_blank">
                        <Image src={'/githubIcon.svg'} width={25} height={25} />
                    </SocialBox>
                    <SocialBox style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}} href={`${InstagramLink}`} target="_blank">
                        <Image src={'/instagramIcon.svg'} width={25} height={25} />
                    </SocialBox>
                </div>
            </div>
            
            <TextArtDescription>
            {Description}
            </TextArtDescription>
            <Members>
                Outros Integrantes
            </Members>

            <ListMembers>
                {arrayAuthorName.slice(1, arrayAuthorName.length).map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
                {arrayAuthorName.length == 1 ? <li>Não há outros integrantes</li>: ''}
            </ListMembers>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {arrayTags.map((item, index) => {
                    return (
                    <BoxTag>
                        <InfoTag key={index}>{item.trim()}</InfoTag>
                    </BoxTag>
                    )
                })}
                
                
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
const Author = styled.p `
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
const ClassName = styled.p`
    width: 159px;
    height: 19px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`
const SocialBox = styled.a`
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
