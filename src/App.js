import React, { Component } from "react";
import { Spin } from 'antd';
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import { fire } from "./services/firebase";
import s from "./styles/index.module.css";

class App extends Component {
    state = {
        user: null, 
    };

    componentDidMount() {
        fire.auth().onAuthStateChanged(user => {
            console.log("user: ", user);
            if (user) {
                this.setState({
                    user,
                });
            } else {
                this.setState({
                    user: false,
                });
            }
        });
    }

    render () {
        const { user } = this.state;

        if (user === null) {
            return (
                <div className={s.loader_wrap}>
                    <Spin size="large" />
                </div>
            );
        }

        return (
          <>
              {user ? <HomePage /> : <LoginPage />}
          </>
        );
    }
}

export default App;
