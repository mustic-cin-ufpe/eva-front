import Projects from "../components/Projects";
import Header from '../components/Header'
import { useEffect, useState } from "react";
import { google } from 'googleapis';

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
    range: 'dev!A2:D',
    auth: authToken,
  });
  const posts = response.data.values;
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts, setProjectsRendered, projectsRendered}) {
  const [isError, setIsError] = useState(false);
  let counter = 16

  const arrayProjectInfo = posts.filter((value) => {
    if(value[1]) return value
  })

  const handleScrool = (e) => {
    if (window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
      loadMoreProjects()
    }
  }
  
  useEffect(() => {
    setProjectsRendered(arrayProjectInfo.slice(0, 16))
    window.addEventListener('scroll', handleScrool)
  }, [])

  function loadMoreProjects(){
    if (counter < arrayProjectInfo.length){
      const newProjectsRendered = arrayProjectInfo.slice(counter, counter + 8)
      setProjectsRendered(oldArray => [...oldArray, ...newProjectsRendered]);
      counter += 8
    }else{
      setIsError(true)
    }
  }
  return (
      <>
        <Projects isError={isError} projectsRendered={projectsRendered}/>
      </>
    )
}