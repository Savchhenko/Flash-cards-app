import React, { Component } from 'react';
import s from '../../styles/card.module.css';

const Card = ({eng, rus}) => {
    return (
            <div className={s.card}>
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>
                
            </div>
        );
}

export default Card;