import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.js';


// initial App
// Login Component
// Signup Component
// Router
// Redux
// Firebase

class App extends React.Component {
    render(){
        return(
            <div className="container">
                <Navbar />
                <div className="jumbotron">
                    <h1>Tramp Bell <span>Beta</span></h1>
                    <p>Work deadline, history, co-working...</p>
                    <p><a className="btn btn-primary btn-lg" href="/signup" role="button">Sign Up</a></p>
                </div>
            </div> 
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

