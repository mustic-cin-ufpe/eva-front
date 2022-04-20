import Footer from './Footer';
import Mosaic from './home/Mosaic';
import ErrorPopup from './ErrorPopup';
import { useState, useEffect } from 'react';
import { Oval, TailSpin } from 'react-loader-spinner';

export default function Projects({ projectsRendered, isError }) {
    const [showProjects, setShowProjects] = useState(false)
    useEffect(() => {
      setTimeout(() => {setShowProjects(true)}, 5000)
    }, [])
    
    return (
        <>
          {showProjects == false ? <Oval
            ariaLabel="loading-indicator"
            height={100}
            width={100}
            strokeWidth={5}
            color="#000"
            secondaryColor="#fff"
          /> : ''}
          <Mosaic projectsRendered={projectsRendered}/>
          
          {isError ? 
          <ErrorPopup errorTitle={'Você chegou ao fim!'} errorDescription={'Infelizmente não temos mais obras para mostrar :('}/> 
          : ''
          }
          <Footer/>
        </>
    )
}
