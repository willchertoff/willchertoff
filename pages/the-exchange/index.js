import React, { Component } from 'react'
import { Link } from 'react-router'
import { rhythm } from 'utils/typography'
import Image from '../../components/Image'
import mainPic from './the-exchange-cover.png'
import onboardOne from './ex1.png'
import onboardTwo from './ex2.png'
import onboardThree from './ex3.png'

class Post extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.route.page.data.title}</h1>
        <p>Get out sometimes. There is a lot to see.</p>
        <Image 
          src={mainPic} 
          style={{
            height: `${rhythm(12)}`,
            display: 'block',
            margin: `${rhythm(4)} auto`
          }}
        />
        <p>The Exchange is an agreement. The Exchange is a language. The Exchange is a system where words have become currency.</p>
        <p>The Exchange is a modern story app that advances as you visit pertinent Portland locations and listen to the story unfold. Rapidly gain favor with a media mogul, assist a pair of con-men in building a revolutionary machine, and join a jazz band as the Tourist, a transplant in a new city.</p>
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
        <p>Although the story is told primarily through audio soundbites, characters also send you text, audio, and location messages, and you can accept or decline paths in a choose-your-adventure style. Check out the app on the <a href="#" target="_blank" >app store</a>.</p>
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
  title: "The Exchange - IOS App",
  date: "2015-06-01T22:12:03.284Z"
}