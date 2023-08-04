import React from 'react'
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
export default function Contact() {
  return (
    <div className='contact'>  
         <h2 className='title contact-title'>Let's talk</h2>

         <div className='contact-wrapper'>
          <a className='links' href="mailto:gopikrishna6003@gmail.com" rel="noreferrer" target="_blank"><h3 className='email'>gopikrishna6003@gmail.com</h3></a>
          <div className='links-wrapper'> 
          <a className='links' href="https://github.com/Gopikrishna-M-A" rel="noreferrer" target="_blank"><GithubOutlined className='social-icon' /></a>
          <a className='links' href="https://twitter.com/Gopikrishna6003" rel="noreferrer" target="_blank"><TwitterOutlined className='social-icon' /></a>
          <a className='links' href="https://www.linkedin.com/in/gopikrishna6003" rel="noreferrer" target="_blank"><LinkedinOutlined className='social-icon' /></a>
          </div>
         </div>
    </div>
  )
}
