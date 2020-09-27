const links = [
  { ref: '#', name: 'INDEX' },
  { ref: '#', name: 'PROJECTS' },
  { ref: '#', name: 'CONTACT' },
];

const linksReducer = (state = links, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default linksReducer;
