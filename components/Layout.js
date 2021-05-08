import styles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <>
      <main className = {styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout
