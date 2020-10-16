import recipi from '../assets/recipi.png';
import rpg from '../assets/rpg.png';
import book from '../assets/bookstore.png';
import blog from '../assets/blog.png';
import bot from '../assets/bot.png';
import list from '../assets/list.png';

const projects = [
  {
    title: 'BLOG',
    description:
      'A personal blog built with Jekyll as a static site builder and markdown for content creation.',
    imageURL: blog,
    projectLink: 'https://mariodena.github.io/blog/',
    github: 'https://github.com/MarioDena/blog',
    tech: ['Jekyll', 'Ruby', 'NPM', 'Shell', 'Markdown'],
  },
  {
    title: 'RECIPI',
    description: `Recipe book using API calls from axios, build with react, redux, hooks and react router.`,
    imageURL: recipi,
    projectLink: 'https://infinite-atoll-25264.herokuapp.com/',
    github: 'https://github.com/MarioDena/recipi/tree/development',
    tech: ['Javascript', 'React', 'Redux', 'Materialize'],
  },
  {
    title: 'RPG DEMO',
    description: `This project is a pure Javascript game DEMO (Phaser), using APIs to store and retrieve scores.`,
    imageURL: rpg,
    projectLink: 'https://mariodena.github.io/RPGdemo/',
    github: 'https://github.com/MarioDena/JSCapstone',
    tech: ['E6S', 'Javascript', 'Phaser', 'Webpack'],
  },
  {
    title: 'DODOIST',
    description: `A collaborative project for a TODO list, build with pure Javascript/E6S works using the local storage on the web-browser.`,
    imageURL: list,
    projectLink: '',
    github: 'https://github.com/Luzaks/TodoList',
    tech: ['Javascript', 'Bootstrap', 'Local Storage'],
  },
  {
    title: 'Bookstore CMS',
    description: `A simple yet beautiful and easy to navigate DEMO of a bookstore CMS built with react and redux. Stateless components, highly customizable.  `,
    imageURL: book,
    projectLink: 'https://cms-mariodena.herokuapp.com/',
    github: 'https://github.com/MarioDena/bookstore-cms',
    tech: ['Javascript', 'React', 'Redux', 'Bootstrap'],
  },
  {
    title: 'Twitter Bot',
    description:
      'A bot that opens up a browser, sign-in to Twitter, search for a topic, and likes tweets. (Be aware that this bot can and will get your account banned).',
    imageURL: bot,
    projectLink: '',
    github: 'https://github.com/MarioDena/TwitterBot',
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
