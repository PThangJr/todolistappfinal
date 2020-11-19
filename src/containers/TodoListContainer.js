import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

class TodoListContainer extends Component {
    render() {
        const { dataTodos } = this.props;

        return (
            <TodoList
                dataTodos={dataTodos}
            />
        );
    }

}
const mapStateToProps = state => {
    return {
        dataTodos: state.dataTodos
    }
}
// export default TodoItemContainer;
export default connect(mapStateToProps, null)(TodoListContainer);
// export default TodoListContainer;