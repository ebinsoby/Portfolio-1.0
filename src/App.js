import React from "react";
import DevIcon from "devicon-react-svg";
import Navbar from "./Components/Navbar";
import Ebin from "./assets/Ana_B&W.png";
import { SiJavascript } from "react-icons/si";
import materialui from "./assets/materialui.png";
import RestAPI from "./assets/RestfulAPI.png";
import ResponsiveDesign from "./assets/responsive-design.png";
import figma from "./assets/figma.png";
import angular from "./assets/angular.png";
import stenciljs from "./assets/stencil-js.png";
import storybook from "./assets/storybook.png";
import typescript from "./assets/typescript.png";
import { FaBitbucket } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import mcap from "./assets/MCAP_mockup.png";
import pbs from "./assets/PBS_mockup.png";
import alertdriving from "./assets/Alertdriving_mockup.png";
import fc from "./assets/FC_mockup.png";
import CC from "./assets/CC_mockup.png";
import wipro from "./assets/Wipro_mockup.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import aboutImg from "./assets/computerDraw.png";
import "./App.css";

function App() {
  const devIconStyle = {
    width: "150px",
  };
  return (
    <div className="App">
      <Navbar />
      <div className="navbar-space"></div>
      {/* Landing Page */}
      <header className="App-header">
        <div className="intro">
          <h1 className="intro-title">
            Hello, my name is Ebin Soby and I am a Senior Software Engineer.
          </h1>
          <img src={Ebin} className="profile-picture" alt="Profile picture" />
          <div>
            <a href="#about">
              <button
                type="button"
                className="btn btn-primary border border-secondary m-5"
              >
                Learn more
              </button>
            </a>
          </div>
        </div>
      </header>
      {/* About */}
      <section id="about">
        <div className="navbar-space"></div>
        <div className="about">
          <h1>About me</h1>
          <div className="container text-left pt-3">
            <p className="font-weight-normal">
              Passionate <b class="font-weight-bold">Senior Software Engineer</b> with a demonstrated
              history of working in Products firms, Consulting firms & Startups
              with 6 years of software development experience. Proficient in
              translating designs & wireframes into high quality code and
              writing interface code with JavaScript, React.js & Vue.js
              workflows.
            </p>
            <p className="font-weight-normal">
              I not only have Frontend Engineering knowledge but I also have
              created user interfaces and experiences during career. I have a great set of soft skills and design sense that allow me to create functional and visually
              pleasing interfaces that empathize with and prioritize the user
              experience. I am eager to join a team where I can put both my
              technical, design and people skills to work.
            </p>
            <p className="font-weight-normal">
              I am looking forward to being part of a team where I can continue
              to grow my development and design skills.
            </p>
            {/* <div className="text-center"> */}
            <img src={aboutImg} className="mx-auto d-block w-25 h-100" />
            {/* </div> */}
            <blockquote class="blockquote text-center">
              <div className="container pb-0 mb-0 pt-0">
                <p class="mb-0 mt-2 mr-5 ml-5">
                  “What I love about both programming and music is that they
                  enable you to build incredibly creative, complex, and
                  beneficial things seemingly from thin air -- no additional
                  materials required, just your brain and a keyboard in front of
                  you.”
                </p>
                <footer class="blockquote-footer">
                  <cite title="Source Title">Peter Borum</cite>
                </footer>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience">
        <div className="navbar-space"></div>
        <div className="experience">
          <h1>Work experience</h1>
          <p className="font-weight-normal">Check out some of my latest work</p>
          <div className="container-fluid">
            <div className="row">
            <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">MCAP</h3>
                  <img
                    className="project-img"
                    src={mcap}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title"> Capital Markets | Mortgage Finance</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Senior Software Engineer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    MCAP is Canada’s largest independent Mortgage Finance Company. MCAP originates, trades, securitizes and services residential, construction and commercial assets on behalf of institutional investors.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.mcap.com/"
                      target="_blank"
                      class="card-link"
                    >
                      MCAP
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">alertdriving</h3>
                  <img
                    className="project-img"
                    src={alertdriving}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Driver Risk Management</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Frontend Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    alertdriving is the global leader in driver risk management. alertdriving has trained millions of professional drivers around the world using FleetDefense, the industry's only behaviour-based risk monitoring solution.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.alertdriving.info/"
                      target="_blank"
                      class="card-link"
                    >
                      alertdriving®
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">PowerBand Solutions</h3>
                  <img
                    className="project-img"
                    src={pbs}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Fintech | Automotive Industry</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Frontend Developer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    PowerBand Solutions Inc., listed on the TSX Venture Exchange and the OTCQB markets, is a fintech provider disrupting the automotive industry. PowerBand’s integrated, cloud-based transaction platform facilitates transactions amongst consumers, dealers, funders, and manufacturers (OEMs). It enables them to buy, sell, trade, finance, and lease new and used, electric and non-electric vehicles, on any phone, tablet or PC connected to the internet. PowerBand’s transaction platform – being trademarked under DRIVRZ™ – is being made available across North American and global markets.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://powerbandsolutions.com/"
                      target="_blank"
                      class="card-link"
                    >
                      PowerBand Solutions Inc. (TSXV:PBX) (OTCQB:PWWBF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">FiComm Technologies</h3>
                  <img
                    className="project-img"
                    src={fc}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">IoT</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Software Engineer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    A manufacturer specializing in IoT products dedicated to improving health and safety and reducing environmental impact.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://ficomm.ca/"
                      target="_blank"
                      class="card-link"
                    >
                      FiComm Technologies
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">Cambrian College</h3>
                  <img
                    className="project-img"
                    src={CC}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">College of applied arts and technology</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Peer Tutor
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    Cambrian College is a college of applied arts and technology in Greater Sudbury, Ontario, Canada. Established in 1967, and funded by the province of Ontario.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://cambriancollege.ca/"
                      target="_blank"
                      class="card-link"
                    >
                      Cambrian College
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card text-dark h-100">
                  <h3 className="card-header">Wipro</h3>
                  <img
                    className="project-img"
                    src={wipro}
                    alt="Card image"
                  />
                  <div className="card-body">
                    <h5 class="card-title">Technology services and Consulting</h5>
                    <h6 class="card-subtitle text-muted">
                      My role: Project Engineer
                    </h6>
                  </div>
                  <div className="card-body">
                    <p className="font-weight-normal">
                    Wipro Limited (NYSE: WIT, BSE: 507685, NSE: WIPRO) is a leading technology services and consulting company focused on building innovative solutions that address clients’ most complex digital transformation needs.
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.wipro.com/"
                      target="_blank"
                      class="card-link"
                    >
                      Wipro
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="skills">
        <div className="navbar-space"></div>
        <div className="skills">
          <div className="container">
            <h1>The Tech Stack</h1>
            <p className="font-weight-normal">
              Being a programmer means being a life-long learner and that is one
              of the things that attracted me to it in the first place. If I
              join your team, I will bring not only the skills listed below but
              some pretty amazing people and communication skills as well (I've
              been called "the glue" that sticks a team together in the past).
              Additionally, you can count on me swiftly and eargerly picking up
              new technologies constantly.
            </p>
            <div className="container-fluid p-5">
              <DevIcon style={devIconStyle} icon="react" />
              <SiJavascript size={120} className="text-primary" />
              <DevIcon style={devIconStyle} icon="css3" />
              <DevIcon style={devIconStyle} icon="html5" />
              <img src={angular} style={devIconStyle} />
              <img src={typescript} style={devIconStyle} />
              <DevIcon style={devIconStyle} icon="nodejs_small" />
              <img src={stenciljs} style={devIconStyle} />
              <img src={storybook} style={devIconStyle} />
              <img src={RestAPI} style={devIconStyle} />
              <img src={ResponsiveDesign} style={devIconStyle} />
              <img src={materialui} style={devIconStyle} />
              <DevIcon style={devIconStyle} icon="bootstrap" />
              <DevIcon style={devIconStyle} icon="sass" />
              <DevIcon style={devIconStyle} icon="npm" />
              <DevIcon style={devIconStyle} icon="git" />
              <DevIcon style={devIconStyle} icon="terminal" />
              <DevIcon style={devIconStyle} icon="github_badge" />
              <DevIcon style={devIconStyle} icon="visualstudio" />
              <FaBitbucket size={120} className="text-primary" />
              <DevIcon style={devIconStyle} icon="trello" />
              <DevIcon style={devIconStyle} icon="apple" />
              <DevIcon style={devIconStyle} icon="windows" />
              <SiAdobexd size={120} className="text-primary" />
              <img src={figma} style={devIconStyle} />
              <DevIcon style={devIconStyle} icon="photoshop" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact">
        <div className="navbar-space"></div>
        <div className="contact">
          <div className="container-fluid">
            <h1>Are you interested in working with me?</h1>
            <p className="font-weight-normal p-3 m-5">
              You have learned a bit more about me and seen my most relevant
              skills and work experience. Maybe you are wondering if I would be
              a good culture fit at your company or if I am a good team player.{" "}
              <br />
              Let's connect and find out!
            </p>
            <div className="row p-3">
              <a
                className="col-sm"
                href="https://www.linkedin.com/in/ebinsoby/"
                target="_blank"
              >
                <FaLinkedin size={60} className="text-white" />
              </a>
              <a
                className="col-sm"
                href="https://github.com/ebinsoby"
                target="_blank"
              >
                <FaGithub size={60} className="text-white " />
              </a>
              {/* <a
                className="col-sm"
                href="mailto:anaberrocaldev@gmail.com"
              >
                <MdEmail size={60} className="text-white" />
              </a> */}
              {/* <a className="col-md-3 p-3" href="tel:9548512668">
                <FaPhoneAlt size={60} className="text-white" />
              </a> */}
            </div>
            {/* <h5 className="text-white p-3 m-5">
              Want to learn more? Take a look at my resume{" "}
              <a
                className="text-white"
                href="https://drive.google.com/file/d/1yK_S8n7ugp28GkZ8i47vbED2_O0dDXhU/view?usp=sharing"
                target="_blank"
              >
                <u>here</u>
              </a>
              .
            </h5> */}
          </div>
        </div>
        <div class="card-footer text-muted bg-primary">
          <h6 className="text-white">
            Made with <FaReact size={30} /> by Ebin Soby.
          </h6>
        </div>
      </section>
    </div>
  );
}

export default App;
