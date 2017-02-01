import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

const Footer = () =>
  <div 
    className="footer"
    style={{
      position: 'fixed',
      bottom: 0,
      maxWidth: rhythm(24),
      padding: `${rhythm(1/2)} ${rhythm(3/4)}`,
      margin: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      background: 'white',
      // borderTop: '1px solid rgba(0,0,0,.2)'
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: rhythm(1/2),
      }}
    >
      <Link to="/resume">resume</Link>
      <a href="mailto:willchertoff@gmail.com" target="_blank">email</a>
      <a href="http://github.com/willchertoff" target="_blank">github</a>
      <a href="http://essence.netlify.com/" target="_blank">photos</a>
    </div>
  </div>

export default Footer;