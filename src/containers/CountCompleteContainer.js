import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountComplete from '../components/CountComplete';

class CountCompleteContainer extends Component {
    totalComplete = () => {
        const { dataTodos } = this.props;
        return dataTodos.filter(dataTodo => dataTodo.status === true).length;
    }
    render() {
        return (
            <CountComplete totalComplete={this.totalComplete()} />
        );
    }
}
const mapStateToProps = state => {
    return {
        dataTodos: state.dataTodos
    }
}
// export default CountCompleteContainer;
export default connect(mapStateToProps, null)(CountCompleteContainer);