import React, { Component } from 'react';
import { connect } from 'react-redux';
import Options from '../components/Options';
import * as actions from '../actions/actions';
class OptionsContainer extends Component {
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
            <Options
                statusAction={statusAction}
                showOptions={this.showOptions}
                showAdd={this.showAdd}
                onChange={this.onChange}
                onHandleAdd={this.onHandleAdd}
                name={name}
                onReset={this.onReset}
            />
        );
    }
    showOptions = () => {
        const { showOptions } = this.props;
        showOptions(false);
    }
    showAdd = () => {
        const { showAdd } = this.props;
        showAdd(true);
    }
    onChange = (value) => { // Lấy dữ liệu ô Input thêm công việc
        // console.log(value);
        this.setState({
            name: value
        })
    }
    onReset = () => {
        console.log('reset')
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
}
const mapStateToProps = state => {
    return {
        statusAction: state.statusAction
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        showOptions: (statusAction) => {
            dispatch(actions.changeStatusAction(statusAction));
        },
        showAdd: (statusAction) => {
            dispatch(actions.changeStatusAction(statusAction));
        },
        onHandleAdd: (name) => {
            dispatch(actions.addTodo(name))
        },

    }
}
// export default OptionsContainer;
export default connect(mapStateToProps, mapDispatchToProps)(OptionsContainer);
