import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldName: '',
            height: null,
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
    onRepairTodo = (id, e) => { //Bắt sự kiện sửa 1 item có id trùng vs id truyền vào
        const { onRepairTodo } = this.props;
        const findTodosItemElem = () => {
            var target = e.target;
            while (target.parentElement) {
                if (target.parentElement.className.indexOf('todos-item') !== -1) {
                    return target.parentElement;
                }
                target = target.parentElement;
            }
        }
        const height = findTodosItemElem().clientHeight + 5;
        // console.log(height)
        // console.log([findTodosItemElem()])
        onRepairTodo(id);
        this.setState({
            height,
        })
        // console.log([e.target.parentElement.parentElement.parentElement.parentElement.parentElement.clientHeight])
        // console.log(height);
    }
    onBack = () => {
        const { onBack } = this.props;
        onBack();
    }
    onInputValue = (e) => { //Lấy dữ liệu ô textarea ra set vào state
        // console.log([e.target]);
        let height = e.target.style.height
        const scrollHeight = e.target.scrollHeight + 3
        // console.log(height);
        // console.log(scrollHeight);
        this.setState({
            fieldName: e.target.value,
            height: scrollHeight
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
    onSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        const { dataTodo } = this.props;
        const { status } = dataTodo;

        if (dataTodo) {

            return (
                <li className={status ? `todos-item mb-10 active-todos` : `todos-item mb-10`}>
                    {
                        this.renderItem()
                    }
                </li>
            );
        }
    }
    onEnter = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
        }
        let height = e.target.style.height
        const scrollHeight = e.target.scrollHeight + 5
        // console.log(height);
        // console.log(scrollHeight);
        this.setState({
            fieldName: e.target.value,
            height: scrollHeight
        })

    }

    renderItem = () => { // Render ra Item
        const { dataTodo, idRepairTodo, stt } = this.props;
        const { fieldName } = this.state;
        const { id, name, status } = dataTodo;
        // console.log(this.state.height)
        if (idRepairTodo !== id) {
            return (
                <div className="todos-item-box">
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
                                stt
                            }
                            <span className="dot">. </span>
                            {
                                name
                            }
                        </span>
                    </div>
                    <div className="todos__options ">
                        <span
                            className={idRepairTodo === id ? "icon-repair d-none" : "icon-repair"}
                            onClick={(e) => this.onRepairTodo(id, e)}
                        >
                            <i className="fas fa-edit" style={{ pointerEvents: false }}
                                onClick={this.stopPropagation}
                            />
                        </span>
                        <span
                            className={idRepairTodo === id ? "icon-delete d-none" : "icon-delete "}
                            onClick={() => this.onDeleteTodo(id)}
                        >
                            <i className="fas fa-trash-alt" />
                        </span>
                    </div>
                </div>
            )
        }
        else if (idRepairTodo === id) {
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
                            onKeyPress={this.onEnter}
                            style={{ height: this.state.height + 'px' }}
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
            )
        }
    }

}

export default TodoItem;