$(document).ready(function(){
    var questions = [
      "What is the capital of Kazakhstan?",
      "Which planet is closest to the sun?",
      "What is the largest continent?"
    ];

    var answers = [
      "Astana",
      "Venus",
      "Asia"
    ];

    var choice_options = [
      ["London", "Paris", "Astana", "Seoul"],
      ["Earth", "Venus", "Mars", "Jupiter"],
      ["Asia", "Africa", "Europe", "North America"]
    ]; 

var countCorrect = 0;
var reset = false;

var quizBox = $("#quiz-box"); 
    
for (var i = 0; i < questions.length; i++) {
  quizBox.append("<div class='question'>");
  $('.question:last-child').append("<p class='d'>" + questions[i] + "</p>");
  
  for (var j = 0; j < choice_options[i].length; j++) {
      var choice = choice_options[i][j];
      $('.question:last-child').append("<label><input type='radio' name='q" + i + "' value='" + choice + "'>" + choice + "</label>");
  }
}

$("button").click(function(event) {
  countCorrect = 0;
  for (var i = 0; i < questions.length; i++) {
      var selected = $("input[name='q" + i + "']:checked").val();
      if (selected == answers[i]) {
          countCorrect++;
      }
  }
  $("#quiz-box").append("<h2>Result of the quiz is: " + countCorrect + "</h2>");
}); 
});