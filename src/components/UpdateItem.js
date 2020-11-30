import React, { Component } from 'react';

class UpdateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldName: '',
            height: null,
        }
    }
    componentDidMount() {
        const { dataTodo, defaultHeight } = this.props;
        const textArea = document.querySelector('#text-repair');
        // console.log(textArea.parentElement.parentElement)

        // textArea.autofocus = true;
        textArea.style.height = defaultHeight - 5 + 'px';
        // textArea.innerHTML = dataTodo.name;

        textArea.oninput = function () {
            textArea.style.height = "35px";
            textArea.style.height = (textArea.scrollHeight) + "px";
        }
        if (dataTodo) {
            this.setState({
                fieldName: dataTodo.name,
                height: textArea.scrollHeight
            })
        }
    }
    //this.onSubmit, idRepairTodo, fieldName, this.onInputValue, this.onEnter, 
    //this.onUpdateTodo, this.onBack
    //
    onSubmit = (e) => {
        e.preventDefault();
    }
    onInputValue = (e) => { //Lấy dữ liệu ô textarea ra set vào state

        this.setState({
            fieldName: e.target.value,
        })
    }
    onUpdateTodo = (id) => {
        const { onUpdateTodo } = this.props;
        const { fieldName } = this.state;
        onUpdateTodo({
            id,
            name: fieldName,
        });
    }
    onBack = () => {
        const { onBack } = this.props;
        // console.log(onBack)
        onBack();
    }
    onEnter = (e, id) => {
        if (e.charCode === 13) {
            e.preventDefault();
            this.onUpdateTodo(id);
        }
    }
    render() {
        const { fieldName } = this.state;
        const { idRepairTodo, dataTodo } = this.props;
        const { id } = dataTodo;
        return (
            <form
                className="todos-item-box"
                onSubmit={this.onSubmit}
            >
                <div className={idRepairTodo === id ? "todos__name-repair " : "todos__name-repair d-none"}>
                    <textarea
                        type="text"
                        id="text-repair"
                        className="actions__input"
                        value={fieldName}
                        onChange={this.onInputValue}
                        onKeyPress={(e) => this.onEnter(e, id)}
                        // style={{ height: height }}
                        onLoad={this.onLoad}
                    />
                </div>
                <div className={idRepairTodo === id ? "todos__options-repair " : "todos__options-repair  d-none"}>
                    <span
                        className="icon-repair"
                        onClick={(e) => this.onUpdateTodo(id)}
                    >
                        <i className="fas fa-save" />
                    </span>
                    <span
                        className="icon-back"
                        onClick={() => this.onBack()}
                    >
                        <i className="fas fa-undo-alt" />
                    </span>
                </div>
            </form>
        );
    }
}

export default UpdateItem;