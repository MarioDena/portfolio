const links = [
  { ref: 'Index', name: 'HOME' },
  { ref: 'Projects', name: 'PROJECTS' },
  { ref: 'About', name: 'ABOUT' },
  { ref: 'Contact', name: 'CONTACT' },
];

const linksReducer = (state = links, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default linksReducer;
