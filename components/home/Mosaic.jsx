import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMemo } from "react/cjs/react.production.min";
import styled from "styled-components";

export default function Mosaic({ projectsRendered }) {
    const router = useRouter();
    const [pageWidth, setPageWidth] = useState('');
    const [arrayProjectsRendered, setArrayProjectsRendered] = useState([]);
    function goTo(e, href){
        e.preventDefault()
        router.push(href)
    }

    useEffect(() => {
        setPageWidth(window.innerWidth)
        window.addEventListener('resize', (e) => {setPageWidth(window.innerWidth)})
    }, [])

    useEffect(() => {
        const lengthOfProjectsRendered = projectsRendered.length
        if (pageWidth <= 1500 && pageWidth > 640){
            //3
            const firstColumn = projectsRendered.slice(0, lengthOfProjectsRendered/3)
            const secondColumn = projectsRendered.slice(lengthOfProjectsRendered/3, (2 * lengthOfProjectsRendered)/3)
            const thirdColumn = projectsRendered.slice((2 * lengthOfProjectsRendered)/3 , lengthOfProjectsRendered)
            setArrayProjectsRendered([firstColumn, secondColumn, thirdColumn])
        } else if (pageWidth <= 640){
            //2
            const firstColumn = projectsRendered.slice(0, lengthOfProjectsRendered/2)
            const secondColumn = projectsRendered.slice(lengthOfProjectsRendered/2, lengthOfProjectsRendered)
            setArrayProjectsRendered([firstColumn, secondColumn])
        }else {
            //5
            const firstColumn = projectsRendered.slice(0, lengthOfProjectsRendered/5)
            const secondColumn = projectsRendered.slice(lengthOfProjectsRendered/5, (2 * lengthOfProjectsRendered)/5)
            const thirdColumn = projectsRendered.slice((2 * lengthOfProjectsRendered)/5 , (3 * lengthOfProjectsRendered)/5)
            const forthColumn = projectsRendered.slice((3 * lengthOfProjectsRendered)/5 , (4 * lengthOfProjectsRendered)/5)
            const fifthColumn = projectsRendered.slice((4 * lengthOfProjectsRendered)/5 , lengthOfProjectsRendered)
            setArrayProjectsRendered([firstColumn, secondColumn, thirdColumn, forthColumn, fifthColumn])
        }
    }, [pageWidth, projectsRendered])
    return (
        <GridImages>
            { arrayProjectsRendered.length > 0 ?
                
                arrayProjectsRendered.map((project, projectIndex) => {
                    return (
                        <div key={`${projectIndex}`} style={{margin: 0, display: 'grid', gridTemplateRows: '1fr auto', rowGap: 32 ,breakInside: 'avoid'}}>
                            {project.map((item, index) => (
                                    <img 
                                    style={{width: '100%', height: 'auto', cursor: 'pointer'}} 
                                    key={`MosaicImage ${index}`}
                                    src={item[3]}
                                    className='animate__animated animate__fadeInUp animate__slow'
                                    onClick={(e) => goTo(e, `/${item[0].trim()}`)}
                                    />
                            ))}
                        </div>
                    )
                })
                : ''
            }
            
        </GridImages>
    )
}

const GridImages = styled.section`
    -webkit-column-count: 5;
    -webkit-column-gap:   32px;
    -moz-column-count:    5;
    -moz-column-gap:      32px;
    column-count:         5;
    column-gap:           32px;
    margin: 30px 50px;
    
   @media (max-width: 1500px) {
        -moz-column-count:    3;
        -webkit-column-count: 3;
        column-count:         3;
    }
    @media (max-width: 640px) {
        -moz-column-count:    2;
        -webkit-column-count: 2;
        column-count:         2;
        margin: 2px 0;
        column-gap: 0;
        -moz-column-gap: 0;
        >div{
            grid-template-rows: 0 !important;
            row-gap: 0 !important;
        }
    }
`