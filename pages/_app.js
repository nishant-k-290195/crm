import '../styles/globals.css'
import Layout from '../components/Layout'
import {GlobalProvider} from '../contexts/GlobalState'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Nav />
      <Layout>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </Layout>
    </>
    
  )
}

export default MyApp
