import React, { Component } from 'react';
import Question from './Question';

class Question_row extends Component {


    render() {
        return (
            <div className="container">
                <Question question_id={this.props.data_left.id}
                    question_n={this.props.question_n}
                    question={this.props.data_left.ques}
                    choice_a={this.props.data_left.ch_a}
                    choice_b={this.props.data_left.ch_b}
                    choice_c={this.props.data_left.ch_c}
                    choice_d={this.props.data_left.ch_d}
                    answer={this.props.data_left.ans}
                    test={this.props.data_left.test} />

                {this.props.data_right !== undefined ?
                    <Question question_id={this.props.data_right.id}
                        question_n={this.props.question_n + 1}
                        question={this.props.data_right.ques}
                        choice_a={this.props.data_right.ch_a}
                        choice_b={this.props.data_right.ch_b}
                        choice_c={this.props.data_right.ch_c}
                        choice_d={this.props.data_right.ch_d}
                        answer={this.props.data_right.ans}
                        test={this.props.data_right.test} />
                    : ""}
            </div>

        );
    }
}

export default Question_row;
