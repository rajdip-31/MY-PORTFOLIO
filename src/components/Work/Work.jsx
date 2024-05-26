import React from 'react'
import './Work.css'

const Work = () => {
  return (
    <div className='works' id='works'>
      <div className="myProject">
      <div className="project-title"><i className="fa-solid fa-briefcase"></i><h1>MY PROJECTS</h1></div>
      <div className="projects">
        <a target ="blank" href="https://rajdip-31.github.io/STUDY-ABROAD-VENTURE/">
            <div className="project">
            <div className="duration">MARCH'24</div>
            <div className="projectName">STUDY ABROAD VENTURE</div>
            <div className="technology">HTML5, CSS3, JAVASCRIPT, BOOTSTRAP</div>
            </div></a>
        <a href="https://portfoliowebsite31.netlify.app/" target ="blank">
            <div className="project">
            <div className="duration">MAY'24</div>
            <div className="projectName">PORTFOLIO WEBSITE</div>
            <div className="technology">HTML5, CSS3, REACT, JAVASCRIPT, BOOTSTRAP</div>
            </div></a>
        <a href="https://rajdip-31.github.io/WEATHER-APP/" target ="blank">
            <div className="project">
            <div className="duration">MAY'24</div>
            <div className="projectName">WEATHER FORECAST WEBSITE</div>
            <div className="technology">HTML5, CSS3, JAVASCRIPT</div>
            </div></a>
                
      </div>
      </div>
    
      <div className="myEducation" id='education'>
      <div className="education-title"><i className="fa-solid fa-graduation-cap"></i><h1>MY EDUCATION</h1></div>
      <div className="educations">
        <div className="education">
            <div className="duration">2015-2019</div>
            <div className="projectName">JAWAHAR NAVODAYA VIDYALAYA</div>
            <div className="degree">10th</div>
        </div>
        <div className="education">
            <div className="duration">2019-2021</div>
            <div className="projectName">JAWAHAR NAVODAYA VIDYALAYA</div>
            <div className="degree">12th</div>
        </div>
        <div className="education">
            <div className="duration">2021-NOW</div>
            <div className="projectName">IIT KHARAGPUR</div>
            <div className="degree">B.tech</div>
        </div>      
       
      </div>
      </div>
    </div>
  )
}

export default Work
