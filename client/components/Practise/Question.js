import React, { Component } from 'react';


const styles = {
	transition: 'all 0.4s ease-out',
};

class Question extends Component {

    state = {
    	checked: ""
    }

    componentWillReceiveProps = (nextProps) => {
        
        this.setState({
            checked: ""
        })
        console.log('abc')
        // console.log(nextProps);
        
    }

    handleOptionChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

        if(localStorage.getItem('data')){
        	if(!this.props.test){
	        	var arr = JSON.parse(localStorage.getItem(localStorage.getItem('data')))? JSON.parse(localStorage.getItem(localStorage.getItem('data'))): [];
	        	arr.push(this.props.question_id);
	        	localStorage.setItem(localStorage.getItem('data'), JSON.stringify(arr))
	        }
        }
    }


    render() {

        
        return (
            <div className="col-md-6 col-lg-6 mb-2">
                <form>

                    <div className="form-group">
                        <h4>
                            <span><b>Question {this.props.question_n + 1}: </b></span>
                            {this.props.question}
                        </h4>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label">
                        	{this.props.answer === "a" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "a")? 1: 0 }}></span> : ""}
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
                        	{this.props.answer === "b" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "b")? 1: 0 }}></span> : ""}
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
                            	{this.props.answer === "c" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "c")? 1: 0 }}></span> : ""}
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
                            	{this.props.answer === "d" ? <span className="glyphicon glyphicon-ok" style={{ ...styles, opacity: (this.state.checked === "d")? 1: 0 }}></span> : ""}
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

export default Question;
