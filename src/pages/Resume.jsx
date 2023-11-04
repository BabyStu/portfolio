import React from 'react';
import Job from '../components/Job';

export default function Resume() {

  const jobs = [
    {
      jobTitle: 'Revenue Audit Clerk',
      company: 'Caesars Entertainment',
      dates: 'October 2022 to May 2023',
      duties: [
        'Audit and account for all control documents and prepare exception reports for errors',
        'Prepare journal entries to record daily revenues and expenses',
        'Investigate and report discrepancies determined through audit process',
        'Responsible for ensuring regulatory compliance within area of responsibility'
      ]
    },
    {
      jobTitle: 'Tax Preparer',
      company: 'Jackson Hewitt',
      dates: 'December 2020 to October 2022',
      duties: [
        'Utilized tax preparation software to prepare tax returns for individuals and businesses',
        'Advised clients of their rights and responsibilities as taxpayers',
        'Exercised due diligence while preparing returns',
        'Resolved customer concerns and complaints',
        'Ensured proper credits, deductions, and tax liabilities were applied to returns, according to Publication 17 Federal Tax Code'
      ]
    },
    {
      jobTitle: 'Forklift Operator',
      company: 'HNI Corporation',
      dates: 'June 2019 to November 2020',
      duties: [
        'Operated forklift to move materials throughout warehouse',
        'Receive finished goods from regional distribution facilities',
        'Ensured materials were properly stored and accounted for',
        'Maintained a safe and clean work environment',
        'Performed other duties as assigned'
      ]
    },
    {
      jobTitle: 'Universal Banker',
      company: 'Walcott Trust and Savings Bank',
      dates: 'February 2018 to June 2019',
      duties: [
        'Responsible for detailed knowledge on all aspects of retail banking, including teller activities, personal banking and customer service',
        'Provide daily reports to the area director with breakdowns of daily activity of cash flows',
        'Assisted customers with opening new accounts and applying for loans',
        'Processed deposits and withdrawals',
        'Balanced cash drawer at the end of each day'
      ]
    }
  ];

  const skills = [
    'JavaScript',
    'SQL',
    'NoSQL',
    'React',
    'HTML',
    'CSS'
  ];

  const education = [
    {
      school: 'Western Illinois University',
      location: 'Macomb, IL',
      degree: 'Bachelor of Accounting',
      graduationDate: 'May 2020'
    },
    {
      school: 'Scott Community College',
      location: 'Bettendorf, IA',
      degree: 'Associate of Arts',
      graduationDate: 'May 2017'
    },
    {
      school: 'Northwestern University',
      location: 'Evanston, IL',
      degree: 'Certificate of Full Stack Web Development',
      graduationDate: 'November 2023'
    }
  ];


  return (
    <div>
      <section>
        <h3 className='center title'>Experience</h3>
        {jobs.map((job, index) => (
          <Job key={index} {...job} />
        ))}
      </section>
      <section className='flexContainer'>
        <div>
          <h3 className='center title'>Languages</h3>
          <ul className='card'>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='center title'>Education</h3>
          {education.map((edu, index) => (
          <Job key={index} {...edu} />
        ))}
        </div>
      </section>
    </div>
  );
}
