import React, { Component } from 'react';




class Button extends Component {

    onClick = () => {
        this.props.onClick()
    }

    render() {
        
        

        return (
            <div className="form-group">
                <label className="col-md-4 control-label"></label>
                <div className="col-md-4">
                    <button id="singlebutton" name="singlebutton" className="btn btn-primary center-block" onClick={this.onClick}>
                        Tiếp tục
                </button>
                </div>
                <br />
                <br />
            </div>

        );
    }
}

export default Button;
