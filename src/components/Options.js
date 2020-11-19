import React, { Component } from 'react';

class Options extends Component {


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
    classAddAction = () => {
        const { statusAction } = this.props;
        if (statusAction === null) {
            return "add"
        }
        else if (statusAction) {
            return "add show-add";
        }
        else if (statusAction === false) {
            return "add hide-add";
        }
    }
    showOptions = () => { //Show Options Components
        const { showOptions } = this.props;
        showOptions();
    }
    showAdd = () => { //Show Add Component
        const { showAdd } = this.props;
        showAdd();
    }
    onChange = (e) => { //Bắt sự kiện onChange của ô thêm công việc
        const { onChange } = this.props;
        onChange(e.target.value);
    }
    onSubmit = (e) => {
        e.preventDefault();
    }
    onReset = () => {
        console.log('reset')
    }

    render() {
        const { onHandleAdd, name, onReset } = this.props;
        return (
            <div className="setting ">
                <div className={this.classStatusAction()}>
                    <h3 className="setting__header">
                        Chức năng
    </h3>
                    <div className="setting__body mb-10">
                        <div className="actions__input-box">
                            <input type="text" className="actions__input" placeholder="Tìm kiếm..." />
                            <span className="icon-reset"
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
                <div className={this.classAddAction()}>
                    <h3 className="setting__header">
                        Thêm công việc
    </h3>
                    <form
                        className="setting__body"
                        onSubmit={this.onSubmit}
                    >
                        <div className="add__input-box">
                            <input
                                type="text"
                                className="add__input"
                                placeholder="Thêm công việc..."
                                value={name}
                                onChange={this.onChange}
                                autoFocus
                            />
                            <span className="icon-reset"
                                onClick={onReset}

                            >
                                <i className="fas fa-eraser" />
                            </span>
                        </div>
                        <div className="add__btn">
                            <button
                                className="btn btn--glowing-gradient btn--add"
                                onClick={onHandleAdd}
                            >
                                <i className="fas fa-plus-circle" />
          Thêm
        </button>
                            <button
                                className="btn btn--setting"
                                onClick={this.showOptions}
                            >
                                <i className="fas fa-cog" />
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        );
    }
}

export default Options;