import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";



const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    // Use encodeURI to handle spaces and special characters in the filename
    link.href = encodeURI('/Siji Adaramaja-My Resume.pdf');
    link.download = 'Siji_Adaramaja_Resume.pdf'; // Suggested filename for download without spaces
    document.body.appendChild(link); // Append to body
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Clean up and remove the link
  };

  return (
    <section id="home" className="home">
       <Animate
        play
        duration={1.5}
        delay={0.5}
        start={{
          opacity: 0,
        }}
        end={{
          opacity: 1,
        }}
      >
        <div className="home__text-wrapper">
          <h1>
            Hello, I'm Siji.
            <br />
            Software developer
          </h1>
        </div>
      </Animate>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Contact Me</button>
          <button onClick={handleDownloadResume}>Download Resume</button>
        
        </div>
      </Animate>
    </section>
  );
};
export default Home;
