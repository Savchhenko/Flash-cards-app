import React from "react";
import Card from "../card/card";
import s from "../../styles/content-block.module.css";

const CardsList = ({item = [], onDeletedItem}) => {
    return (
        <div className={s.cards}>
            {
                item.map(({ eng, rus, id }) => (
                    <Card onDeleted={() => {
                        console.log("2 level");
                        onDeletedItem(id);
                        }} 
                        key={id} 
                        eng={eng} 
                        rus={rus} 
                    />
                ))
            }
        </div>
    );
};

export default CardsList;