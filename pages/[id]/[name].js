import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Art from "../../components/projeto/Art";
import { google } from "googleapis";
import { useEffect } from "react";
export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

export async function getServerSideProps({ query }) {
  let { id, ArtName } = query
  id = Number(id) + 4
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
    range: `A${id}:W`,
    auth: authToken,
  });
  const posts = response.data.values[0];
  
  const content = {ArtName: posts[1],
  Description: posts[2],
  ImageLink: posts[3],
  AuthorName: posts[6],
  Class: posts[15],
  GithubLink: posts[12],
  InstagramLink: posts[10],
  Tags: posts[21],
  }
  return {
    props: {
      content,
    },
  };
}

export default function Project({ content }) {
  return (
    <>
      <Header/>
      <Art content={content}/>
      <Footer/>
    </>
  )
}