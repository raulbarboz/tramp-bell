import React from 'react';
import { firebase } from '../firebase/firebase';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" href="#">
                <img alt="" src=""/>
            </div>
            <form className="form-inline">
                <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                    <div className="input-group-text">@</div>
                    </div>
                    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Email"/>
                </div>
                <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2"/>
                <button type="submit" className="btn btn-primary mb-2" 
                onClick={(e) => { 
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
                }}>Login</button>
            </form>
        </nav>
    )
}

export default Navbar;