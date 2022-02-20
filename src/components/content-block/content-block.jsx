import React, { Component } from "react";
import s from "../../styles/content-block.module.css";
import { wordsList } from "../wordsList";
import CardsList from "./cardsList";

class ContentBlock extends Component {
    state = {
        wordsArr: wordsList,
    }

    render() {
        const { wordsArr } = this.state;

        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <h2 className={s.header}>{this.props.title}</h2>
                    <p className={s.descr}>{this.props.descr}</p>
                </div>
                <CardsList item={wordsArr}/>
            </div>
        )
    }
}

export default ContentBlock;