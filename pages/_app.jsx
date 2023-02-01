import "../styles/global.css"
import NavBar from "../components/navBar"
import Head from "next/head"
 
const App = ({Component, pageProps}) => {

  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
     <header>
    <NavBar/>
    </header>
    <main>
      <Component {...pageProps}/>
    </main>
    </>
  )
}

export default App
