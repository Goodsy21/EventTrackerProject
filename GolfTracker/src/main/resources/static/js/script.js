console.log("script.js loaded");
window.addEventListener('load', function() {
	init();
});

function init() {
	loadRounds();
	document.newRoundForm.button.addEventListener('click', function(evt) {
	evt.preventDefault();
	let newRound = {
		score: document.newRoundForm.score.value,
		course: document.newRoundForm.course.value,
		greenFee: document.newRoundForm.greenFee.value,
		beveragesConsumed: document.newRoundForm.beveragesConsumed.value,
		lostBalls: document.newRoundForm.lostBalls.value
		};
		console.log(newRound);
		addRound(newRound);
	});
}
function displayError(message) {
	let div = document.getElementById('appendMe');
	div.textContent = message;	
}

function loadRounds() {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/rounds');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let rounds = JSON.parse(xhr.responseText); 
				displayRounds(rounds);
				console.log(rounds);
			} else {
				displayError('Error finding rounds...');
			}
		}
	};

	xhr.send();
};

function addRound(newRound) {
	//AJAX
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/rounds');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let newRound = JSON.parse(xhr.responseText); 
				loadRounds();
				console.log(newRound);
			} else {
				displayError('Error adding a new round' + xhr.status);
				
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(newRound));
}

function displayRounds(rounds) {
	let div = document.getElementById('appendMe');
	document.body.append(div);
	div.textContent = '';

	let table = document.createElement('table');
	let tableHead = document.createElement('thead');
	let tableRow = document.createElement('tr');
	let tableHead1 = document.createElement('th');
	let tableHead2 = document.createElement('th');
	let tableHead3 = document.createElement('th');
	let tableHead4 = document.createElement('th');
	let tableHead5 = document.createElement('th');
	let tableHead6 = document.createElement('th');
	let tableBody = document.createElement('tbody');

	tableHead1.textContent = 'ID';
	tableHead2.textContent = 'Course Name';
	tableHead3.textContent = 'Score';
	tableHead4.textContent = 'Balls Lost';
	tableHead5.textContent = 'Beverages Consumed';
	tableHead6.textContent = 'Green Fee';
	div.append(table);
	table.append(tableHead);
	tableHead.append(tableRow);
	tableRow.append(tableHead1);
	tableRow.append(tableHead2);
	tableRow.append(tableHead3);
	tableRow.append(tableHead4);
	tableRow.append(tableHead5);
	tableRow.append(tableHead6);
	table.append(tableBody);
	div.style.alignItems = "center";

	for (var i in rounds) {
		let tableRow2 = document.createElement('tr');
		tableBody.append(tableRow2);
		let tableData1 = document.createElement('td');
		let tableData2 = document.createElement('td');
		let tableData3 = document.createElement('td');
		let tableData4 = document.createElement('td');
		let tableData5 = document.createElement('td');
		let tableData6 = document.createElement('td');
		let roundId = rounds[i].id;
		let courseName = rounds[i].course;
		let par = rounds[i].score;
		let fee = rounds[i].greenFee;
		let balls = rounds[i].lostBalls;
		let bevs = rounds[i].beveragesConsumed;
		
		console.log(roundId);
		console.log(courseName);
		console.log(par);
		console.log(balls);
		console.log(bevs);
		console.log('$' + fee);

		tableData1.textContent = roundId;
		tableData2.textContent = courseName;
		tableData3.textContent = par;
		tableData4.textContent = balls;
		tableData5.textContent = bevs;
		tableData6.textContent = '$' + fee + ' green fee';

		tableRow2.append(tableData1);
		tableRow2.append(tableData2);
		tableRow2.append(tableData3);
		tableRow2.append(tableData4);
		tableRow2.append(tableData5);
		tableRow2.append(tableData6);

		table.style.textAlign = "center";
		table.style.border = "solid";
		tableRow.style.border = "solid";
		tableHead.style.border = "solid";
		tableBody.style.border = "solid";
		tableHead1.style.border = "solid";
		tableHead2.style.border = "solid";
		tableHead3.style.border = "solid";
		tableHead4.style.border = "solid";
		tableHead5.style.border = "solid";
		tableHead6.style.border = "solid";
		tableData1.style.border = "solid";
		tableData2.style.border = "solid";
		tableData3.style.border = "solid";
		tableData4.style.border = "solid";
		tableData5.style.border = "solid";
		tableData6.style.border = "solid";
	}
};

