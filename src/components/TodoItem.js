import React, { Component } from 'react';
import UpdateItem from './UpdateItem';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null,
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
        const height = e.target.parentElement.parentElement.parentElement.offsetHeight;
        this.setState({
            height,
        })
        onRepairTodo(id);
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
    onLoad = (e) => {
        console.log(e)
        console.log('load')
    }

    renderItem = () => { // Render ra Item
        const { dataTodo, idRepairTodo, stt, onUpdateTodo, onBack } = this.props;
        const { id, name, status } = dataTodo;
        const { height } = this.state;
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
                            {/* {
                                stt
                            }
                            <span className="dot">. </span> */}
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
                <UpdateItem
                    idRepairTodo={idRepairTodo}
                    dataTodo={dataTodo}
                    onUpdateTodo={onUpdateTodo}
                    onBack={onBack}
                    defaultHeight={height}
                />
            )
        }
    }

}

export default TodoItem;