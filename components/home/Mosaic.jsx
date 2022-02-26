import { useRouter } from "next/router";
import styled from "styled-components";

const GridImages = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(400px, 400px);
    grid-gap: 32px;
    max-width: 100vw;
    height: 100%;
    margin: 30px 50px;
`
export default function Mosaic({ arrayProjectInfo }) {
    const router = useRouter();
    function getRandomArbitrary() {
        return Math.random() * (1.2 - 0.9) + 0.9;
    }
    function goTo(e, href){
        e.preventDefault()
        router.push(href)
    }
    return (
        <GridImages>
            {arrayProjectInfo.map((item, index) => (
                    <img 
                    style={{maxHeight: '100%', maxWidth: '100%', aspectRatio: `${getRandomArbitrary()}`, cursor: 'pointer'}} 
                    key={index} 
                    src={item[2]}
                    onClick={(e) => goTo(e, `/${item[0].trim().replaceAll(' ', '_')}`)}
                    />
            ))}
        </GridImages>
    )
}