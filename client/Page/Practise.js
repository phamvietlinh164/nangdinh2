import React, { Component } from 'react';
import Question from './../components/Practise/Question';
import Button from './../components/Practise/Button';
import { urlFind, shuffleArray, sliceQues, addLocalStorage } from './../New/Helpers';
import { testData } from './../New/Constants';
import Select from './../components/Select';
import Spinner from './../components/Spinner';


class Practise extends Component {

    state = {
        data: [...testData],
        sh_data: [...testData],
        loading: false
    }


    showQuestion = (data) => {
        var result = null;

        // var i;
        if (data.length > 0) {
            result = data.map((question, index) => {
                question.ques_n = index;
                return (
                    <Question key={index} data={question} />
                )

            });
        }

        return result
    }

    componentDidMount = () => {
        localStorage.removeItem('testing');
    }

    onClick = () => {
        // if (this.state.sh_data.length !== 0) {
            this.setState({
                sh_data: sliceQues(this.state.data)
            })
        // }
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

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
                    
                    addLocalStorage(`${major}/${unit}/${ques_type}`);
                    this.setState({
                        data: data,
                        sh_data: sliceQues(data)
                    })

                })
            } else {
                alert('Đã có lỗi xảy ra, vui lòng thử lại sau!')
            }

        }).catch(reason => {
            this.setState({ loading: false })
            console.log('abc', reason)

        })

    }


    render() {
        return (

            <div className="content">
                {this.state.loading && <Spinner />}

                <Select handleSelectChange={this.handleSelectChange} />
                <br /><br />
                <div className="container ques">
                    {this.showQuestion(this.state.sh_data)}
                </div>
                <br />

                {this.state.sh_data.length !== 0 ?
                    <Button onClick={this.onClick} />
                    : ""}
                    
            </div>
        );
    }
}

export default Practise;
