import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

class TodoListContainer extends Component {



    render() {
        const { keyword, statusSort } = this.props;
        let { dataTodos } = this.props;
        const dataTodosInit = [...dataTodos]

        if (dataTodos) {
            if (keyword.trim() !== '') { // Tìm kiếm 
                dataTodos = dataTodos.filter(item => {
                    return item.name.trim().toLowerCase().indexOf(keyword.trim().toLowerCase()) !== -1;
                })
            }

            if (statusSort === -1) {

            }
            if (statusSort === 0) {
                dataTodos = dataTodosInit.sort((a, b) => {
                    return a.status === b.status ? 0 : a.status ? 1 : -1;
                })
            }
            if (statusSort === 1) {
                dataTodos = dataTodosInit.sort((a, b) => {
                    return a.status === b.status ? 0 : a.status ? -1 : 1;
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
        keyword: state.search,
        statusSort: state.sortTodo
    }
}
// export default TodoItemContainer;
export default connect(mapStateToProps, null)(TodoListContainer);
// export default TodoListContainer;