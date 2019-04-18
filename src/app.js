import React from 'react';
import ReactDOM from 'react-dom';

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

