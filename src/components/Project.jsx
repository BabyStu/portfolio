import React from 'react';

function Project({ name, description, technologies, imageUrl, projectLink }) {
  return (
    <div className="projectCard project border border-gray-300 rounded-md p-4 mb-8">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-800 text-xl mb-2">{description}</p>
      <p className="text-green-700 text-xl mb-2">Technologies used: {technologies}</p>
      <div className="overflow-hidden anchors">
        <img src={imageUrl} alt={name} className="projectImage max-w-full max-h-full h-auto" />
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel=""
            className=" hover:underline inline-block text-lg"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;