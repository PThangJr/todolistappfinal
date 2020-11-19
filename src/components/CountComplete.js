import React, { Component } from 'react';

class CountComplete extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.totalComplete) {
            // this.forceUpdate();
        }
    }

    render() {
        const { totalComplete } = this.props;
        return (
            <div className="count ">
                <div className="count__content count--complete">
                    Đã hoàn thành:
                    <span className="numb numb-complete">
                        {totalComplete}
                    </span>
                    <span className="bd border1" />
                    <span className="bd border2" />
                    <span className="bd border3" />
                    <span className="bd border4" />
                </div>
            </div>
        );
    }
}

export default CountComplete;