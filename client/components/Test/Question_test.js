import React, { Component } from 'react';

class Question_test extends Component {


    constructor(props) {
        super(props);
        this.state = ({
            checked: "",
            // color: false
        })
    }

    componentWillReceiveProps = (nextProps) => {
        // if(nextProps.showResult && nextProps.showResult !== this.props.showResult){
        //     this.setState({
        //         color: true
        //     })
        // }else if(nextProps.showResult !== this.props.showResult){
        //      this.setState({
        //         color: false
        //     })
        // }
        
        if(nextProps.clearChecked !== this.props.clearChecked){
            this.setState({
                checked: ""
            })
        }
    }

    handleOptionChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        if(event.target.value === this.props.answer){
            this.props.correct(1);
        }else if(event.target.value !== this.props.answer && this.state.checked === this.props.answer){
            this.props.correct(-1);
        }
    }


    render() {
        
        return (
            <div className="col-md-6 col-lg-6 mb-2" style={this.props.answer !== this.state.checked && this.props.showResult? {'color': 'red'}: {}}>
                <form>

                    <div className="form-group">
                        <h4>
                            <span><b>Question {this.props.question_n + 1}: </b></span>
                            {this.props.question}
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
					    	{this.props.choice_a}
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
					    	{this.props.choice_b}
                        </label>
                    </div>
                    {this.props.choice_c?
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input"
                                    type="radio"
                                    name="checked"
                                    value="c"
                                    checked={this.state.checked === "c"}
                                    onChange={this.handleOptionChange} />&nbsp;&nbsp;
						    	{this.props.choice_c}
                            </label>
                        </div>
                        : ""}
                    {this.props.choice_d?
                        <div className="form-check">
                            <label className="form-check-label">
                                <input className="form-check-input"
                                    type="radio"
                                    name="checked"
                                    value="d"
                                    checked={this.state.checked === "d"}
                                    onChange={this.handleOptionChange} />&nbsp;&nbsp;
						    	{this.props.choice_d}
                            </label>
                        </div>
                        : ""}

                </form>
            </div>

        );
    }
}

export default Question_test;
