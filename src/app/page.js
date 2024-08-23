import { Fragment } from "react";
import dynamic from "next/dynamic";
import About from "../sections/about";
import Education from "../sections/education";
import Experience from "../sections/experience";
const Navbar = dynamic(() => import("../layout/navbar/Navbar"))
const Footer = dynamic(() => import("../layout/footer/Footer"))
const Intro = dynamic(() => import("../sections/Intro"))
const Skills = dynamic(() => import("../sections/Skills"))
const Projects = dynamic(() => import("../sections/Projects"))
const SendMail = dynamic(() => import("../utils/SendMail"))
const SocialMedia = dynamic(() => import("../utils/SocialMedia"))

const Home = () => {
  return (
    <Fragment>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />
          {/* LatestBlog */}
          {/* <LatestBlogs /> */}
          {/* Apps */}
          {/* <Apps /> */}
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
