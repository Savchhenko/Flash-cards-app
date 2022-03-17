import React, { Component } from "react";
import { Spin } from 'antd';
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import FirebaseContext from "./context/firebaseContext";
import s from "./styles/index.module.css";

class App extends Component {
    state = {
        user: null, 
    };

    componentDidMount() {
        const { auth, setUserUid } = this.context;

        auth.onAuthStateChanged(user => {
            if (user) {
                setUserUid(user.uid);
                this.setState({
                    user,
                });
            } else {
                setUserUid(null);
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
              {user ? <HomePage user={user}/> : <LoginPage />}
          </>
        );
    }
}
App.contextType = FirebaseContext;

export default App;
