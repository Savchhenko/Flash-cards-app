import React, { Component } from "react";
import * as firebase from "firebase";
import s from "../../styles/content-block.module.css";
import CardsList from "./cardsList";

const firebaseConfig = {
    apiKey: "AIzaSyBk6FD_idmMj_EelsyLzd51e7gajfooQHo",
    authDomain: "flash-cards-68c66.firebaseapp.com",
    databaseURL: "https://flash-cards-68c66-default-rtdb.firebaseio.com",
    projectId: "flash-cards-68c66",
    storageBucket: "flash-cards-68c66.appspot.com",
    messagingSenderId: "626798737774",
    appId: "1:626798737774:web:f0ff7cfd77aefcb044a97f"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

class ContentBlock extends Component {
    state = {
        wordsArr: [],
    };

    handleDeletedItem = (id) => {
        this.setState(({wordsArr}) => {
            const index = wordsArr.findIndex(item => item.id === id); //местоположение карточки в массиве
            
            const newWordsArr = [
                ...wordsArr.slice(0, index),
                ...wordsArr.slice(index + 1)
            ];

            return {
                wordsArr: newWordsArr,
            };
        });
    };

    componentDidMount() {
        database.ref("/cards").once("value").then(res => {
            this.setState({
                wordsArr: res.val(),
            });
        })
    }

    render() {
        const { wordsArr } = this.state;

        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <h2 className={s.header}>{this.props.title}</h2>
                    <p className={s.descr}>{this.props.descr}</p>
                </div>
                <CardsList 
                    onDeletedItem={this.handleDeletedItem} 
                    item={wordsArr}
                />
            </div>
        )
    }
}

export default ContentBlock;