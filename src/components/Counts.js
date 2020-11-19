import React, { Component } from 'react';
import CountCompleteContainer from '../containers/CountCompleteContainer';

class Counts extends Component {
    count = (status) => {
        const { dataTodos } = this.props;
        if (dataTodos.length <= 0) return;
        if (status === true) {
            return dataTodos.filter((dataTodo, index) => {
                return dataTodo.status === true;
            }).length
        }
        else if (status === false) {
            return dataTodos.filter((dataTodo, index) => {
                return dataTodo.status === false;
            }).length;
        }
    }
    progress = () => {
        const { dataTodos } = this.props;
        if (dataTodos.length <= 0) return;
        let total = dataTodos.length;
        let complete = dataTodos.filter(dataTodo => dataTodo.status === true).length;
        let notComplete = dataTodos.filter(dataTodo => dataTodo.status === true).length;
        return Math.ceil((complete / total) * 100);
    }
    render() {
        const { dataTodos } = this.props;
        return (
            <div className="todos__footer">
                <div className="progress-bar">
                    <span className="progress-bar__name">Tiến trình</span>
                    <div className="progress-bar__percent">
                        <div className="percent" style={{ width: this.progress() + '%' }}>{this.progress()}%</div>
                    </div>
                    <div className="progress-bar__value">100%</div>
                </div>
                <div className="counts">
                    <div className="count ">
                        <div className="count__content count--total">
                            Tổng cộng:
        <span className="numb numb-total">
                                {
                                    dataTodos.length
                                }
                            </span>
                            <span className="bd border1" />
                            <span className="bd border2" />
                            <span className="bd border3" />
                            <span className="bd border4" />
                        </div>
                    </div>
                    <CountCompleteContainer />
                    <div className="count">
                        <div className="count__content count--not-complete">
                            Chưa hoàn thành:
                        <span className="numb numb-not-complete">
                                {
                                    this.count(false) ? this.count(false) : 0
                                }

                            </span>
                            <span className="bd border1" />
                            <span className="bd border2" />
                            <span className="bd border3" />
                            <span className="bd border4" />
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Counts;