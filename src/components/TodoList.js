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

