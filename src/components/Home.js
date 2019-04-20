import React from 'react';
import Navbar from './Navbar';

function HomeUser({host}){
    return (
        <h1>{host}</h1>
    )
}

function HomeApp(){
    return(
        <div>
            <Navbar />
            <div className="jumbotron">
                <h1>Tramp Bell <span>Beta</span></h1>
                <p>Work deadline, history, co-working...</p>
                <p><a className="btn btn-primary btn-lg" href="/signup" role="button">Sign Up</a></p>
            </div>
        </div>
    )
}

function Home(props){
    const { host } = props;
    console.log(host);
    return(
        <div>
            {
                host ? <HomeUser host={host}/> : <HomeApp />
            }
        </div>
    )
}

export default Home;