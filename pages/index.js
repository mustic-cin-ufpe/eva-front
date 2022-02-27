import Footer from '../components/Footer'
import Header from '../components/Header'
import Mosaic from '../components/home/Mosaic'
import { google } from 'googleapis';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Button from '../components/Button';
import CentralizedDiv from '../components/CentralizedDiv';
import ErrorPopup from '../components/ErrorPopup';

export async function getServerSideProps() {

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'B5:D',
  });

  const posts = response.data.values;
  //console.log(posts)
  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }) {
    const arrayProjectInfo = posts
    const [projectsRendered, setProjectsRendered] = useState(arrayProjectInfo.slice(0, 16));
    const [isError, setIsError] = useState(false)
    function loadMoreProjects(){
      const lengthOfActualProjects = projectsRendered.length
      if (lengthOfActualProjects < arrayProjectInfo.length){
        const newProjectsRendered = arrayProjectInfo.slice(lengthOfActualProjects, lengthOfActualProjects + 8)
        setProjectsRendered(oldArray => [...oldArray, ...newProjectsRendered]) 
      }else{
        setIsError(true)
      }
    }
    return (
      <>
        <Header/>
        <Mosaic projectsRendered={projectsRendered}/>
        <CentralizedDiv>
          <Button onClick={() => loadMoreProjects()} disabled={isError}>mais projetos</Button>
        </CentralizedDiv>
        {isError ? 
        <ErrorPopup errorTitle={'Você chegou ao fim!'} errorDescription={'Infelizmente não temos mais obras para mostrar :('}/> 
        : ''
        }
        <Footer/>
      </>
    )
}
