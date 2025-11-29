import React from "react";

const BookList = () => {
  const books = ["React Basics", "Learning TypeScript", "Advanced JavaScript"];
  return (
    <ol>
      {books.map(book => <li key={book}>{book}</li>)}
    </ol>
  );
};

export default BookList;
