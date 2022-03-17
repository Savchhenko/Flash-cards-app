import React, { Component } from "react";
import s from "../../styles/content-block.module.css";
import CardsList from "./cardsList";
import database from "../../services/firebase";

class ContentBlock extends Component {
    state = {
        wordsArr: [],
    };

    urlRequest = `/cards/${this.props.user.uid}`;

    componentDidMount() {
        database.ref(this.urlRequest).on("value", res => {
            this.setState({
                wordsArr: res.val() || [],
            });
        })
    };

    handleSubmitButton = ({eng, rus}) => {
        const { wordsArr } = this.state;

        database.ref(this.urlRequest).set([...wordsArr, {
            id: +new Date(),
            eng,
            rus,
        }]);
    };

    handleDeletedItem = (id) => {
        const { wordsArr } = this.state;
        
        const newWordsArr = wordsArr.filter(item => item.id !== id);

        database.ref(this.urlRequest).set(newWordsArr);
    };

    render() {
        const { wordsArr } = this.state;

        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <h2 className={s.header}>{this.props.title}</h2>
                    <p className={s.descr}>{this.props.descr}</p>
                </div>
                <CardsList 
                    onDeletedItem={this.handleDeletedItem} 
                    onSubmit={this.handleSubmitButton} 
                    items={wordsArr}
                />
            </div>
        )
    }
}

export default ContentBlock;