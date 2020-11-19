import React, { Component } from 'react';
import Counts from '../components/Counts';
import { connect } from 'react-redux';


class CountsContainer extends Component {
    render() {
        const { dataTodos } = this.props;
        return (
            <Counts dataTodos={dataTodos} />
        );
    }
}
const mapStateToProps = state => {
    return {
        dataTodos: state.dataTodos
    }
}

// export default CountsContainer;
export default connect(mapStateToProps, null)(CountsContainer);
