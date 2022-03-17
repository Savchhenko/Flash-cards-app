import React, { Component } from "react";
import Card from "../card/card";
import s from "../../styles/content-block.module.css";
import { Form, Input, Button } from 'antd';
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

    handleSubmitForm = async (values) => {
        const { onSubmit } = this.props;

        onSubmit && onSubmit(values);

        this.setState({
            isBusy: true,
        }, this.getTheWord)
    };

    renderWordForm = () => {
        return (
            <div className={s.form}>
                <Form
                    name="basic"
                    layout="inline"
                    onFinish={this.handleSubmitForm}
                >
                    <Form.Item
                        label="English"
                        name="eng"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Русский"
                        name="rus"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >Добавить</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    render() {
        const { items = [], onDeletedItem } = this.props;
        const { value, label, isBusy } = this.state;

        return (
            <>
                <div>
                    { this.state.label }
                </div>
                {/* <div className={s.form}>
                    <Search
                        placeholder="Введите текст для поиска слова"
                        enterButton="Поиск"
                        size="large"
                        value={value}
                        loading={isBusy}
                        onChange={this.handleInputChange}
                        onSearch={this.handleSubmitForm}
                    />
                </div> */}
                { this.renderWordForm() }
                <div className={s.cards}>
                    {
                        items.map(({ eng, rus, id }) => (
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
