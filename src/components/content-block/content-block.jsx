import React from "react";
import s from "../../styles/header-block.module.css";

const ContentBlock = ({ title, descr }) => {
    return (
        <div className={s.cover} style={{backgroundImage: "none"}}>
            <div className={s.wrap}>
                <h2 className={s.header}>{title}</h2>
                <p className={s.descr}>{descr}</p>
            </div>
        </div>
    )
};

export default ContentBlock;