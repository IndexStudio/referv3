import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/ReferLogoWhiteai.png')}width="30" /></Link>
    <Link to="/aboutus">About Us</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/buy"><button>Coming Soon</button></Link>
    </div>
</div>
)

export default Header
