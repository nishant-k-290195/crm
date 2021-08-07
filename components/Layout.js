import layoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <main className ={layoutStyles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout
