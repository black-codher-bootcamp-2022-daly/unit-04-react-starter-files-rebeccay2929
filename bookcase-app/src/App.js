import React, { useState }  from 'react';
import Book from './components/Book';
import data from './models/books.json';


function App() {
  const [books] = useState(data);
  return <ul>
{books.map((book) =><Book book={book}/>)}
  </ul>
}

export default App;