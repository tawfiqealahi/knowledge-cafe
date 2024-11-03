
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
 const[bookmarks,setBookmarks]=useState([]);
const[readingTime,setReadingTime]=useState(0)

 const handleAddToBookmark=(blog)=>{
  const newBookMarks=[...bookmarks,blog]
  setBookmarks(newBookMarks);
 }

 const handleReadingTime=time=>{
  const newReadingTime=readingTime+time;
  setReadingTime(newReadingTime)
 }

  return (
    <div className='md:max-w-5xl mx-auto '>
     <Header></Header>
     <div className='md:flex'>
     <Blogs 
      handleAddToBookmark={handleAddToBookmark}
      handleReadingTime={handleReadingTime}
      ></Blogs>
     <Bookmarks
        bookmarks={bookmarks}
        readingTime={readingTime}
      ></Bookmarks>
     </div>
    </div>
  )
}

export default App
