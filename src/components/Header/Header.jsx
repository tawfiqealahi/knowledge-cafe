import  './Header.css';
import profile from '../../assets/images/profile.png';


const Header = () => {
    return (
        <header className=' flex justify-between mt-4'>
            <div>
            <h1 className="text-4xl text- font-bold ">
      Knowledge-cafe
    </h1>
            </div>
            <div>
                <img src={profile} alt="profile"  />
            </div>
        </header>
    );
};

export default Header;