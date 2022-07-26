import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><Link to="/home">Once Upon A Crochet</Link></h1>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/aboutUs'>About Us</Link>
            </div>
        </nav>
    )
}

export default Navbar;