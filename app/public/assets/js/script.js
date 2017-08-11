
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
				q11 = $("#Q11").val()
			]
		}
		
		//testing
		console.log(userData);

		var currentURL = window.location.origin;

		$.post("/api/friends", userData, function(data) {

				console.log("userData added successfuly");
				console.log(data);
			
		});

	}



// mainProcess
// --------------------------------------------------------------------------

$("#submit").on("click", submitForm);


});