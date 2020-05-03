import React, { Component } from 'react';
import Question_test from './../components/Test/Question_test';
import Result from './../components/Test/Result';
import Buttons from './../components/Test/Buttons';
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

    showQuestion = (data) => {
        var result = null;
        // var i;
        if (data.length > 0) {
            var data = data.slice(0, qus_num);
            result = data.map((question, index) => {
                question.ques_n = index;  
                question.showResult = this.state.showResult;   
                question.correct = this.correct;
                    
                return (
                    <Question_test key={index} 
                        data={question}
                        clearChecked={this.state.clearChecked}
                        />
                )
            });

        }

        return result
    }

    onClick = () => {
        this.setState({
            showResult: true,
            opacity: this.state.opacity === 0 ? 1 : 0,
            zIndex: this.state.zIndex === -1 ? 1 : -1
        });
    }

    onClick2 = () => {
        if (this.state.data.length !== 0) {
            var data2 = shuffleArray(this.state.data);
            this.setState({
                data: data2,
            })
            this.reFresh()
        }
        
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

    }

    onClick3 = () => {
        this.setState({
            opacity: 0,
            zIndex: -1
        })
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
        this.setState({
            correct: this.state.correct + correct
        })
        
    }

    render() {

        return (
            <div className="content">

                {this.state.loading && <Spinner />}
                <Select handleSelectChange={this.handleSelectChange} />
                <br /><br />
                <div className="container ques">
                    {this.showQuestion(this.state.data)}
                </div>
                <br /><br />

                {this.state.data.length !== 0 ?
                    <Buttons onClick={this.onClick} onClick2={this.onClick2}/>
                    : ""}

                <Result opacity={this.state.opacity} zIndex={this.state.zIndex} length={this.state.data.length} correct={this.state.correct} onClick={this.onClick3}/>
            </div>

        );
    }
}

export default Test;
