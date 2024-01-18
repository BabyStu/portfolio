import Project from '../components/Project';


export default function Portfolio() {

  const projects = [
    {
      name: 'Day Planner',
      description: 'This app is designed so that the user can input their daily schedule and save it to local storage.',
      technologies: 'HTML, CSS, JavaScript',
      imageUrl: 'https://github.com/BabyStu/calendar/blob/main/assets/screenshot.png?raw=true',
      projectLink: 'https://babystu.github.io/calendar/',
      codeLink: 'https://github.com/BabyStu/calendar',
    },
    {
      name: 'Tech Blog',
      description: 'This is a tech blog',
      technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku',
      imageUrl: 'https://raw.githubusercontent.com/BabyStu/techBlog/main/images/screenshot.png',
      projectLink: 'https://techblog-09-431b5b6e5f40.herokuapp.com/',
    },
    {
      name: 'JATE',
      description: 'Just Another Text Editor',
      technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku',
      imageUrl: 'https://raw.githubusercontent.com/BabyStu/textEditor/main/images/JATE.png',
      projectLink: 'https://quiet-spire-05804-7088b30d5c2f.herokuapp.com/',
    },
    {
      name: 'Password Generator',
      description: 'This is a basic password generator, it will generate a password based on the criteria you select.',
      technologies: 'HTML, CSS, JavaScript',
      imageUrl: 'https://github.com/BabyStu/pwdGenerator/raw/main/assets/pwdGenerator.png',
      projectLink: 'https://babystu.github.io/pwdGenerator/',
      codeLink: 'https://github.com/BabyStu/pwdGenerator.git',
    },
    
    
    {
      name: 'Forecast',
      description: 'This app is designed to give the user the current weather and a 5 day forecast for the city they search for.',
      technologies: 'HTML, CSS, JavaScript, OpenWeather API',
      imageUrl: 'https://github.com/BabyStu/forecast/raw/main/assets/screenshot.png',
      projectLink: 'https://babystu.github.io/forecast/',
      codeLink: 'https://github.com/BabyStu/forecast',
    },
    {
      name: 'Hobby House',
      description: 'This was a group project, we designed an app that allows the user to search for a hobby and find a group of people to do that hobby with.',
      technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Netlify, Heroku, Bcrypt, Dotenv, Express-Session, Express-Handlebars, MySQL2, Passport, Passport-Local, Sequelize',
      imageUrl: 'https://github.com/BabyStu/groupProject3/raw/main/assets/screenshot.png',
      projectLink: 'https://regal-sherbet-a80b23.netlify.app',
      codeLink: 'https://github.com/BabyStu/groupProject3',
    },
  ];

  return (
    <section className="">
      <h2 className="center projectBox font">Projects</h2>
      <div className="pContainer">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
};
