import React, { Component } from 'react';
import { major_op, unit_op, ques_op } from './../New/question-type-obj';
// import {Prompt} from 'react-router-dom';


class Select extends Component {

    state = {
        major: "",
        unit: "",
        ques_type: ""
    }


    showOptions = () => {
        var result = null;

        result = major_op.map((item, index) => {
            return (
                <option key={index} value={item[1]} name="major">{item[0]}</option>
            )
        })

        return result
    }


    showOptions2 = (major) => {
        var result = null;

        if (unit_op[major]) {
            result = unit_op[major].map((item, index) => {
                return (
                    <option key={index} value={item[1]} name="major">{item[0]}</option>
                )
            })
        }

        return result
    }



    showOptions3 = (major, unit) => {
        var result = null;
        if (major.substring(0, 2) === "kl") {

            result = ques_op[major.substring(0, 2)].map((item, index) => {
                return (
                    <option key={index} value={item[1]} name="ques_type">{item[0]}</option>
                )
            })
        } else if (ques_op[unit] !== undefined) {
            result = ques_op[unit].map((item, index) => {
                return (
                    <option key={index} value={item[1]} name="ques_type">{item[0]}</option>
                )
            })
        }


        return result
    }


    handleSelectChange = (event) => {
        if (event.target.name === "major") {
            this.setState({
                unit: "",
                [event.target.name]: event.target.value
            })
        } else if (event.target.name === "unit") {
            this.setState({
                ques_type: "",
                [event.target.name]: event.target.value
            })
        } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }


        if (event.target.name === "ques_type" && event.target.value !== "") {
            if (this.state.unit !== "") {
                this.props.handleSelectChange(this.state.major, this.state.unit, event.target.value)
            }

        }
    }


    render() {

        return (
            <div className="container">
                <div className="col-sm-3 col-md-3 col-lg-3">
                    <select name="major" value={this.state.major} className="form-control" onChange={this.handleSelectChange}>
                        <option value="" name="major">Chọn lĩnh vực chuyên môn</option>
                        {this.showOptions()}
                    </select>
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3">
                    <select name="unit" value={this.state.unit} className="form-control" onChange={this.handleSelectChange}>
                        <option value="" name="unit">Chọn kiến thức kiểm tra</option>
                        {this.showOptions2(this.state.major)}
                    </select>
                </div>

                <div className="col-sm-3 col-md-3 col-lg-3">
                    <select name="ques_type" value={this.state.ques_type} className="form-control" onChange={this.handleSelectChange}>
                        <option value="" name="ques_type">Chọn lĩnh vực câu hỏi</option>
                        {this.showOptions3(this.state.major, this.state.unit)}
                    </select>
                </div>
                {/*<Prompt message={location => (`Ban chac chan muon di den ${location.pathname}`)}/>*/}
            </div>

        );
    }
}

export default Select;
