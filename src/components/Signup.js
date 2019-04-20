import React from 'react';

class Signup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'nome',
            lastName: 'sobrenome',
            email: 'email@email.com',
            password: ''
        }
    }
    handleChange(e){
        e.preventDefault();
        if(e.target.name === 'name'){
            const name = e.target.value;
            this.setState({ name });
        }
        if(e.target.name === 'lastName'){
            const lastName = e.target.value;
            this.setState({ lastName });
        }
        if(e.target.name === 'email'){
            const email = e.target.value;
            this.setState({ email });
        }
        if(e.target.name === 'password'){
            const password = e.target.value;
            this.setState({ password });
        }
    }
    render(){
        return(
            <form>
                <div className="input-group mb-3 input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Nome</span>
                </div>
                    <input className="form-control" name="name" value={this.state.value} onChange={(e) => {this.handleChange(e)}}/>
                </div>
                <div className="input-group mb-3 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Sobrenome</span>
                    </div>
                    <input className="form-control" name="lastName" value={this.state.value} onChange={(e) => {this.handleChange(e)}}/>
                </div>
                <div className="input-group mb-3 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                    </div>
                    <input className="form-control" name="email" value={this.state.value} onChange={(e) => {this.handleChange(e)}}/>
                </div>
                <div className="input-group mb-3 input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Password</span>
                    </div>
                    <input className="form-control" type="password" name="password" value={this.state.value} onChange={(e) => {this.handleChange(e)}}/>
                </div>
            </form>
        )
    }
}

export default Signup;