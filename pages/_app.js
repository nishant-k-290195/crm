import '../styles/globals.css'
import {useContext} from 'react'
import Layout from '../components/Layout'
import {GlobalContext, GlobalProvider} from '../components/context/GlobalState'

function MyApp({ Component, pageProps }) {

const context = useContext(GlobalContext)
console.log(context)
  return (
    <Layout>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </Layout>
    
  )
}

export default MyApp
