import React from "react";
import { Link } from 'react-router-dom';
import './index.css'
import { confirmAlert } from "react-confirm-alert";
import { Navigate } from "react-router-dom";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem("logintoken"),
            username: localStorage.getItem("username"),
            photo: localStorage.getItem("photo") !== 'null' ? localStorage.getItem("photo") : "https://www.whitechapelgallery.org/wp-content/uploads/2020/07/blank-head-profile-pic-for-a-man.jpg",
            logout: false
        };
    }


    logoutClicked = () => {
        confirmAlert({
            title: 'Logout Confirm',
            message: `Are you sure you want to logout ?`,
            buttons: [
                {
                    label: "Log me out",
                    onClick: () => {
                        localStorage.setItem("logintoken", "")
                        this.setState({ logout: true });
                    }
                },
                {
                    label: "Cancel",
                }
            ]
        });
    }

    render() {
        return <div className="navbar container-fluid mt-5 px-5">
            <div className="col-4">
                {this.state.token ?
                    <div className="justify-content-between d-none d-sm-flex">
                        <Link to="/landing-page" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="navbar-item">Home</div>
                        </Link>
                        <Link to="/input-menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="navbar-item">Add Recipe</div>
                        </Link>
                        <Link to="/search-menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="navbar-item">Search Menu</div>
                        </Link>
                        <Link to="/menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="navbar-item">Profile</div>
                        </Link>
                    </div>
                    :
                    <div className="justify-content-between d-none d-sm-flex">
                        <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="navbar-item">Register</div>
                        </Link>
                        <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="navbar-item">Login</div>
                        </Link>
                        <Link to="/search-menu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <div className="navbar-item">Search Menu</div>
                        </Link>
                    </div>}
                <i className="bi bi-list-ul d-flex d-sm-none display-4" />
            </div>
            {this.state.token && <div className="col-8  d-flex justify-content-end">
                <div className="row profile-divider" style={{ width: "max-content" }}>
                    <div className="col account-image pl-3 d-none d-sm-flex">
                        <img
                            className="navbar-photo"
                            src={this.state.photo}
                            alt="profile pic"
                        />
                    </div>
                    <div className="col ml-3">
                        <div>{this.state.username}</div>
                        <div className="logout" onClick={this.logoutClicked}>Logout</div>
                    </div>
                </div>
            </div>}
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {this.state.logout &&
                <Navigate to={'/login'} />}
        </div>
            ;
    }
}

export default Navbar;