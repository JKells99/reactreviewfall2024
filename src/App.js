import './App.css';
import {useCallback, useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Booklist from "./components/Booklist";
import BooksForSpecificAuthor from "./components/BooksForSpecificAuthor";
import {fetchBooks} from "./utils/apicall";


function App() {

  const [books,setBooks] = useState([])

  const loadBooks = useCallback(async () => {
    const response = await fetchBooks();
    setBooks(response)
  },[])

  useEffect(() => {
    loadBooks().then(r => console.log('Books loaded'))
  }, []);


  return (<div className="App">
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/booklist" element={<Booklist books={books}/>}/>
              <Route path="/booksForAuthor" element={<BooksForSpecificAuthor/>}/>


          </Routes>
      </div>
  );
}

export default App;
