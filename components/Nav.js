import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className = {navStyles.nav}>
      <ul className = {navStyles.ul}>
        <li>
          <Link href = '/leads'>Leads Center</Link>
        </li>
        <li>
          <Link href = '#'>Customer Center</Link>
          <ul>
          <Link href = '/customers'>Customers</Link>
            <Link href = '/quotes'>Quotes List</Link>
            <Link href = '/salesOrders'>Sales Orders</Link>
          </ul>
        </li>
        <li>
          <Link href = '#'>Vendor Center</Link>
          <ul>
          <Link href = '/vendorsList'>Vendors List</Link>
            <Link href = '/workOrders'>Work Orders</Link>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
