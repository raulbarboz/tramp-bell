import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';



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
                <AppRouter />
            </div> 
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

