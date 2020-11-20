import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

class TodoListContainer extends Component {

    render() {
        const { keyword } = this.props;
        var { dataTodos } = this.props;
        if (dataTodos.length > 0) {
            if (keyword.trim() !== '') {
                dataTodos = dataTodos.filter(item => {
                    return item.name.trim().toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1;
                })
            }
        }
        return (
            <TodoList
                dataTodos={dataTodos}
                keyword={keyword}
            />
        );
    }

}
const mapStateToProps = state => {
    return {
        dataTodos: state.dataTodos,
        keyword: state.search
    }
}
// export default TodoItemContainer;
export default connect(mapStateToProps, null)(TodoListContainer);
// export default TodoListContainer;