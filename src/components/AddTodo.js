import React, { Component } from 'react';

class Add extends Component {
    classAddOption = () => { //Show Add Action
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
    render() {
        const { onHandleAdd, name, onReset } = this.props;
        return (
            <div className={this.classAddOption()}>
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
                            onClick={this.showAction}
                        >
                            <i className="fas fa-cog" />
                        </button>
                    </div>

                </form>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
    }
    showAction = () => { //Show Action Components
        const { showAction } = this.props;
        showAction();
    }
    onChange = (e) => { //Bắt sự kiện onChange của ô thêm công việc
        const { onChange } = this.props;
        onChange(e.target.value);
    }
}

export default Add;