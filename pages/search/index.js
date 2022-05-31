import { google } from "googleapis";
import { Router, useRouter, withRouter } from 'next/router';
import { useEffect, useState } from 'react'
import GridMosaic from "../../components/home/GridMosaic";

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
    range: 'dev!A2:M',
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
  const router = useRouter();
  const arrayProjectInfo = posts.filter((value) => {
    if (value[1]) return value
  })

  useEffect(() => {
    projectsRendered.length == 0 ? router.push('/') : ''
  }, [])


  useEffect(() => {
    console.log('escreveu')
    const tempArray = arrayProjectInfo.filter((value) => {
      const tags = value[12].split(',')
      const searchingArray = [value[1], ...tags]
      if (value[1]) {
        let hasFind = false
        searchingArray.map((item) => {
          if (item.toLowerCase().includes(searchText.toLowerCase())) {
            hasFind = true
          }

        })
        return hasFind
      }
    })
    console.log(tempArray)
    setProjectsRendered(tempArray)
  }, [searchText])

  useEffect(() => {
    console.log(projectsRendered)
  }, [projectsRendered])
  return (
    <GridMosaic projectsRendered={projectsRendered} />
  )
}

export default withRouter(SearchPage)