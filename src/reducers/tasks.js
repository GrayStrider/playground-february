const def = {
  1: {
    id: 1,
    content: 'Buy milk',
    priority: 1,
    tags: ['home', 'groceries'],
  },
  2: {
    id: 2,
    content: 'Buy cat food',
    priority: 2,
    tags: ['home', 'pets'],
  },
  3: {
    id: 3,
    content: 'Launch the site',
    priority: 4,
    tags: ['business', 'WebDev'],
  },
};

const tasks = (state = def, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tasks;
