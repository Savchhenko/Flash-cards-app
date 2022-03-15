import React, { Component } from "react";
import HomePage from "./pages/home/home";
import LoginPage from "./pages/login/login";
import { fire } from "./services/firebase";

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
            return null;
        }
        
        return (
          <>
              {user ? <HomePage /> : <LoginPage />}
          </>
        );
    }
}

export default App;
