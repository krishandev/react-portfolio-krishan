import React from 'react'
import mypic from '../assets/nobg1080.png'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={mypic} alt='Krishan Dev'/>
            <h2>Krishan Dev</h2>
            <p>I have built this website using React Js. This is my fifth project.</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href='https://github.com/krishandev?tab=repositories' target={'blank'}><AiFillGithub/></a>
                <a href='https://www.facebook.com/krishan.pranami/' target={'blank'}><AiFillFacebook/></a>
                <a href='https://www.linkedin.com/in/krishan-dev/' target={'blank'}><AiFillLinkedin/></a>
            </article>
        </aside>
        <a href='#home'>
         <AiOutlineArrowUp/>
        </a>
    </footer>
  )
}

export default Footer