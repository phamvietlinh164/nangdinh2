import React, { Component } from 'react';
import Question_row from './../components/Practise/Question_row';
import { urlFind, shuffleArray, sliceQues, addLocSto } from './../New/Helpers';
import { testData } from './../New/Constants';
import Select from './../components/Select';
import Body_logo from './../components/Body_logo';
import Spinner from './../components/Spinner';

const qus_num = 50;

class Practise extends Component {

    state = {
        data: testData,
        sh_data: testData,
        loading: false
    }


    showQuestion_row = (data) => {
        var result = null;
        // var i;
        if (data.length > 0) {
            result = data.map((question, index) => {
                if (index % 2 === 0 && index < qus_num) {
                    return (
                        <Question_row key={index} question_n={index} data_left={data[index]} data_right={data[index + 1]} />
                    )
                }
            });

        }

        return result
    }

    onClick = () => {
        // if (this.state.sh_data.length !== 0) {
            this.setState({
                sh_data: sliceQues(this.state.data).slice(0, qus_num)
            })
        // }


        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

    }

    handleSelectChange = async (major, unit, ques_type) => {

        var data = [];
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
                    //         if(data[index].ans.length > 1){
                    //             data.splice(index, 1)
                    //         }
                    //     }else {
                    //         data.splice(index, 1)
                    //     }
                    // })

                    // this.setState({
                    //     data: data
                    // });
                    this.setState({
                        data: data
                    })

                    if(localStorage.getItem('data') && localStorage.getItem('data') === `${major}/${unit}/${ques_type}`){
                        this.setState({
                            sh_data: sliceQues(data).slice(0, qus_num)
                        })
                    }else {
                        this.setState({
                            sh_data: shuffleArray(data).slice(0, qus_num)
                        })
                    }
                    
                    addLocSto(`${major}/${unit}/${ques_type}`)
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
                {this.showQuestion_row(this.state.sh_data)}
                <br />

                {this.state.sh_data.length !== 0 ?
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
                    : ""}
                    
            </div>
        );
    }
}

export default Practise;
