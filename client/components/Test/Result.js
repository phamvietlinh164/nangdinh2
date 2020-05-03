import React, { Component } from 'react';

const styles = {
    transition: 'all 0.4s ease-out',
};

const qus_num = 50;

class Result extends Component {

    onClick = () => {
        this.props.onClick();
    }

    render() {
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 result" style={{ ...styles, opacity: this.props.opacity, zIndex: this.props.zIndex }}>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Kết quả bài Test
                        <span className="glyphicon glyphicon-remove" onClick={this.onClick}></span>
                    </div>
                    <div className="panel-body">
                        Số câu đúng: {`${this.props.correct}`}/ {`${qus_num < this.props.length? qus_num: this.props.length}`} <br />
                        
                        {
                            this.props.correct < (qus_num < this.props.length? qus_num: this.props.length)?
                            <p>Kéo lên trên để xem các câu sai</p>: ""
                        }
                        
                    </div>
                </div>
            </div>

        );
    }
}

export default Result;
