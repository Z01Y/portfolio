import React from 'react';
import AboutImage from '../../assets/ME.png';
import CV_SWE from '../../assets/Ziyue(Zoey)ZhangResume_SWE.pdf';
import CV_PM from '../../assets/Ziyue(Zoey)ZhangResume_PM.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I have always had a deep passion for building projects. Throughout
            my college years and after it, I gained more than 3 years of
            experience in web development and I am constantly learning new
            skills in this field. Apart from web development, I am also
            interested in product management and I am actively practicing it. My
            motivation to achieve more is limitless!
          </p>
          <p>
            Greetings! My name is Ziyue Zhang, and I am from Shanghai, China.
            You may refer to me as Zoey. I recently graduated with a Bachelor's
            degree in Informatics in 2022. My career path is focused on
            full-stack web development and product management, and I have
            experience in both areas. Get in touch with me and Check out my
            resume and projects below!
          </p>
          <a href={CV_SWE} download className="btn primary">
            Download SWE CV <HiDownload />
          </a>
          <a href={CV_PM} download className="btn primary">
            Download PM CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
