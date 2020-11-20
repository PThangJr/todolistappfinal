import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
class AddTodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    render() {
        const { statusAction } = this.props;
        const { name } = this.state;

        return (
            <AddTodo
                statusAction={statusAction}
                showAction={this.showAction}
                onHandleAdd={this.onHandleAdd}
                onReset={this.onReset}
                onChange={this.onChange}
                name={name}
            />
        );
    }
    onReset = () => {
        this.setState({
            name: ''
        })
    }
    onHandleAdd = () => {
        const { onHandleAdd } = this.props;
        const { name } = this.state;
        if (name.trim() !== '') {
            onHandleAdd(name);
            this.onReset()
        }
        // console.log(this.state);
    }

    showAction = () => {
        const { showAction } = this.props;
        showAction(false);
        this.setState({
            name: ''
        })
    }
    onChange = (value) => { // Lấy dữ liệu ô Input thêm công việc
        // console.log(value);
        this.setState({
            name: value
        })
    }
}
const mapStateToProps = state => {
    return {
        statusAction: state.statusAction
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        showAction: (statusAction) => {
            dispatch(actions.changeStatusAction(statusAction));
        },
        onHandleAdd: (name) => {
            dispatch(actions.addTodo(name))
        }

    }
}
// export default AddTodoContainer;
export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);
