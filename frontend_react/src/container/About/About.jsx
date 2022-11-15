import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images} from '../../constants'

// import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
// import { urlFor, client } from '../../client';

const abouts = [{
  title: 'UI/UX Design', description: 'I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.'
  , imgUrl: images.about06
},
{title: 'Web Development', description: 'I am good web developer.' , imgUrl: images.about01},
{title: 'Mobile Development', description: 'I am good mobile developer.' , imgUrl: images.about02},
{title: 'Graphic Design', description: 'I am good graphic designer.' , imgUrl: images.about03},
{title: 'Digital Marketing', description: 'I am good digital marketer.' , imgUrl: images.about04},
{title: 'Branding', description: 'I am good brander.' , imgUrl: images.about05},
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   // client.fetch(query).then((data) => {
  //   //   setAbouts(data);
  //   // });
  // }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default 
  About;
