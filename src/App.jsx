
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
 const[bookmarks,setBookmarks]=useState([]);
 const handleAddToBookmark=(blog)=>{
  const newBookMarks=[...bookmarks,blog]
  setBookmarks(newBookMarks);
 }

  return (
    <div className='md:max-w-5xl mx-auto '>
     <Header></Header>
     <div className='md:flex'>
     <Blogs 
      handleAddToBookmark={handleAddToBookmark}
      ></Blogs>
     <Bookmarks
        bookmarks={bookmarks}
      ></Bookmarks>
     </div>
    </div>
  )
}

export default App
