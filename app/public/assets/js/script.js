
$(document).ready(function(){

// Global Variables
// --------------------------------------------------------------------------
	// materialize elements
	$('.parallax').parallax();
	$('select').material_select();

// functions
// --------------------------------------------------------------------------
	// captures data from form
	function submitForm() {
		event.preventDefault();

		// captures user data from survey in abject
		var userData = {
			userName: $("#name").val(),
			userPhoto: $("#photo").val(),
			userAnswers: [
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
				q11 = $("#Q11").val()
			]
		}
		

		//testing
		console.log(userData);

		// post to api characters
		$.post("/api/friends", userData, function(data) {
			if(data) {
				console.log("your information has been added");
			}
			// clears survey answers
			$("#name").val("");
			$("#photo").val("");
		});

		getUserScore();
	}

	// will calculate the user score from api/friends 
	function getUserScore() {

		var currentURL = window.location.origin;

		$.ajax({ url: currentURL + "/api/friends", method: "GET" }).done(function(friends) {

			console.log(friends);

		});
	}

	// fucntion to clear friends list array
	function clearFriendsList() {
		var currentURL = window.location.origin;
        $.ajax({ url: currentURL + "/api/clear", method: "POST" });
        console.log("friends list cleared");

      // Refresh the page after data is cleared
      location.reload();

    }


// mainProcess
// --------------------------------------------------------------------------

$("#submit").on("click", submitForm);

$("clear").on("click", clearFriendsList);



});