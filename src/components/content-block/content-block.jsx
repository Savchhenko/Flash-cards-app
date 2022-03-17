import React, { Component } from "react";
import s from "../../styles/content-block.module.css";
import CardsList from "./cardsList";
import FirebaseContext from "../../context/firebaseContext";

class ContentBlock extends Component {
    state = {
        wordsArr: [],
    };

    // urlRequest = `/cards/${this.props.user.uid}`;

    componentDidMount() {
        const { getUserCardsRef } = this.context;
        getUserCardsRef().on("value", res => {
            this.setState({
                wordsArr: res.val() || [],
            });
        })
    };

    handleSubmitButton = ({eng, rus}) => {
        const { wordsArr } = this.state;

        this.getUserCardsRef.set([...wordsArr, {
            id: +new Date(),
            eng,
            rus,
        }]);
    };

    handleDeletedItem = (id) => {
        const { wordsArr } = this.state;
        
        const newWordsArr = wordsArr.filter(item => item.id !== id);

        this.getUserCardsRef.set(newWordsArr);
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
ContentBlock.contextType = FirebaseContext;

export default ContentBlock;