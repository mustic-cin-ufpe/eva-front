import Footer from '../components/Footer'
import Header from '../components/Header'
import Mosaic from '../components/home/Mosaic'
import { google } from 'googleapis';
import Link from 'next/link';
import { useEffect, useState } from "react";
import Button from '../components/Button';
import CentralizedDiv from '../components/CentralizedDiv';
import ErrorPopup from '../components/ErrorPopup';

export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

export async function getServerSideProps() {

  const { privateKey } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY || '{ privateKey: null }')

  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES,
    projectId: process.env.GOOGLE_PROJECTID,
    credentials: {
      private_key: privateKey,
      private_key_id: process.env.PRIVATE_KEY_ID,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
    },
  })


  const authToken = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', authToken });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'A5:D',
    auth: authToken,
  });

  const posts = response.data.values;
  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }) {
    const arrayProjectInfo = posts.filter((value) => {
      if(value[1]) return value
    })
    const [projectsRendered, setProjectsRendered] = useState(arrayProjectInfo.slice(0, 16));
    const [isError, setIsError] = useState(false)
    function loadMoreProjects(){
      const lengthOfActualProjects = projectsRendered.length
      if (lengthOfActualProjects < arrayProjectInfo.length){
        const newProjectsRendered = arrayProjectInfo.slice(lengthOfActualProjects, lengthOfActualProjects + 8)
        setProjectsRendered(oldArray => [...oldArray, ...newProjectsRendered]);

      }else{
        setIsError(true)
      }
    }

    const handleScrool = (e) => {
      if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
        //loadMoreProjects()
      }
    }
    useEffect(() => {
      //loadMoreProjects();
      window.addEventListener('scroll', handleScrool)
    })
    return (
      <>
        <Header setIsError={setIsError} arrayProjectInfo={arrayProjectInfo} setProjectsRendered={setProjectsRendered}/>
        <Mosaic projectsRendered={projectsRendered}/>
        <CentralizedDiv>
          <Button className='animate__animated animate__fadeIn' onClick={() => loadMoreProjects()} disabled={isError}>mais projetos</Button>
        </CentralizedDiv>
        {isError ? 
        <ErrorPopup errorTitle={'Você chegou ao fim!'} errorDescription={'Infelizmente não temos mais obras para mostrar :('}/> 
        : ''
        }
        <Footer/>
      </>
    )
}
