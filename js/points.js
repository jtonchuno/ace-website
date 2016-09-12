// Creates an event
function Submit (form) {
	// Gets data from form
	var title = form.title.value;
	var points = form.points.value;
	var type = form.type.value;

	// Rewrites HTML to display name entry page
	document.getElementById("event").innerHTML = "";
	document.getElementById("entry").innerHTML = "<h2>" + title + "</h2>" +
							"<label>Enter Name: </label>" +
							"<input type=\"text\" id=\"name\" onkeyup=\"KeyPress("+points+", event)\">" +
							"<div id=\"result\"></div>" +
							"<br><br>" +
							"<h2>Entries</h2>" +
							"<table id=\"table\">" +
								"<tr>" +
									"<th>Name</th>" +
									"<th>" + (type.charAt(0).toUpperCase() + type.slice(1)) + " Points</th>" +
								"</tr>" +
							"</table>";
	document.getElementById("name").focus();
}

// User types into name entry text box
function KeyPress (points, e) {
	var input = document.getElementById("name").value;		// Get what the user has typed so far

	if (e.keyCode == 13) {	// User pressed "Enter" key
		document.getElementById("name").value = "";	// Reset text field
		document.getElementById("result").innerHTML = "";	// Reset autocomplete field

		// Create row in table
		var table = document.getElementById("table");
		var row = table.insertRow(1);
		var nameCell = row.insertCell(0);
		var pointsCell = row.insertCell(1);

		// Enter data into row
		nameCell.innerHTML = input;
		pointsCell.innerHTML = points;
	}
	else {
		Autocomplete(e.keyCode, input);
	}
}

var members = ['Chris McGuire', 'Zachary McIlvoy', 'Spencer Taylor', 'Suraj Swarnapuri', 'Rolando Gamboa', 'Danny Thorne', 'Matt Day', 'Christopher Mangini', 'Bryan Bondy', 'Alex Content', 'Jawaad Ali-Kparah', 'Miguel Romero', 'Garrett Mize', 'Mitchell Flowers', 'Mitchell Shockley', 'Parker Buss', 'Jacob Arend', 'Tyler Otten', 'Evan Poe',
'Tyler Quigley', 'Michael Moellering', 'Ruben Martinez', 'Conner Hardy', 'Philip Ozgul', 'Grantland Massey', 'Joey Moellering', 'Jack Sullivan', 'Gerald Daigle', 'Matthew Myers', 'Patrick Flores', 'Trevor Groves', 'Aaron Catlin', 'Tyler Young', 'Benedikt Scheifele', 'Zack Wiseman', 'rishub mishra', 'Jack Prudhomme', 'Matthew Turner', 'Harrison Maxwell',
 'Ryan Hernandez', 'Dustin Martin', 'Austin Keith', 'Caleb	Fisher', 'C.J. Warren', 'Mohamad Abukishk', 'zachary silverman', 'Mitchell Cirioli', 'Ruben Tamez'];

// Search through list of ACE members and match against user input
function filterMembers(input) {
  var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
  return members.filter(function(members) {
	 if (members.match(reg)) {
		return members;
	 }
  });
}

function Autocomplete(key, input) {
  var autoCompleteResult = filterMembers(input);	// Filter list of members against user input
  document.getElementById("result").innerHTML = autoCompleteResult;	// Display matches

  // Autocomplete entry if only one match
  // Also, only do this if key pressed was not delete or backspace
  if (autoCompleteResult.length == 1 && key != 8 && key != 46) {
	  document.getElementById("name").value = autoCompleteResult;
  }
}
