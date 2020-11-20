import React, { Component } from 'react';
import ActionTodo from '../components/ActionTodo';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
class ActionTodoContainer extends Component {

    render() {
        const { statusAction, keyword } = this.props;

        return (
            <ActionTodo
                showAdd={this.showAdd}
                statusAction={statusAction}
                onSearch={this.onSearch}
                keyword={keyword}
                onReset={this.onReset}
            />
        );
    }
    showAdd = () => { //Show Add Todo Component
        const { showAdd, onHandleReset } = this.props;
        showAdd(true);
        onHandleReset()
    }
    onSearch = (value) => {
        const { onHandleSearch } = this.props;
        onHandleSearch(value)
    }
    onReset = () => {
        const { onHandleReset } = this.props;
        onHandleReset()
    }
}

const mapStateToProps = state => {
    return {
        statusAction: state.statusAction,
        keyword: state.search
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
        }

    }
}
// export default ActionTodoContainer;
export default connect(mapStateToProps, mapDispatchToProps)(ActionTodoContainer);
