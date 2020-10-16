const links = [
  { ref: 'Contact', name: 'CONTACT' },
  { ref: 'About', name: 'ABOUT' },
  { ref: 'Projects', name: 'PROJECTS' },
  { ref: 'Index', name: 'HOME' },
];

const linksReducer = (state = links, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default linksReducer;
