import Footer from '../components/Footer'
import Header from '../components/Header'
import Mosaic from '../components/home/Mosaic'
import { google } from 'googleapis';
import Link from 'next/link';
import { useEffect } from "react";

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
    return (
      <>
        <Header/>
        <Mosaic arrayProjectInfo={arrayProjectInfo}/>
        <Footer/>
      </>
    )
}
