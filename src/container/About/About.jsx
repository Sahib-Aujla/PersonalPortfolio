import React,{useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import'./About.scss'
import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor,client } from '../../client'
// const abouts=[
//   {title:'Web Development', description: 'Jatt ohna vicho loki jihnu siraa kehnde ne',imgUrl:images.about01},
//   {title:'OOPS', description: 'Jatt ohna vicho loki jihnu siraa kehnde ne',imgUrl:images.about02},
//   {title:'Data Structures and Algorithms', description: 'Jatt ohna vicho loki jihnu siraa kehnde ne',imgUrl:images.about03},
//   {title:'UI/UX', description: 'Jatt ohna vicho loki jihnu siraa kehnde ne',imgUrl:images.about04},
// ]

const About = () => {

  const [abouts, setAbouts] = useState([]);

  useEffect(()=>{
    const query= '*[_type == "abouts"]'

    client.fetch(query)
      .then((data)=>{
        setAbouts(data)
      })

      
  },[])

  return (
    <>
      <h2 className='head-text'>I know that <span>Good Design</span><br/>means <span>Good Business</span>
      </h2>

      <div className='app__profiles'>
      {abouts.map((about,index) => (
        <motion.div
        whileInView={{opacity:1}}
        whileHover={{scale:1.1}}
        transition={{ duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        kwy={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
          <p className="p-text" style={{marginTop:10}}>{about.description}</p>
        </motion.div>
      ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
  "app__whitebg"
  )