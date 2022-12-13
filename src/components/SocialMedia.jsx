import React from 'react'
import {BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href='https://www.linkedin.com/in/sahibpreet-singh-02706a223/' target='_blank'> <BsLinkedin /></a> 
        </div>
        <div>
            <a href='https://github.com/Sahib-Aujla' target='_blank'><BsGithub /> </a> 
        </div>
        <div>
           <a href='https://instagram.com' target='_blank'><BsInstagram /></a> 
        </div>
    </div>
  )
}

export default SocialMedia