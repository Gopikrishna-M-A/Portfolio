import React from 'react'
import Skill from './Skill/Skill'
import ResumeButton from './ResumeButton/ResumeButton'

export default function About() {
  return (
    <div className='about'>
        <h1 className='title'>Hi, I’m Gopikrishna</h1>
        <div className="para">A web developer in kochi </div>

        <h2 className='title skill-title'>Skills</h2>
        
        <div className='skill-wrapper'>
        <Skill text="Node JS"></Skill>
        <Skill text="Mongo DB"></Skill>
        <Skill text="React"></Skill>
        <Skill text="Git"></Skill>
        <Skill text="Express"></Skill>
        <Skill text="Figma"></Skill>
        <Skill text="React"></Skill>
        <Skill text="Three Js"></Skill>
        <Skill text="Tailwind CSS"></Skill>
        <Skill text="Ant Design"></Skill>
        </div>
        <ResumeButton/>
    </div>
  )
}
