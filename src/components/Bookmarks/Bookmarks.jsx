import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    const {reading_time}=bookmarks;
    return (
        <div className="md:w-1/3 mx-1 my-7" >
            <div>
                <h1 className='w-full font-semibold px-2 mb-10 text-2xl text-blue-700 bg-gray-200 	 border-2 border-blue-700'>Spend time on read {reading_time}</h1>
            </div>
            <div className='bg-gray-200 h-full' >
            <div>
                <h1 className='w-full font-bold pt-3 px-2 mb-10 text-3xl  bg-gray-200 '>Bookmarked Blogs: {bookmarks.length}</h1>
            </div>
            <div>
                {
                    bookmarks.map(bookmark=> <Bookmark key={bookmark.id}
                    bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>

            </div>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired,
}

export default Bookmarks;