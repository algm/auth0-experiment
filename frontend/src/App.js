import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

    doLogin(event) {
        this.props.auth.login();
    }

    doLogout(event) {
        this.props.auth.logout();
    }

    render() {
        console.log(this.props.auth);

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro">
                    <p>
                        <button onClick={this.doLogin.bind(this)}>log in</button>
                    </p>
                    <p>
                        <button onClick={this.doLogout.bind(this)}>log out</button>
                    </p>
                    <div className="App-env">
                        <h2>Env</h2>
                        <pre>
                            { JSON.stringify(process.env, null, 4) }
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
