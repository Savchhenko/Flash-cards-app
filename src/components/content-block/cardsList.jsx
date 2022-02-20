import React, { Component } from "react";
import Card from "../card/card";
import s from "../../styles/content-block.module.css";

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

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.setState(({value}) => {
            return {
                label: value,
                value: "",
            };
        });
    };

    render() {
        const {item = [], onDeletedItem} = this.props;

        return (
            <>
                <div>
                    { this.state.label }
                </div>
                <form 
                    className={s.form} 
                    onSubmit={this.handleSubmitForm}
                >
                    <input 
                        type="text" 
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                    <button>
                        Add New Word
                    </button>
                </form>
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
