import '../styles/globals.css'
import Layout from '../components/Layout'
import {GlobalProvider} from '../contexts/GlobalState'
import {ItemsContextProvider} from '../contexts/ItemsListArrayContext'
import Nav from '../components/Nav'
// octa
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react'
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Nav />
      <Layout>
        <GlobalProvider>
          <ItemsContextProvider>
            <Component {...pageProps} />
          </ItemsContextProvider>
        </GlobalProvider>
      </Layout>
    </>
    
  )
}

export default MyApp
