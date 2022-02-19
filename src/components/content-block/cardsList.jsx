import React from "react";
import Card from "../card/card";
import s from "../../styles/content-block.module.css";

const CardsList = ({item = []}) => {
    return (
        <div className={s.cards}>
            {
                item.map(({ eng, rus }, index) => (
                    <Card key={index} eng={eng} rus={rus} />
                ))
            }
        </div>
    );
};

export default CardsList;