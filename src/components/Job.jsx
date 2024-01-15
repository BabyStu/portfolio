import React from 'react';

function Job({ jobTitle, company, dates, duties, skills, school, location, degree, graduationDate }) {
    return (
        <div className="border resumeText">
           { jobTitle && <><p className=""><b>{jobTitle}, {company}, {dates}</b></p>
            <ul>
                {duties && duties.map((duty, index) => (
                    <li key={index}>{duty}</li>
                ))}
            </ul></>}
            {skills && <div className="">
                    <p className="">{skills}</p>
                </div>}
            {school && <div>
                <div>
                    <p className="">{school}, {location}</p>
                </div>
                <li>
                    {degree}, {graduationDate}
                </li>
            </div>}
        </div>
    );
};

export default Job;