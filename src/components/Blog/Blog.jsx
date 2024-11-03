import PropTypes from 'prop-types';
import  './Blog.css';
import { FaRegBookmark } from 'react-icons/fa';


const Blog = ({blog,handleAddToBookmark}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags}=blog;


    return (
        <div className='mb-20'>
        <img className='max-w-full mb-7' src={cover} alt="cover"  />
        <div className='flex justify-between  mt-1 items-center'>
            <div className='flex'>
               
                <img className="w-16 rounded-full mb-3  " src={author_img} alt="author_img"  />
                
               <div className='ml-2'>
               <h3 className='font-semibold'>{author}</h3>
               <p className=' opacity-60 '>{posted_date}</p>
               </div>
            </div>
            <div className='flex opacity-60 '>
                <p className='mr-2'>{reading_time} read</p>
                <button onClick={()=>handleAddToBookmark(blog)}><FaRegBookmark />
</button>

            </div>
        </div>
        <a  className='font-bold text-5xl text-wrap' href={title}>{title}</a> <br />
           
          {
            hashtags.map((hash,idx)=> <span className=''  key={idx}><a href="">{hash}</a></span>  )
          }
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired
}

export default Blog;