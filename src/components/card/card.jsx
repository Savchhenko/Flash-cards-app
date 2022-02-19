import React, { Component } from 'react';
import s from '../../styles/card.module.css';

class Card extends React.Component {
    state = {
        done: false,
    };

    // при нажатии карточка разворачивается
    handleCardClick = () => {
        if (this.state.done === false) {
            this.setState({
                done: true, 
            });
        } else {
            this.setState({
                done: false,
            })
        }
    };

    render() {
        const { eng, rus } = this.props;
        const { done } = this.state;

        const cardClass = [s.card];
        
        if (done) {
            cardClass.push(s.done);
        } else if (done === false && cardClass.includes("done")) {
            cardClass = cardClass.filter(item => item !== "done");
        }

        return (
            <div 
                className={cardClass.join(" ")} 
                onClick={this.handleCardClick}
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>
            </div>
        )
    };
};

export default Card;