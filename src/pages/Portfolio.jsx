import Project from '../components/Project';

export default function Portfolio() {

  const projects = [
    {
      name: 'One Red Paperclip',
      description: 'This app is designed to be a trading website.',
      technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, MySQL, Sequelize, Handlebars.js, Heroku',
      imageUrl: 'https://raw.githubusercontent.com/sthogue/Online-marketplace/main/public/images/one-red-paperclip-5102fbf3bf3c.herokuapp.com_.png',
      projectLink: 'https://one-red-paperclip-5102fbf3bf3c.herokuapp.com',
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
    }
  ];

  return (
    <section className="p-4">
      <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
};
