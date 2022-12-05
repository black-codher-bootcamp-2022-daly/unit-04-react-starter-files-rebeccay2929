import React from 'react';

function Booklist(props) {
  return (
      <div key="Booklist" className="booklist">
        {props.children}
      </div>
  );
}
export default BookList