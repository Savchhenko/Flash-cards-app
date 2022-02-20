import React, { Component } from 'react';
import s from '../../styles/card.module.css';
import { CheckSquareOutlined, DeleteOutlined } from "@ant-design/icons";
import classnames from "classnames";

class Card extends React.Component {
    state = {
        done: false,
        isRemembered: false,
    };

    // при нажатии карточка разворачивается
    handleCardClick = () => {
        this.setState(({ done }) => {
            return {
                done: !done
            };
        });
    };

    // при нажатии текст картички перечеркивается или наоборот
    handleIsRememberClick = () => {
        this.setState(({isRemembered}) => {
            return {
                isRemembered: !isRemembered
            };
        });
    };

    handleDeletedClick = () => {
        console.log("1 level");
        this.props.onDeleted();
    }

    render() {
        const { eng, rus } = this.props;
        const { done, isRemembered } = this.state;

        return (
            <div className={s.root}>
                <div 
                    className={ classnames(s.card, { 
                        [s.done]: done,
                        [s.isRemembered]: isRemembered,
                    }) } 
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
                <div className={s.icons}>
                    <CheckSquareOutlined onClick={this.handleIsRememberClick}/>
                </div>
                <div className={s.icons}>
                    <DeleteOutlined onClick={this.handleDeletedClick}/>  
                </div>
            </div>
        )
    };
};

export default Card;