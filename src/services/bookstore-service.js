
export default  class BookstoreService {
  static getBooks() {
    return [
      { id: 1,
        title: 'title1',
        author: 'author1'
      },
      { id: 2,
        title: 'title_2',
        author: 'author_2'
      }
    ];
  }
}