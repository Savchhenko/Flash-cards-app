import React from "react";
import s from "../../styles/content-block.module.css";
import Card from "../card/card";
import { wordsList } from "../wordsList";
import CardsList from "./cardsList";

const ContentBlock = ({ title, descr }) => {
    return (
        <div className={s.container}>
            <div className={s.wrap}>
                <h2 className={s.header}>{title}</h2>
                <p className={s.descr}>{descr}</p>
            </div>
            <CardsList item={wordsList}/>
        </div>
    )
};

export default ContentBlock;