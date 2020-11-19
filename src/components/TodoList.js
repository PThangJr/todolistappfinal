import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItemContainer from '../containers/TodoItemContainer';

class TodoList extends Component {
    render() {
        return (
            <div className="todos__body mb-15" >
                <ul className="todos-list">
                    {
                        this.renderTodosItem()
                    }

                </ul>
            </div>
        );
    }
    renderTodosItem = () => {
        const { dataTodos } = this.props;
        if (dataTodos.length > 0) {
            return dataTodos.map((dataTodo, index) => {
                return (
                    <TodoItemContainer
                        key={dataTodo.id}
                        dataTodo={dataTodo}
                    />
                )
            })
        }
    }

}

export default TodoList;

{/* <li className="todos-item mb-10 active-todos">
                        <div className="todos__name d-none">
                            <span className="icon-check icon--complete ">
                                <i className="fas fa-check" />
                            </span>
                            <span className="icon-check icon--not-complete d-none">
                                <i className="fas fa-times" />
                            </span>
                            <span className="todos__name-text">
                                Công việc 1
                  </span>
                            <input type="text" name="fieldName" className="todos__name-input d-none" />
                        </div>
                        <div className="todos__options d-none">
                            <span className="icon-repair">
                                <i className="fas fa-edit" />
                            </span>
                            <span className="icon-delete">
                                <i className="fas fa-trash-alt" />
                            </span>
                        </div>
                        <div className="todos__name-repair ">
                            <textarea type="text" id="text-repair" className="actions__input" defaultValue={""} />
                        </div>
                        <div className="todos__options-repair  ">
                            <span className="icon-repair">
                                <i className="fas fa-save" />
                            </span>
                            <span className="icon-back">
                                <i className="fas fa-undo-alt" />
                            </span>
                        </div>
                    </li>
                    <li className="todos-item mb-10">
                        <div className="todos__name">
                            <span className="icon-check icon--complete d-none">
                                <i className="fas fa-check" />
                            </span>
                            <span className="icon-check icon--not-complete ">
                                <i className="fas fa-times" />
                            </span>
                            <span className="todos__name-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perspiciatis hic ullam accusantium libero veniam saepe placeat rerum mollitia minus. Saepe, veniam. Atque nemo numquam molestias fugiat iure odit tempora!
                  </span>
                            <input type="text" name="fieldName" className="todos__name-input d-none" />
                        </div>
                        <div className="todos__options">
                            <span className="icon-repair">
                                <i className="fas fa-edit" />
                            </span>
                            <span className="icon-delete">
                                <i className="fas fa-trash-alt" />
                            </span>
                        </div>
                    </li> */}