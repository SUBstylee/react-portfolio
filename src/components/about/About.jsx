import './About.scss';
import ME2 from '../../assets/jjt008.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Who Are You?</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME2} alt="Me again" className='about__me-image' />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years Work</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            Hi, I'm Jeremy. I'm an American freelancer currently based in Taiwan. I mainly work with clients based in the United States, and am willing to relocate if the right opportunity presents itself. I am not limited to that region however, so no matter where you are, feel free to contact me to discuss your project details. My hours and rates are highly flexible, and are decided on a case by case basis.
          </p>
          <p>
            I have a diverse set of <a href="/#experience">skills</a> and am always ready to learn whatever it takes to get the job done correctly. I work primarily with the technologies listed below, but am by no means limited to them. I work on every aspect of web development, from concept to deployment. Whether you need help with front-end, back-end, UI/UX, editing photos, etc., I am ready to take on the challenge.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  );
};

export default About;