import { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'animate.css';
import Header from '../components/Header';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FAFAFA;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  const [projectsRendered, setProjectsRendered] = useState([]);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  
  useEffect(() => {
    if (searchText != ''){
      router.push('/search')
    }
  }, [searchText])

  return (
    <>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <title>EVA - Exposição Virtual de Arte</title>
      </header>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header setSearchText={setSearchText} searchText={searchText}/>
        <Component 
        {...pageProps} 
        setProjectsRendered={setProjectsRendered} 
        projectsRendered={projectsRendered}
        searchText={searchText}
        />
      </ThemeProvider>
    </>
  )
}
