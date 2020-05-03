import React, { Component } from 'react';

class Question_test extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            checked: ""
        })
    }


    UNSAFE_componentWillReceiveProps = (nextProps) => {
        
        if(nextProps.clearChecked !== this.props.clearChecked){
            this.setState({
                checked: ""
            })
        }
    }

    handleOptionChange = (event) => {
        var props = this.props.data
        this.setState({
            [event.target.name]: event.target.value
        })
        if(event.target.value === props.ans){
            props.correct(1);
        }else if(event.target.value !== props.ans && this.state.checked === props.ans){
            props.correct(-1);
        }
    }


    render() {
        
        const props = this.props.data;

        return (
            <div className="col-md-6 col-lg-6 mb-2" style={props.ans !== this.state.checked && props.showResult? {'color': 'red'}: {}}>
                <form>

                    <div className="form-group">
                        <h4>
                            <span><b>Question {props.ques_n + 1}: </b></span>
                            {props.ques}
                        </h4>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
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

export default Question_test;
