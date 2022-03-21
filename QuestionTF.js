"use strict";

class QuestionTF{
	constructor(question, answerOne, answerOneValue, answerTwo, answerTwoValue){

	this.question = question;

	this.answerOne = answerOne;
	this.answerTwo = answerTwo;
	}

	getQuestion(){
		return this.question;
	}
	getAnswerOne(){
		return this.answerOne;
	}
	getAnswerOneValue(){
		return this.answerOneValue;
	}
	getAnswerTwo(){
		return this.answerTwo;
	}
	getAnswerTwoValue(){
		return this.answerTwoValue;
	}
}