import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header>
    <h1>EclecticLogic</h1>
    <div className="header-links">
      <Link>Contact</Link>
      <Link>About</Link>
      <Link>Blog</Link>
    </div>
  </header>
)


export default Header
