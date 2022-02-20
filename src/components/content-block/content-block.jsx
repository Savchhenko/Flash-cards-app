import React, { Component } from "react";
import s from "../../styles/content-block.module.css";
import { wordsList } from "../wordsList";
import CardsList from "./cardsList";

class ContentBlock extends Component {
    state = {
        wordsArr: wordsList,
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