import PropTypes from 'prop-types';
import { useState } from 'react';
import './Blogs.css';
import { useEffect } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleAddToBookmark}) => {
    const[blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className='w-2/3' >
            <h2>total blog: {blogs.length}</h2>

          {
            blogs.map(blog=> <Blog
            handleAddToBookmark={handleAddToBookmark}
            blog={blog}
            key={blog.id}
            ></Blog>)
          }
        </div>
    );
};
Blogs.propTypes={
    handleAddToBookmark:PropTypes.func.isRequired
}

export default Blogs;