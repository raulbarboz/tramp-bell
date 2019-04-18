import React from 'react';

function Navbar() {
    return(
        <nav className="navbar navbar-default">
        <div className="navbar-brand" href="#">
            <img alt="" src=""/>
        </div>
        <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
                <input type="email" className="form-control" placeholder="email"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="password"></input>
            </div>
            <button type="submit" className="btn btn-default">Login</button>
        </form>
        </nav>
    )
}

export default Navbar;