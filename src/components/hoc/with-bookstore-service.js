import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-contex';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (<Wrapped {...props} bookStoreService={bookstoreService} />);
          }
        }
      </BookstoreServiceConsumer>
    )
  }
};

export default withBookstoreService;