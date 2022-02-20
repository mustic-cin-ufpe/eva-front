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
export default function Mosaic() {
    const arrayImages = ['https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200', 'https://lh3.googleusercontent.com/Y3Wlgrx0hey6cXIKBIC0hSm-qKmm-NdDmlr1t2iBIp8Cox6sC-NjIlb9Ejem9S9s=s1200']
    
    function getRandomArbitrary() {
        return Math.random() * (1.2 - 0.9) + 0.9;
    }
    return (
        <GridImages>
            {arrayImages.map((item, index) => (
                    <img style={{maxHeight: '100%', maxWidth: '100%', aspectRatio: `${getRandomArbitrary()}`}} key={index} src={item}/>
            ))}
        </GridImages>
    )
}