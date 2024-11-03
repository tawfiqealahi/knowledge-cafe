import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;

    return (
        <div>
             <h1 className=' font-bold w-11/12 mx-auto pt-3 px-2 mb-10 text-2xl  wrap bg-gray-100 rounded-xl '> {title}</h1>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;