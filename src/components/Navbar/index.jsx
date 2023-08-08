import React from "react";
import { Link } from 'react-router-dom';
import './index.css'

class Navbar extends React.Component {
    render() {
        return <div className="navbar container-fluid mt-5 px-5">
            <div className="col-4">
                <div className="justify-content-between d-none d-sm-flex">
                    <div className="navbar-item">Register</div>
                    <div className="navbar-item">Login</div>
                    <Link to="/search-menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className="navbar-item">Search Menu</div>
                    </Link>
                </div>
                <i className="bi bi-list-ul d-flex d-sm-none display-4" />
            </div>
            <div className="col-8  d-flex justify-content-end">
                <div className="row profile-divider" style={{ width: "max-content" }}>
                    <div className="col account-image pl-3 d-none d-sm-flex">
                        <img
                            className="navbar-photo"
                            src="./../../src/assets/pic-oke.jpeg"
                            alt="profile pic"
                        />
                    </div>
                    <div className="col ml-3">
                        <div>Ilham</div>
                        <div className="logout">Logout</div>
                    </div>
                </div>
            </div>
        </div>
            ;
    }
}

export default Navbar;