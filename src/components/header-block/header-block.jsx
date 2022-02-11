import React from "react";
import s from "../../styles/header-block.module.css";
import { ReactComponent as ReactLogoSwg } from "../../logo.svg"; 

const HeaderBlock = ({ title, descr }) => {
    return (
        <div className={s.cover}>
            <div className={s.wrap}>
                {title && <h1 className={s.header}>{title}</h1>}
                <ReactLogoSwg style={{height: "300px", width: "300px"}}/>
                {descr && <p className={s.descr}>{descr}</p>}
            </div>
        </div>
    )
}

export default HeaderBlock;