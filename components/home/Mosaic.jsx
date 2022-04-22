import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

export default function Mosaic({ projectsRendered }) {
    const router = useRouter();
    const [pageWidth, setPageWidth] = useState('');
    const [arrayProjectsRendered, setArrayProjectsRendered] = useState([]);
    const [projectsRenderedLength, setProjectsRenderedLength] = useState(0);

    function goTo(e, href){
        e.preventDefault()
        router.push(href)
    }

    async function checkImage(url){
     
        const res = await fetch(url);
        const buff = await res.blob();
       
        return buff.type.startsWith('image/')

    }

    useEffect(() => {
        setPageWidth(window.innerWidth)
        window.addEventListener('resize', (e) => {setPageWidth(window.innerWidth)})
    }, [])

    function MosaicOrganizationWidth(){
        const lengthOfNewProjectsRendered = projectsRendered.length
        if (pageWidth <= 1500 && pageWidth > 640){
            //3
            const firstColumn = projectsRendered.slice(0, lengthOfNewProjectsRendered/3)
            const secondColumn = projectsRendered.slice(lengthOfNewProjectsRendered/3, (2 * lengthOfNewProjectsRendered)/3)
            const thirdColumn = projectsRendered.slice((2 * lengthOfNewProjectsRendered)/3 , lengthOfNewProjectsRendered)
            setArrayProjectsRendered([firstColumn, secondColumn, thirdColumn])
            setProjectsRenderedLength(lengthOfNewProjectsRendered)
            
        } else if (pageWidth <= 640){
            //2
            const firstColumn = projectsRendered.slice(0, lengthOfNewProjectsRendered/2)
            const secondColumn = projectsRendered.slice(lengthOfNewProjectsRendered/2, lengthOfNewProjectsRendered)
            setProjectsRenderedLength(projectsRendered.length)
            setArrayProjectsRendered([firstColumn, secondColumn])
            
        } else {
            //5
            const firstColumn = projectsRendered.slice(0, lengthOfNewProjectsRendered/5)
            const secondColumn = projectsRendered.slice(lengthOfNewProjectsRendered/5, (2 * lengthOfNewProjectsRendered)/5)
            const thirdColumn = projectsRendered.slice((2 * lengthOfNewProjectsRendered)/5 , (3 * lengthOfNewProjectsRendered)/5)
            const forthColumn = projectsRendered.slice((3 * lengthOfNewProjectsRendered)/5 , (4 * lengthOfNewProjectsRendered)/5)
            const fifthColumn = projectsRendered.slice((4 * lengthOfNewProjectsRendered)/5 , lengthOfNewProjectsRendered)
            setProjectsRenderedLength(projectsRendered.length)
            setArrayProjectsRendered([firstColumn, secondColumn, thirdColumn, forthColumn, fifthColumn])
        }
    }

    function MosaicOrganizationAdding(){
        const lengthOfNewProjectsRendered = projectsRendered.length
        if (pageWidth <= 1500 && pageWidth > 640){
            //3
            if (projectsRenderedLength == 0){
                //base case
                MosaicOrganizationWidth()
            }else{
                //adding projects
                const newProjectsAdded = projectsRendered.slice(projectsRenderedLength, lengthOfNewProjectsRendered)
                const newProjectsAddedLength = newProjectsAdded.length
                arrayProjectsRendered[0]?.push(...newProjectsAdded.slice(0, newProjectsAddedLength/3))
                arrayProjectsRendered[1]?.push(...newProjectsAdded.slice(newProjectsAddedLength/3, 2 * newProjectsAddedLength/3))
                arrayProjectsRendered[2]?.push(...newProjectsAdded.slice(2 * newProjectsAddedLength/3, newProjectsAddedLength))
                setProjectsRenderedLength(lengthOfNewProjectsRendered)
            }
        } else if (pageWidth <= 640){
            //2
            if (projectsRenderedLength == 0){
                MosaicOrganizationWidth()
            }else{
                const newProjectsAdded = projectsRendered.slice(projectsRenderedLength, lengthOfNewProjectsRendered)
                const newProjectsAddedLength = newProjectsAdded.length
                arrayProjectsRendered[0]?.push(...newProjectsAdded.slice(0, newProjectsAddedLength/2))
                arrayProjectsRendered[1]?.push(...newProjectsAdded.slice(newProjectsAddedLength/2, newProjectsAddedLength))
                setProjectsRenderedLength(lengthOfNewProjectsRendered)
                console.log(arrayProjectsRendered)
            }
        } else {
            //5
            if (projectsRenderedLength == 0){
                MosaicOrganizationWidth()
            }else{
                const newProjectsAdded = projectsRendered.slice(projectsRenderedLength, lengthOfNewProjectsRendered)
                const newProjectsAddedLength = newProjectsAdded.length
                arrayProjectsRendered[0]?.push(...newProjectsAdded.slice(0, newProjectsAddedLength/5))
                arrayProjectsRendered[1]?.push(...newProjectsAdded.slice(newProjectsAddedLength/5, (2 * newProjectsAddedLength)/5))
                arrayProjectsRendered[2]?.push(...newProjectsAdded.slice((2 * newProjectsAddedLength)/5, (3 * newProjectsAddedLength)/5))
                arrayProjectsRendered[3]?.push(...newProjectsAdded.slice((3 * newProjectsAddedLength)/5, (4 * newProjectsAddedLength)/5))
                arrayProjectsRendered[4]?.push(...newProjectsAdded.slice((4 * newProjectsAddedLength)/5, newProjectsAddedLength))
                setProjectsRenderedLength(lengthOfNewProjectsRendered)
                console.log(arrayProjectsRendered)
            }
        }
    }

    useEffect(() => {
        MosaicOrganizationAdding();
        MosaicOrganizationWidth();
    }, [projectsRendered])

    useEffect(() => {
        console.log('mudou o width')
        MosaicOrganizationWidth();
    }, [pageWidth])
    return (
        <GridImages>
            { arrayProjectsRendered.length > 0 ?
                arrayProjectsRendered.map((project, projectIndex) => {
                    return (
                        <div key={`${projectIndex}`} style={{margin: 0, display: 'grid', gridTemplateRows: '1fr auto', rowGap: 32, breakInside: 'avoid', minHeight: 650}}>
                            {project.map((item, index) => (
                                    <img
                                    style={{width: '100%', height: 'auto', cursor: 'pointer'}} 
                                    key={`MosaicImage ${index}`}
                                    src={item[3]}
                                    onClick={(e) => goTo(e, `/${item[0].trim()}`)}
                                    onError={(e)=>{e.target.onerror = null; e.target.src="https://www.margirius.com.br/wp-content/uploads/woocommerce-placeholder.png"}}
                                    />
                                    
                            ))}
                        </div>
                    )
                }) : ''
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