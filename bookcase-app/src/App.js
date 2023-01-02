import React, { useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";
import Booklist from "./components/BookList";
import {Search} from "./components/Search";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword]= useState("");

  async function findBooks(value)  {
const url = 'https://www.googleapis.com/books/vI/volumes?g=${value}&filter=paid-ebooks&print-type=books&projection=lite';

const results = await fetch(url).them((res)=> res.json());
if(!results.error){
  setBooks(results.items)
}
  }

  return (
    <>
   
        <BookList>
          <Search
          keyword={keyword}
          setKeyword={setKeyword}
          handleSubmit={findBooks}
          />
          {books.map((item)=> (
            <Book 
            key={item.id}
            book={item}
            />
          ))}
        </BookList>
      </>

  );
    }
export default App;


// return (
//   <>
//   <Routes>
//     <Route
//     path="/Search"
//     element={
//       <BookList>
//         <Search
//         keyword={keyword}
//         setKeyword={setKeyword}
//         handleSubmit={findBooks}
//         />
//         {books.map((item)=> (
//           <Book 
//           key={item.id}
//           book={item}
//           />
//         ))}
//       </BookList>
//     }></Route>
//     <Route path="/AboutUs" element={<h1>About us</h1>}></Route>
//     </Routes>
//   </>

// );
//   }