import { google } from "googleapis";
import { withRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Mosaic from "../../components/home/Mosaic";

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

function SearchPage({ posts, projectsRendered, setProjectsRendered, searchText }) {
  const arrayProjectInfo = posts.filter((value) => {
    if(value[1]) return value
  })
  useEffect(() => {
      setProjectsRendered(arrayProjectInfo.filter((value) => {
          if(value[1]) return value[1].toLowerCase().includes(searchText.toLowerCase())
      }))
  }, [searchText])
  

  return (
      <Mosaic projectsRendered={projectsRendered}/>
  )
}

export default withRouter(SearchPage)