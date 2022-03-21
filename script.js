"use strict";

var questions = [];
var answers = [];

var currentQuestion = -1;


function displayResults(){
	for(var i = 0;i<answers.length;i++){
		print(answers[i].getName() + ": " + answers[i].getValue());
	}
}


function Initialize(){
	questions.push(new QuestionTF(
		"temp question",
		"True",
		new AnswerType("true", 1),
		"False",
		new AnswerType("false", -1)
		));
}