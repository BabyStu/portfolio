import React from 'react';

function Project({ name, description, technologies, codeLink, imageUrl, projectLink }) {
  return (
    <div className="projectCard">
      <h3 className="projectTitle"><span className='underline'>{name}</span></h3>
      <p className="textSize"><span className='underline biggerText'>Description: </span>{description}</p>
      <p className="textSize"><span className='underline biggerText'>Tech Used: </span>{technologies}</p>
      <div className="project anchors">
        <img src={imageUrl} alt={name} className="projectImage" />
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel=""
            className=" hover:underline "
          >
            Project
          </a>
        )}
      </div>
      <div className='container anchors'>
      {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel=""
            className=" hover:underline "
          >
            Code
          </a>
        )}      </div>
    </div>
  );
};

export default Project;