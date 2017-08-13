
$(document).ready(function(){

// Global Variables
// --------------------------------------------------------------------------
	// materialize elements
	$('.parallax').parallax();
	$('select').material_select();
	$('.modal').modal();

// stores data collected in api routes
var bestMatch = [];
var userInfo = [];

// audio for theme
var audioElement = document.createElement("audio");
var themeSong = "assets/sounds/mainTheme.mp3"
var isPlaying = false;

// audio for characters
var characterAudioElement = document.createElement("audio");
var isPlaying_character = false;

// functions
// --------------------------------------------------------------------------
	// captures data from form
	function submitForm() {
		event.preventDefault();

		// captures user data from survey in abject
		var userData = {
			name: $("#name").val(),
			photo: $("#photo").val(),
			scores: [
				q1 = $("#Q1").val(),
				q2 = $("#Q2").val(),
				q3 = $("#Q3").val(),
				q4 = $("#Q4").val(),
				q5 = $("#Q5").val(),
				q6 = $("#Q6").val(),
				q7 = $("#Q7").val(),
				q8 = $("#Q8").val(),
				q9 = $("#Q9").val(),
				q10 = $("#Q10").val(),
				q11 = $("#Q11").val(),
				q12 = $("#Q12").val()
			]
		}
		
		//testing
		console.log(userData);

		var currentURL = window.location.origin;

		$.post("/api/friends", userData, function(data) {

				console.log("userData added successfuly");
				console.log("Best Friend: " + data.name);
				console.log("User Name: " + userData.name);
				console.log("---------------------------------");
				console.log(data.description);
				console.log(data.sound);


				// push data and user data into global variables
				bestMatch.push(data);
				userInfo.push(userData);
				// adds best friend info to modal
				addInfo();
		});

		//display modal
		$('#modal1').modal('open');

	}

// function to set modal to diplay best friend info
function addInfo() {
	$("#matchPhoto").attr("src", bestMatch[0].photo);
	$("#friendName").html(bestMatch[0].name);
	$("#userName").html(userInfo[0].name);
	$("#friendDescription").html(bestMatch[0].description);
	characterAudioElement.setAttribute("src", bestMatch[0].sound);
}

function playCharacterSound() {
	// pause audio if it is still playing
	audioElement.pause();

	if(!isPlaying_character) {
		characterAudioElement.play();
		characterAudioElement.volume = .01;
		isPlaying_character = true;
	}
	else if (isPlaying_character) {
		characterAudioElement.pause();
		isPlaying_character = false;
	}
}

function playThemeSong() {
	characterAudioElement.pause();
	audioElement.setAttribute("src", themeSong);
	if(!isPlaying) {
		audioElement.play();
		audioElement.volume = .01;
		isPlaying = true;
	}
	else if (isPlaying) {
		audioElement.pause();
		isPlaying = false;
	}
}



// mainProcess
// --------------------------------------------------------------------------

$("#submit").on("click", submitForm);

$(".themeSong").on("click", playThemeSong);

$("#playSound").on("click", playCharacterSound);

});