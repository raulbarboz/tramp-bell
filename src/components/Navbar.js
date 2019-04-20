import React from 'react';
import { firebase } from '../firebase/firebase';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                    <button type="submit" className="btn btn-default" onClick={(e) => { 
                        e.preventDefault();
                        firebase.auth().createUserWithEmailAndPassword("ruzito@gmail.com", "qwer1234")
                        .then((user) => {
                            console.log(user.uid)
                        })
                        .catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode == 'auth/weak-password') {
                            alert('The password is too weak.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        });
                     } }>Login</button>
                </form>
        </nav>
    )
}

export default Navbar;