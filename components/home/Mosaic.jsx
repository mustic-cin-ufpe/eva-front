import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Mosaic({ projectsRendered }) {
    const router = useRouter();
    function goTo(e, href){
        e.preventDefault()
        router.push(href)
    }
    return (
        <GridImages>
            {projectsRendered.map((item, index) => (
                    <img 
                    style={{width: '100%', height: 'auto', cursor: 'pointer', marginBottom: '32px'}} 
                    key={index} 
                    src={item[3]}
                    onClick={(e) => goTo(e, `/${item[0].trim()}/${item[1].trim().replaceAll(' ', '_')}`)}
                    />
            ))}
        </GridImages>
    )
}

const GridImages = styled.section`
    line-height: 0;
    -webkit-column-count: 5;
    -webkit-column-gap:   32px;
    -moz-column-count:    5;
    -moz-column-gap:      32px;
    column-count:         5;
    column-gap:           32px;
    margin: 30px 50px;
    
   @media (max-width: 1200px) {
        -moz-column-count:    4;
        -webkit-column-count: 4;
        column-count:         4;
    }
    @media (max-width: 1000px) {
        -moz-column-count:    3;
        -webkit-column-count: 3;
        column-count:         3;
    }
    @media (max-width: 800px) {
        -moz-column-count:    2;
        -webkit-column-count: 2;
        column-count:         2;
    }
    @media (max-width: 400px) {
        -moz-column-count:    1;
        -webkit-column-count: 1;
        column-count:         1;
    }
`