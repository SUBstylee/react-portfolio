import './Experience.scss';
// import {BsPatchCheckFill} from 'react-icons/bs';
// front icons
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {DiSass} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {BsFillBootstrapFill} from 'react-icons/bs';
import {SiTailwindcss} from 'react-icons/si';
// back icons
import {FaNodeJs} from 'react-icons/fa';
import {SiFlask} from 'react-icons/si';
import {FaPython} from 'react-icons/fa';
import {SiPhp} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiPostgresql} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
// design icons
import {SiAdobephotoshop} from 'react-icons/si';
import {SiAdobeillustrator} from 'react-icons/si';
import {SiAdobepremierepro} from 'react-icons/si';
import {SiAdobeaudition} from 'react-icons/si';
import {SiAdobeaftereffects} from 'react-icons/si';
import {SiFigma} from 'react-icons/si';
import {BsFillPatchCheckFill} from 'react-icons/bs';
// dev tools icons
import {SiGit} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';
import {SiVisualstudiocode} from 'react-icons/si';
import {SiJetbrains} from 'react-icons/si';
import {SiHeroku} from 'react-icons/si';
import {SiBootstrap} from 'react-icons/si';
import {SiCpanel} from 'react-icons/si';
// misc icons
import {CgMoreR} from 'react-icons/cg';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiSass className='experience__details-icons'/>
              <div>
                <h4>SASS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBootstrapFill className='experience__details-icons'/>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icons'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <CgMoreR className='experience__details-icons'/>
              <div>
                <h4>And More!</h4>
                <small className='text-light'><a href="/#contact">Ask me about it!</a></small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFlask className='experience__details-icons'/>
              <div>
                <h4>Flask</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaPython className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPhp className='experience__details-icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className='experience__details-icons'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icons'/>
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <CgMoreR className='experience__details-icons'/>
              <div>
                <h4>And More!</h4>
                <small className='text-light'><a href="/#contact">Ask me about it!</a></small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Backend */}
        <div className="experience__backend">
          <h3>Design</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiAdobephotoshop className='experience__details-icons'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAdobeillustrator className='experience__details-icons'/>
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAdobepremierepro className='experience__details-icons'/>
              <div>
                <h4>Premier</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAdobeaudition className='experience__details-icons'/>
              <div>
                <h4>Audition</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAdobeaftereffects className='experience__details-icons'/>
              <div>
                <h4>AfterEffects</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiFigma className='experience__details-icons'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Camtasia</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <CgMoreR className='experience__details-icons'/>
              <div>
                <h4>And More!</h4>
                <small className='text-light'><a href="/#contact">Ask me about it!</a></small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Design */}
        <div className="experience__backend">
          <h3>Dev Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiGit className='experience__details-icons'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGithub className='experience__details-icons'/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiVisualstudiocode className='experience__details-icons'/>
              <div>
                <h4>VS Code</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJetbrains className='experience__details-icons'/>
              <div>
                <h4>JetBrains</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiHeroku className='experience__details-icons'/>
              <div>
                <h4>Heroku</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiBootstrap className='experience__details-icons'/>
              <div>
                <h4>Bootstrap Studios</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCpanel className='experience__details-icons'/>
              <div>
                <h4>Cpanel</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <CgMoreR className='experience__details-icons'/>
              <div>
                <h4>And More!</h4>
                <small className='text-light'><a href="/#contact">Ask me about it!</a></small>
              </div>
            </article>
          </div>
        </div>
        {/* End of Dev Tools */}
      </div>
    </section>
  )
}

export default Experience