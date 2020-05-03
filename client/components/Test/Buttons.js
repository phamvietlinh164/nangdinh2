import React, { Component } from 'react';



class Result extends Component {

    onClick = () => {
        this.props.onClick()
    }

    onClick2 = () => {
        this.props.onClick2()
    }

    render() {
        
        return (
            <div className="form-group">
                <label className="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label"></label>
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <button className="btn btn-primary" onClick={this.onClick}>
                        Hiển thị kết quả
                    </button>&nbsp;&nbsp;
                    <button className="btn btn-primary" onClick={this.onClick2}>
                        Test lại
                    </button>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            </div>

        );
    }
}

export default Result;
