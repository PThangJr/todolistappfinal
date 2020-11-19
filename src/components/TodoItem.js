import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldName: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        const { dataTodo } = nextProps;
        if (dataTodo) {
            this.setState({
                fieldName: dataTodo.name
            })
        }
    }
    toggleStatus = (id) => { //Bắt sự kiện click vào 1 Item để thay đổi trạng thái
        const { toggleStatus } = this.props;
        toggleStatus(id);
    }
    onDeleteTodo = (id) => { //Bắt sự kiện xóa 1 item
        const { onDeleteTodo } = this.props;
        onDeleteTodo(id);
    }
    onRepairTodo = (id) => { //Bắt sự kiện sửa 1 item có id trùng vs id truyền vào
        const { onRepairTodo } = this.props;
        onRepairTodo(id);
    }
    onBack = () => {
        const { onBack } = this.props;
        onBack();
    }
    onInputValue = (e) => { //Lấy dữ liệu ô textarea ra set vào state
        // console.log(e.target.value);
        this.setState({
            fieldName: e.target.value
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
    render() {
        const { dataTodo, idRepairTodo } = this.props;
        const { fieldName } = this.state;
        const { id, name, status } = dataTodo;
        return (
            <li className={status ? `todos-item mb-10 active-todos` : `todos-item mb-10`}>
                <div
                    className="todos__name "
                    onClick={() => this.toggleStatus(id)}
                >
                    <span className={status ? "icon-check icon--complete " : "icon-check icon--complete d-none"}>
                        <i className="fas fa-check" />
                    </span>
                    <span className={!status ? "icon-check icon--not-complete" : "icon-check icon--not-complete d-none"}>
                        <i className="fas fa-times" />
                    </span>
                    <span className="todos__name-text">
                        {
                            name
                        }
                    </span>
                    <input type="text" name="fieldName" className="todos__name-input d-none" />
                </div>
                <div className="todos__options ">
                    <span
                        className={idRepairTodo === id ? "icon-repair d-none" : "icon-repair"}
                        onClick={() => this.onRepairTodo(id)}
                    >
                        <i className="fas fa-edit" />
                    </span>
                    <span
                        className={idRepairTodo === id ? "icon-delete d-none" : "icon-delete "}
                        onClick={() => this.onDeleteTodo(id)}
                    >
                        <i className="fas fa-trash-alt" />
                    </span>
                </div>
                <div className={idRepairTodo === id ? "todos__name-repair " : "todos__name-repair d-none"}>
                    <textarea
                        type="text"
                        id="text-repair"
                        className="actions__input"
                        value={fieldName}
                        autoFocus
                        onChange={this.onInputValue}
                    />
                </div>
                <div className={idRepairTodo === id ? "todos__options-repair " : "todos__options-repair  d-none"}>
                    <span
                        className="icon-repair"
                        onClick={() => this.onUpdateTodo(id)}
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
            </li>
        );
    }

}

export default TodoItem;