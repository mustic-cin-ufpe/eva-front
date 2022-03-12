import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Art from "../../components/projeto/Art";
import { google } from "googleapis";

export const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

export async function getServerSideProps({ query }) {
  let { id } = query
  console.log(id)
  id = Number(id) + 1
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
    range: `dev!A${id}:W`,
    auth: authToken,
  });
  const posts = response.data.values[0];
  
  const content = {
    ArtName: posts[1],
    Description: posts[2],
    ImageLink: posts[3],
    AuthorName: posts[6],
    Class: posts[6],
    GithubLink: posts[16] ? posts[16] : null,
    InstagramLink: posts[14] ? posts[14] : null,
    Tags: posts[8] ? posts[8] : '',
    Iframe: posts[4] ? posts[4] : null,
    IframeLink: posts[5] ? posts[5] : null,
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
      <Art content={content}/>
      <Footer/>
    </>
  )
}