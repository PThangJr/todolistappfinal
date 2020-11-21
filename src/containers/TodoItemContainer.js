import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import TodoItem from '../components/TodoItem';
class TodoItemContainer extends Component {
    render() {
        const { dataTodo, idRepairTodo, stt } = this.props;
        return (
            <TodoItem
                dataTodo={dataTodo}
                stt={stt}
                toggleStatus={this.toggleStatus}
                onDeleteTodo={this.onDeleteTodo}
                onRepairTodo={this.onRepairTodo}
                idRepairTodo={idRepairTodo}
                onBack={this.onBack}
                onUpdateTodo={this.onUpdateTodo}
            />
        );
    }
    toggleStatus = (id) => { //sự kiện thay đổi trạng thái hoàn thành hoặc chưa hoàn thành
        const { toggleStatus } = this.props;
        toggleStatus(id)
    }
    onDeleteTodo = (id) => { //Sự kiện xóa 1 todo item
        const { handleDeleteTodo } = this.props;
        handleDeleteTodo(id);
    }
    onRepairTodo = (id) => {
        const { handleRepairTodo } = this.props;
        handleRepairTodo(id);
    }
    onBack = () => {
        const { onBack } = this.props;
        onBack();
    }
    onUpdateTodo = (todo) => {
        // console.log(todo)
        const { handleUpdateTodo, onBack } = this.props;
        if (todo.name.trim() !== '') {
            handleUpdateTodo(todo);
            onBack();
        }
    }
}
const mapStateToProps = state => {
    return {
        statusAction: state.statusAction,
        idRepairTodo: state.repairTodo,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleStatus: (id) => {
            dispatch(actions.toggleStatus(id));
        },
        handleDeleteTodo: (id) => {
            dispatch(actions.deleteTodo(id));
        },
        handleRepairTodo: (id) => {
            dispatch(actions.repairTodo(id));
        },
        onBack: () => {
            dispatch(actions.repairTodo());
        },
        handleUpdateTodo: (todo) => {
            dispatch(actions.updateTodo(todo));
        }
    }
}
// export default TodoItemContainer;
export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer);