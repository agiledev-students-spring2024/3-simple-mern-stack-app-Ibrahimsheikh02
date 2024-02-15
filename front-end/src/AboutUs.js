
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({ paragraphs: [], imageUrl: '' });

  useEffect(() => {
    axios.get('/about-us')
      .then(response => {
        setAboutData(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {aboutData.imageUrl && <img src={aboutData.imageUrl} alt="About Us" />}
    </div>
  );
};

export default AboutUs;
