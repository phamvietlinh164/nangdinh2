import React, { Component } from 'react';
import {addCheckedQuestion} from '../../New/Helpers';


const styles = {
    transition: 'all 0.4s ease-out',
};

class Question extends Component {

    state = {
        checked: ""
    }

    UNSAFE_componentWillReceiveProps = (nextProps) => {
        
        this.setState({
            checked: ""
        })
        
    }


    handleOptionChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        addCheckedQuestion(this.props.data.id);
    }


    render() {
        
        const props = this.props.data;
        

        return (
            <div className="col-md-6 col-lg-6 mb-2">
                <form>

                    <div className="form-group">
                        <h4>
                            <span><b>Question {props.ques_n + 1}: </b></span>
                            {props.ques}
                        </h4>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                            {props.ans === "a" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "a")? 1: 0 }}></span> : ""}
                            <input className="form-check-input"
                                type="radio"
                                name="checked"
                                value="a"
                                checked={this.state.checked === "a"}
                                onChange={this.handleOptionChange} />&nbsp;&nbsp;
                            {props.ch_a}
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            {props.ans === "b" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "b")? 1: 0 }}></span> : ""}
                            <input className="form-check-input"
                                type="radio"
                                name="checked"
                                value="b"
                                checked={this.state.checked === "b"}
                                onChange={this.handleOptionChange} />&nbsp;&nbsp;
                            {props.ch_b}
                        </label>
                    </div>
                    {props.ch_c?
                        <div className="form-check">
                            <label className="form-check-label">
                                {props.ans === "c" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "c")? 1: 0 }}></span> : ""}
                                <input className="form-check-input"
                                    type="radio"
                                    name="checked"
                                    value="c"
                                    checked={this.state.checked === "c"}
                                    onChange={this.handleOptionChange} />&nbsp;&nbsp;
                                {props.ch_c}
                            </label>
                        </div>
                        : ""}
                    {props.ch_d?
                        <div className="form-check">
                            <label className="form-check-label">
                                {props.ans === "d" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "d")? 1: 0 }}></span> : ""}
                                <input className="form-check-input"
                                    type="radio"
                                    name="checked"
                                    value="d"
                                    checked={this.state.checked === "d"}
                                    onChange={this.handleOptionChange} />&nbsp;&nbsp;
                                {props.ch_d}
                            </label>
                        </div>
                        : ""}

                </form>
            </div>

        );
    }
}

export default Question;
