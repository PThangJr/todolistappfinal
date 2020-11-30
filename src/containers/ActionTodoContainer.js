import React, { Component } from 'react';
import ActionTodo from '../components/ActionTodo';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
class ActionTodoContainer extends Component {

    render() {
        const { statusAction, keyword, statusSort } = this.props;

        return (
            <ActionTodo
                showAdd={this.showAdd}
                statusAction={statusAction}
                onSearch={this.onSearch}
                keyword={keyword}
                onReset={this.onReset}
                onSort={this.onSort}
                statusSort={statusSort}
                onSelectAll={this.onSelectAll}
                onDeleteAll={this.onDeleteAll}
            />
        );
    }
    showAdd = () => { //Show Add Todo Component
        const { showAdd, onHandleReset } = this.props;
        showAdd(true);
        onHandleReset();

    }
    onSearch = (value) => {
        const { onHandleSearch } = this.props;
        onHandleSearch(value)
    }
    onReset = () => {
        const { onHandleReset } = this.props;
        onHandleReset()
    }
    onSort = () => {
        const { onHandleSort } = this.props;
        onHandleSort()
    }
    onSelectAll = (statusSelect) => {
        const { onHandleSelectAll } = this.props;
        onHandleSelectAll(statusSelect)
    }
    onDeleteAll = () => {
        const { onHandleDeleteAll } = this.props;
        onHandleDeleteAll()
    }
}

const mapStateToProps = state => {
    return {
        statusAction: state.statusAction,
        keyword: state.search,
        statusSort: state.sortTodo,
        dataTodos: state.dataTodos,
        statusSelect: state.selectAll
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        showAdd: (statusAction) => {
            dispatch(actions.changeStatusAction(statusAction));
        },
        onHandleSearch: (name) => {
            dispatch(actions.search(name))
        },
        onHandleReset: () => {
            dispatch(actions.search(''))
        },
        onHandleSort: () => {
            dispatch(actions.sortTodo());
        },
        onHandleResetSort: () => {
            dispatch(actions.sortTodo(-1))
        },
        onHandleSelectAll: (statusSelect) => {
            dispatch(actions.selectAll(statusSelect))
        },
        onHandleDeleteAll: () => {
            dispatch(actions.deleteAll())
        }

    }
}
// export default ActionTodoContainer;
export default connect(mapStateToProps, mapDispatchToProps)(ActionTodoContainer);
