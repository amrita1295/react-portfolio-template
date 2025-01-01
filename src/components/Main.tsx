import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/user-attachments/assets/7c083ece-1460-40d3-9e51-e8c795841c3e" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/amrita1295" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amritasj26/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Amrita Singh</h1>
          <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I’m focused on building accessible and human-centered products.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/amrita1295" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/amritasj26/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;