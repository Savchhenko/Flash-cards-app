import React, { Component } from "react";
import Card from "../card/card";
import s from "../../styles/content-block.module.css";
import { Input } from 'antd';

const { Search } = Input;

class CardsList extends Component {
    state = {
        value: "",
        label: "",
    };

    handleInputChange = (e) => {
        console.log(e.target.value);
        this.setState({ //передаем новое значение, поэтому тут объект
            value: e.target.value,
        });
    };

    handleSubmitForm = () => {
        this.setState(({value}) => {
            return {
                label: value,
                value: "",
            };
        });
    };

    render() {
        const { item = [], onDeletedItem } = this.props;
        const { value, label } = this.state;

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
