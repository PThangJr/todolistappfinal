import React, { Component } from 'react';
import ActionTodoContainer from '../containers/ActionTodoContainer';
import AddTodoContainer from '../containers/AddTodoContainer';
class Options extends Component {

    render() {
        return (
            <div className="setting ">
                <ActionTodoContainer />
                <AddTodoContainer />
            </div>

        );
    }
}

export default Options;