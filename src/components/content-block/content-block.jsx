import React from "react";
import s from "../../styles/content-block.module.css";
import Card from "../card/card";
import { wordsList } from "../wordsList";

const ContentBlock = ({ title, descr }) => {
    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <h2 className={s.header}>{title}</h2>
                <p className={s.descr}>{descr}</p>
            </div>
            <div className={s.cards}>
                { wordsList.map(({eng, rus}) => <Card eng={eng} rus={rus}/>) }
            </div>
        </div>
    )
};

export default ContentBlock;