import React from 'react';

function Project({ title, description, technologies, imageUrl, projectUrl }) {
    return (
    <div className="">
      <h3 className="">{title}</h3>
      <p className="">{description}</p>
      <p className="">Technologies: {technologies}</p>
      <img src={imageUrl} alt={title} className="max-w-full h-auto mb-4" />
      {projectUrl && (
        <a
          href={projectUrl}
          target="_blank"
          rel=""
          className=""
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default Project;