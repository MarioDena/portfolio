const links = [
  { ref: '#', name: 'Index' },
  { ref: '#', name: 'Projects' },
  { ref: '#', name: 'Contact' },
];

const linksReducer = (state = links, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default linksReducer;
