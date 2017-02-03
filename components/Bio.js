import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpeg'

class Bio extends React.Component {
  render () {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img 
          src={profilePic}
          style={{
            height: rhythm(3),
            borderRadius: '50%',
            float: 'left',
            marginRight: rhythm(1)
          }}
        />
        A collection of projects from <strong>{config.authorName}</strong> who lives and works in Portland, Oregon building on the internet. <a href="https://github.com/willchertoff">You should see his github</a>.
      </p>
    )
  }
}

export default Bio
