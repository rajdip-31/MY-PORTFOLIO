import React  from 'react'
import './Skills.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Skills = () => {




  return (
    <div>
      <div className="skills" id='skills'><h1>MY SKILLS</h1></div>
      
      <div className="mySkills">
        <div className="skill">
        <i className='bx bxl-c-plus-plus'></i>
        <div className="percentage">90%</div>
        <div className="skillName">C++</div>
        </div>
        <div className="skill">
        <i className='bx bxl-css3' ></i>
        <div className="percentage">90%</div>
        <div className="skillName">CSS</div>
        </div>
        <div className="skill">
        <i className='bx bxl-javascript' ></i>
        <div className="percentage">65%</div>
        <div className="skillName">JAVASCRIPT</div>
        </div>
        <div className="skill">
        <i className='bx bxl-react' ></i>
        <div className="percentage">60%</div>
        <div className="skillName">REACT</div>
        </div>
        <div className="skill">
        <i className='bx bxl-bootstrap' ></i>
        <div className="percentage">80%</div>
        <div className="skillName">BOOTSTRAP</div>
        </div>
        <div className="skill">
        <i className='bx bxl-mongodb' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">MONGODB</div>
        </div>
        <div className="skill">
        <i className='bx bxl-nodejs' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">NODEJS</div>
        </div>
        <div className="skill">
        <i className='bx bxl-tailwind-css' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">TAILWIND-CSS</div>
        </div>
        <div className="skill">
        <i className='bx bxl-visual-studio' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">VISUAL STUDIO</div>
        </div>
        <div className="skill">
        <i className='bx bxl-redux' ></i>
        <div className="percentage">50%</div>
        <div className="skillName">REDUX</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
