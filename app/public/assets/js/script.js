
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
var themeSong = "assets/sounds/thronesTheme.mp3"
var isPlaying = false;

// audio for characters
var characterAudioElement = document.createElement("audio");
var isPlaying_character = false;

// functions
// --------------------------------------------------------------------------
	// captures data from form
	function submitForm() {
		event.preventDefault();

		var isValid = true;

		// captures user data from survey in abject
		var userData = {
			name: $("#name").val(),
			photo: $("#photo").val(),
			scores: [
				$("#Q1").val(),
				$("#Q2").val(),
				$("#Q3").val(),
				$("#Q4").val(),
				$("#Q5").val(),
				$("#Q6").val(),
				$("#Q7").val(),
				$("#Q8").val(),
				$("#Q9").val(),
				$("#Q10").val(),
				$("#Q11").val(),
				$("#Q12").val()
			]
		}

		for (var i=0; i<userData.scores.length; i++) {
			if (!userData.scores[i]) {
				isValid = false;
				// $("#Q"+(i+1)).material_select();
				// $("#Q"+(i+1)).addClass("isvalid");
				$("#q"+(i+1)).addClass("isvalid");
				console.log($("#Q"+(i+1)));
			}
		}
		
		//testing
		console.log(userData);

		var currentURL = window.location.origin;
		// validate form
		if (isValid) {
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
			clearArrays();
		} else {

		}

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

function clearArrays() {
	bestMatch = [];
	userInfo = [];
}



// mainProcess
// --------------------------------------------------------------------------

$("#submit").on("click", submitForm);

$(".themeSong").on("click", playThemeSong);

$("#playSound").on("click", playCharacterSound);

});