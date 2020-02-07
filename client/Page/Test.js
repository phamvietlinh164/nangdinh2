import React, { Component } from 'react';
import Question_row_test from './../components/Test/Question_row_test';
import { urlFind, shuffleArray } from './../New/Helpers';
import {testData} from './../New/Constants';
import Select from './../components/Select';
import Spinner from './../components/Spinner';


const styles = {
    transition: 'all 0.4s ease-out',
};

const qus_num = 50;


class Test extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            data: testData,
            opacity: 0,
            loading: false,
            showResult: false,
            correct: 0,
            clearChecked: 0,
            zIndex: -1
        })
    }


    showQuestion_row = (data) => {
        var result = null;
        // var i;
        if (data.length > 0) {
            result = data.map((question, index) => {
                if (index % 2 === 0 && index < qus_num) {
                    
                    return (
                        <Question_row_test key={index}
                            question_n={index}
                            data_left={data[index]}
                            data_right={data[index + 1]}
                            showResult={this.state.showResult}
                            correct={this.correct}
                            clearChecked={this.state.clearChecked} />
                    )
                }
            });

        }

        return result
    }

    onClick = () => {
        this.setState({
            showResult: true,
            opacity: this.state.opacity === 0 ? 1 : 0,
            zIndex: this.state.zIndex === -1 ? 1 : -1
        })
    }

    onClick2 = () => {
        if (this.state.data.length !== 0) {
            var data2 = shuffleArray(this.state.data);
            // console.log(this.state.data.length)
            this.setState({
                data: data2,
            })
            this.reFresh()
        }
        
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

    }

    reFresh = () => {
        this.setState({
            opacity: 0,
            showResult: false,
            correct: 0,
            clearChecked: this.state.clearChecked + 1,
            zIndex: -1
        })
    }

    handleSelectChange = async (major, unit, ques_type) => {

        var data = [];
        var i;
        var url = urlFind(major, unit, ques_type);

        this.setState({ loading: true })

        fetch(url, {
            method: 'GET',
        }).then(response => {
            this.setState({
                loading: false
            });

            if (response.status === 200) {
                response.json().then(data => {
                    // data.forEach((item, index) => {
                    //     if(data[index].ans){
                    //         if(data[index].ans.length !== 1){
                    //             data.splice(index, 1)
                    //         }
                    //     }else {
                    //         data.splice(index, 1)
                    //     }
                    // })

                    this.setState({
                        data: shuffleArray(data),
                    })
                    this.reFresh()

                })
            } else {
                alert('Đã có lỗi xảy ra, vui lòng thử lại sau!')
            }
        }).catch(reason => {
            this.setState({
                loading: false,
            })
            this.reFresh()
            console.log('abc', reason)
            alert('Đã có lỗi xảy ra, vui lòng thử lại sau!')
        })

    }

    correct = (correct) => {
        if(correct === 1){
            this.setState({
                correct: this.state.correct + 1
            })
        }else {
            this.setState({
                correct: this.state.correct - 1
            })
        }

    }

    render() {

        
        return (
            <div className="content">

                {this.state.loading && <Spinner />}
                <Select handleSelectChange={this.handleSelectChange} />
                <br /><br />
                {this.showQuestion_row(this.state.data)}
                <br /><br />

                {this.state.data.length !== 0 ?
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
                    : ""}
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 result" style={{ ...styles, opacity: this.state.opacity, zIndex: this.state.zIndex }}>
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            Kết quả bài Test
                            <span className="glyphicon glyphicon-remove" onClick={this.onClick}></span>
                        </div>
                        <div className="panel-body">
                            Số câu đúng: {`${this.state.correct}`}/ {`${qus_num < this.state.data.length? qus_num: this.state.data.length}`} <br />
                            
                            {
                                this.state.correct < (qus_num < this.state.data.length? qus_num: this.state.data.length)?
                                <p>Kéo lên trên để xem các câu sai</p>: ""
                            }
                            
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Test;
