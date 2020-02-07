import React, { Component } from 'react';
import Question_test from './Question_test';

class Question_row_test extends Component {


    render() {
        return (
            <div className="container">
                <Question_test question_id={this.props.data_left.id}
                    question_n={this.props.question_n}
                    question={this.props.data_left.ques}
                    choice_a={this.props.data_left.ch_a}
                    choice_b={this.props.data_left.ch_b}
                    choice_c={this.props.data_left.ch_c}
                    choice_d={this.props.data_left.ch_d}
                    answer={this.props.data_left.ans}
                    correct={this.props.correct}
                    showResult={this.props.showResult}
                    clearChecked={this.props.clearChecked} />

                {this.props.data_right !== undefined ?
                    <Question_test question_id={this.props.data_right.id}
                        question_n={this.props.question_n + 1}
                        question={this.props.data_right.ques}
                        choice_a={this.props.data_right.ch_a}
                        choice_b={this.props.data_right.ch_b}
                        choice_c={this.props.data_right.ch_c}
                        choice_d={this.props.data_right.ch_d}
                        answer={this.props.data_right.ans}
                        correct={this.props.correct}
                        showResult={this.props.showResult}
                        clearChecked={this.props.clearChecked} />
                    : ""}
            </div>

        );
    }
}

export default Question_row_test;
