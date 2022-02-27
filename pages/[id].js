import Footer from "../components/Footer";
import Header from "../components/Header";
import Art from "../components/projeto/Art";
import { google } from "googleapis";
import { useEffect } from "react";
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
    range: 'B5:D',
    auth: authToken,
  });
  const posts = response.data.values;
  console.log(posts)
  return {
    props: {
      posts,
    },
  };
}

export default function Project() {
  useEffect(() => {
    console.log(window.location.href)
  }, [])
  return (
    <>
      <Header/>
      <Art/>
      <Footer/>
    </>
  )
}