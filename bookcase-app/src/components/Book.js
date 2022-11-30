import React from 'react';


function Book({book}) {
  const { title, authors } = book.volumeInfo;
  const { retailPrice } = book.saleInfo;
  console.log(book)
  return (
    <div style={{
      backgroundColor: 'pink'
    }}>
      <h3>Title: {title}</h3>
      <p>Author: {authors}</p>
      <p>{retailPrice && retailPrice.amount}</p>
    </div>
  );
}

export default Book;


// export const BookList = (props) =>
// {
//   return (
//     <main>
//       {props.books.map(
//         (books) =>
//         <Book books = {books}/>
//       )}
//     </main>
//   )
// }
// export default Book;
