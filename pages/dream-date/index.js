import React, { Component } from 'react'
import { Link } from 'react-router'
import { rhythm } from 'utils/typography'
import Image from '../../components/Image'
import mainPic from './dream-date-hero.png'
import onboardOne from './dd1.png'
import onboardTwo from './dd2.png'
import onboardThree from './dd3.png'

class Post extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.route.page.data.title}</h1>
        <Image 
          src={mainPic} 
          style={{
            height: `${rhythm(12)}`,
            display: 'block',
            margin: `${rhythm(4)} auto`
          }}
        />
        <p>Not another dating app.</p>
        <p>Dream Date is a web app designed for Oregon Museum of Science and Industry's "OMSI After Dark: Love and Sex" event on February 13, 2016.</p>
        <p>The app functions as a location based audio story, guiding museum patrons towards different exhibits while telling them a fictional story. Think 'book on tape' meets 2016.</p>
        <p>My goal with Dream Date was to provide users with a warm, welcoming experience. One that they could instantly fall into without much thought.</p>
        <Image 
          src={onboardOne} 
          style={{
            height: `${rhythm(12)}`,
            display: 'block',
            margin: `${rhythm(4)} auto`
          }}
        />
        <Image 
          src={onboardTwo} 
          style={{
            height: `${rhythm(12)}`,
            display: 'block',
            margin: `${rhythm(4)} auto`
          }}
        />
        <Image 
          src={onboardThree} 
          style={{
            height: `${rhythm(12)}`,
            display: 'block',
            margin: `${rhythm(4)} auto`
          }}
        />
        <p>Guide users. Don't give them a million options.</p>
        <p>3 screens. Onboarding, Map, Transcript. Subtle but elegant. Modern but Nostalgic. You can find the app <a href="http://dreamdateapp.com" target="_blank">here</a>.</p>
        <Link
          to={'/'} 
          style={{
            textAlign: 'center',
            width: '100%',
            display: 'block',
            marginBottom: rhythm(2)
          }}
        >
          Back
        </Link>
      </div>
    )
  }
}

export default Post

exports.data = {
  title: "Dream Date - Web Application",
  date: "2016-02-13T12:40:32.169Z",
  path: "/dream-date/"
}