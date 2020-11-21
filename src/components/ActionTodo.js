import React, { Component } from 'react';
import { deleteAll } from '../actions/actions';

class ActionTodo extends Component {

    classStatusAction = () => {
        const { statusAction } = this.props;
        if (statusAction === null) {
            return "actions"
        }
        else if (statusAction) {
            return "actions hide-actions";
        }
        else if (statusAction === false) {
            return "actions show-actions";
        }
    }
    showAdd = () => {
        const { showAdd } = this.props;
        showAdd();
    }
    onSearch = (e) => { //Bắt sự kiện onChange của ô tìm kiếm để lấy ra giá trị
        const { onSearch } = this.props;
        onSearch(e.target.value);
    }
    changeIcon = (statusIcon, statusSort) => {
        if (statusIcon === statusSort) {
            return '';
        }
        else {
            return ' d-none';
        }
    }

    render() {
        // console.log(this.props.statusAction)
        const { keyword, onReset, onSort, statusSort, onSelectAll, onDeleteAll } = this.props;
        return (
            <div className={this.classStatusAction()}>
                <h3 className="setting__header">
                    Chức năng
    </h3>
                <div className="setting__body mb-10">
                    <div className="actions__input-box">
                        <input
                            type="text"
                            className="actions__input"
                            placeholder="Tìm kiếm..."
                            name="fieldSearch"
                            value={keyword}
                            onChange={this.onSearch}
                        />
                        <span
                            className="icon-reset"
                            onClick={onReset}
                        >
                            <i className="fas fa-eraser" />
                        </span>
                    </div>
                    <div className="actions__btn">
                        <button
                            className="btn btn--back btn--add"
                            onClick={this.showAdd}
                        >
                            <i className="fas fa-plus-square" />
                        </button>
                    </div>
                </div>
                <ul className="setting__menu">
                    <li className="setting__menu-item">
                        <button
                            className="btn btn--sort"
                            onClick={onSort}
                        >
                            <span
                                className="btn-text"
                            >
                                Sắp xếp
          </span>
                            <span className={"icon-check icon-sort " + this.changeIcon(-1, statusSort)}>
                                <i className="fas fa-sort" />
                            </span>

                            <span className={"icon-check icon-sort icon--not-complete " + this.changeIcon(0, statusSort)}>
                                <i className="fas fa-times" />
                            </span>
                            <span className={"icon-check icon-sort icon--complete " + this.changeIcon(1, statusSort)}>
                                <i className="fas fa-check" />
                            </span>
                        </button>
                    </li>
                    <li className="setting__menu-item">
                        <button
                            className="btn btn--mark-complete"
                            onClick={() => onSelectAll(true)}
                        >
                            <div className="btn-text">
                                Chọn tất cả
          </div>
                            <span className="icon-check icon-mark icon--complete ">
                                <i className="fas fa-check" />
                            </span>
                        </button>
                    </li>
                    <li className="setting__menu-item">
                        <button
                            className="btn btn--mark-not-complete"
                            onClick={() => onSelectAll(false)}
                        >
                            Chọn tất cả
                        <span className="icon-check icon-mark icon--not-complete">
                                <i className="fas fa-times" />
                            </span>
                        </button>
                    </li>
                    <li className="setting__menu-item">
                        <button
                            className="btn btn--delete-all"
                            onClick={() => onDeleteAll()}
                        >
                            Xóa tất cả
          <span className="icon-check icon-delete-all">
                                <i className="fas fa-trash" />
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ActionTodo;