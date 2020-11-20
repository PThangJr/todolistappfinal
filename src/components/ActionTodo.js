import React, { Component } from 'react';

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

    render() {
        // console.log(this.props.statusAction)
        const { keyword, onReset } = this.props;
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
                        <button className="btn btn--sort">
                            <span className="btn-text">
                                Sắp xếp
          </span>
                            <span className=" icon-sort d-none">
                                <i className="fas fa-sort" />
                            </span>
                            <span className="icon-check icon-sort icon--complete ">
                                <i className="fas fa-check" />
                            </span>
                            <span className="icon-check icon-sort icon--not-complete d-none">
                                <i className="fas fa-times" />
                            </span>
                        </button>
                    </li>
                    <li className="setting__menu-item">
                        <button className="btn btn--mark-complete">
                            <div className="btn-text">
                                Chọn tất cả
          </div>
                            <span className="icon-check icon-mark icon--complete ">
                                <i className="fas fa-check" />
                            </span>
                        </button>
                    </li>
                    <li className="setting__menu-item">
                        <button className="btn btn--mark-not-complete">
                            Chọn tất cả
          <span className="icon-check icon-mark icon--not-complete">
                                <i className="fas fa-times" />
                            </span>
                        </button>
                    </li>
                    <li className="setting__menu-item">
                        <button className="btn btn--delete-all">
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