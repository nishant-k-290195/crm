import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className={navStyles.section}>
      <div className={navStyles.container}>
        <nav className={navStyles.nav}>
          <ul className={navStyles.ul}>
            <li>
              <Link href='/leads'>Leads Center</Link>
            </li>
            <li>
              <Link href='#'>Customer Center</Link>
              <ul>
                <li><Link href='/customers'>Customers List</Link></li>
                <li><Link href='/quotes'>Quotes</Link></li>
                <li><Link href='/salesOrders'>Sales Orders</Link></li>
              </ul>
            </li>
            <li>
              <Link href='#'>Vendor Center</Link>
              <ul>
                <li><Link href='/vendorsList'>Vendors List</Link></li>
                <li><Link href='/workOrders'>Work Orders</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
