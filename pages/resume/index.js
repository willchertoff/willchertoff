import React, { Component } from 'react'
import { rhythm } from 'utils/typography'
import Image from '../../components/Image'

class Post extends Component {
  render () {
    return (
      <div>
        <Image
          src="profile-pic.jpeg"
          style={{
            height: `${rhythm(6)}`,
            display: 'block',
            margin: `${rhythm(2)} auto`,
            borderRadius: '50%'
          }}
        />
        <h1>Will Chertoff</h1>
        <h3>Full Stack Engineer</h3>
        <p style={{marginBottom: 0}}>Phone: 913-660-8876</p>
        <p style={{marginBottom: 0}}>Email: willchertoff@gmail.com</p>
        <p style={{marginBottom: 0}}>Web: willchertoff.com</p>
        <h2>Work Experience</h2>
        <div>
          <h3>Health Advocacy Partners</h3>
          <span>Senior Web Developer</span>
          <span>Portland, Oregon 2016 - Present</span>
          <p>Full Stack Developer for custom Drupal 7 build. Responsibilities included site maintenance, new feature development and user support. Designed and built two pages which received record breaking traffic.</p>
        </div>
        <div>
          <h3>Goat Digital</h3>
          <span>Full Stack Engineer</span>
          <span>Portland, Oregon 2016</span>
          <p>Full Stack Developer for custom Drupal 7 build. Responsibilities included site maintenance, new feature development and user support. Designed and built two pages which received record breaking traffic.</p>
        </div>
        <div>
          <h3>National Psoriasis Foundation</h3>
          <span>Full Stack Engineer</span>
          <span>Portland, Oregon 2015 - 2016</span>
          <p>Full Stack Developer for custom Drupal 7 build. Responsibilities included site maintenance, new feature development and user support. Designed and built two pages which received record breaking traffic.</p>
        </div>
        <div>
          <h3>Oregon Health and Science University</h3>
          <span>Full Stack Engineer</span>
          <span>Portland, Oregon 2015</span>
          <p>Remodeled both back-end (php) and front-end infrastructure for AcademicTree.org. Designed and coded user experience for site, increasing views and traffic (HTML5,CSS,JS). Managed MySQL database design consisting of over 100,000 records. Consistently responded to site requests from the community.</p>
        </div>
        <div>
          <h3>Black and Veatch</h3>
          <span>SMART ANALYTICS INTERN</span>
          <span>Overland Park, Kansas 2014</span>
          <p>Performed energy modeling, measurement and verification for over 60 combined generation assets. Conducted wind and site predictive analyses, including determination of wind resource and site characteristics. Identified energy savings opportunities and made recommendations to achieve more energy efficient operation. Professionally documented plans and results, presenting findings and recommendations.</p>
        </div>     
        <h2>Known Technologies</h2>
        <p><b>Client-Facing</b></p>
        <ul>
          <li>Javascript ES6</li>
          <li>React JS</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>HTML5</li>
        </ul>
        <p><b>Server</b></p>
        <ul>
          <li>Node JS</li>
          <li>PHP</li>
          <li>Ruby</li>
        </ul>
        <p><b>Database</b></p>
        <ul>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
        <p><b>Workflow</b></p>
        <ul>
          <li>Git</li>
          <li>Jira</li>
          <li>Basecamp</li>
        </ul>
      </div>
    )
  }
}

export default Post

exports.data = {
  title: "Resume",
  path: "/resume/"
}