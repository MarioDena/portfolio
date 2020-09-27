import recipi from '../assets/recipi.png';
import rpg from '../assets/rpg.png';
import book from '../assets/bookstore.png';
import blog from '../assets/blog.png';
import bot from '../assets/bot.png';
import list from '../assets/list.png';

const projects = [
  {
    title: 'BLOG',
    description: 'A personal blog built with Jekyll as a static site builder and markdown for content creation.',
    imageURL: blog,
    projectLink: 'https://mariodena.github.io/blog/',
    github: 'https://github.com/MarioDena/blog',
    tech: ['Jekyll', 'Ruby', 'NPM', 'Shell', 'Markdown'],
  },
  {
    title: 'Bookstore CMS',
    description: `This project is a pure Javascript game DEMO (Phaser), using API's to store and retrieve scores.`,
    imageURL: book,
    projectLink: '',
    github: '',
    tech: ['Javascript', 'React', 'Redux', 'SASS', 'Bootstrap'],
  },
  {
    title: 'RPG DEMO',
    description: `This project is a pure Javascript game DEMO (Phaser), using API's to store and retrieve scores.`,
    imageURL: rpg,
    projectLink: '',
    github: '',
    tech: ['E6S', 'Javascript', 'Phaser', 'Webpack'],
  },
  {
    title: 'DODOIST',
    description: `A colaborative project for a TODO list, build with pure Javascript/E6S works using the local storage on the web-browser.`,
    imageURL: list,
    projectLink: '',
    github: '',
    tech: ['Javascript', 'Bootstrap', 'Local Storage'],
  },
  {
    title: 'RECIPI',
    description: `Recipi is a simple project made to demostrate the usage of API's on a React-Redux enviroment.`,
    imageURL: recipi,
    projectLink: '',
    github: '',
    tech: ['Javascript', 'React', 'Redux', 'Mobile', 'Axios', 'Bootstrap'],
  },
  {
    title: 'Twitter Bot',
    description: 'A bot that opens up a browser, sing in to Twitter, search for a topic and likes tweets. (Be aware that this bot can get your account banned)',
    imageURL: bot,
    projectLink: '',
    github: '',
    tech: ['Phyton', 'Selenium'],
  },
];
const projectReducer = (state = projects, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;
