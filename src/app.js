import React from 'react';
import ReactDOM from 'react-dom';

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
                <div className="jumbotron">
                    <h1>Hello, world!</h1>
                    <p>...</p>
                </div>
            </div> 
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

