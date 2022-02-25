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
    range: 'D5:D',
  });

  const posts = response.data.values.flat();
  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }) {
    const arrayImages = posts
    return (
      <>
        <Header/>
        <Mosaic arrayImages={arrayImages}/>
        <Footer/>
      </>
    )
}
