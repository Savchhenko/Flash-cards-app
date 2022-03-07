import React, { Component } from "react";
import Card from "../card/card";
import s from "../../styles/content-block.module.css";
import { Input } from 'antd';
import getTranslateWord from "../../services/dictionary";

const { Search } = Input;

class CardsList extends Component {
    state = {
        value: "",
        label: "",
        isBusy: false,
    };

    handleInputChange = ({ target }) => {
        this.setState({ //передаем новое значение, поэтому тут объект
            value: target.value,
        });
    };

    getTheWord = async () => {
        const { value } = this.state;
        const getWord = await getTranslateWord(this.state.value);
        console.log("ouput of getWord: ", getWord); 

        this.setState({
            label: `${value} - ${getWord.translate}`,
            value: "",
            isBusy: false,
        });
    }

    handleSubmitForm = async () => {
        this.setState({
            isBusy: true,
        }, this.getTheWord)
    };

    render() {
        const { item = [], onDeletedItem } = this.props;
        const { value, label, isBusy } = this.state;

        return (
            <>
                <div>
                    { this.state.label }
                </div>
                <div className={s.form}>
                    <Search
                        placeholder="enter to search word"
                        enterButton="Search"
                        size="large"
                        value={value}
                        loading={isBusy}
                        onChange={this.handleInputChange}
                        onSearch={this.handleSubmitForm}
                    />
                </div>
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
            </>
        );
    }
}

export default CardsList;
