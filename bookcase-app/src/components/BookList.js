import React from 'react';

function BookList(props) {
  return (
    <div> 
      <h1> Rebecca's e-Book Library</h1>
      <div key="Booklist" className="booklist-container">
        {props.children}
      </div>
      </div>
  );
}
export default BookList