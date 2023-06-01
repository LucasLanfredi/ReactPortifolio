import React from "react";
import githubIcon from './icons/icons8-github-50.png';
import linkedinIcon from './icons/icons8-linkedin-50.png';
import curriculoIcon from './icons/icons8-google-docs-50.png';
import "./Header.css"

function Header({ greeting, jobTitle, professionalSummary }) {
  const handleClickGit = () => {
    window.open("https://github.com/LucasLanfredi", "_blank");
  };

  const handleClickLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/lucas-lanfredi-15ab6517a/",
      "_blank"
    );
  };

  const handleClickCurriculo = () => {
    window.open("https://www.example.com", "_blank");
  };

  return (
    <header>
      <h1>
        <p>{greeting}</p>
        <div>
        {jobTitle}
          <img
            src={githubIcon}
            alt="GitHub Icon"
            onClick={handleClickGit}
          />
          <img 
            src={linkedinIcon} 
            alt="ÍconeLinkedin" 
            onClick={handleClickLinkedin}
          />
          <img 
            src={curriculoIcon} 
            alt="ÍconeCurriculo" 
            onClick={handleClickCurriculo}
          />
          
        </div>
        <section>
        <p>{professionalSummary}</p>
        </section>
        
      </h1>
    </header>
  );
}

export default Header;
