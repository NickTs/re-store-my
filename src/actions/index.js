
const booksLoaded = (newBnooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBnooks
  };
};

export {
  booksLoaded
};