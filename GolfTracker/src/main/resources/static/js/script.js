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

function loadRounds() {
	//AJAX

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/rounds');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				rounds = JSON.parse(xhr.responseText);
				displayRounds(rounds);
				console.log(rounds);
			} else {
				displayError('Error finding rounds...');
			}
		}
	};

	xhr.send();
};

function displayError(message) {
	let div = document.getElementById('appendMe');
	div.textContent = message;
}

function editRd(e) {
	let editMe = e.target.id;
	console.log(editMe);
	console.log(rounds);
	let roundToLoad;
	for (let i = 0; i < rounds.length; i++) {
		if (rounds[i].id == editMe) {
			roundToLoad = rounds[i];
			break;
		}
	} 
	let editor = document.getElementById('editor');
	editor.style.display = 'block';
	document.editRoundForm.course.value = roundToLoad.course;
	document.editRoundForm.greenFee.value = roundToLoad.greenFee;
	document.editRoundForm.score.value = roundToLoad.score;
	document.editRoundForm.lostBalls.value = roundToLoad.lostBalls;
	document.editRoundForm.beveragesConsumed.value = roundToLoad.beveragesConsumed;
		let roundId = roundToLoad.id;
	document.editRoundForm.button.addEventListener('click', function(evt) {
		let editedRound = {
			id: roundId,
			score: document.editRoundForm.score.value,
			course: document.editRoundForm.course.value,
			greenFee: document.editRoundForm.greenFee.value,
			beveragesConsumed: document.editRoundForm.beveragesConsumed.value,
			lostBalls: document.editRoundForm.lostBalls.value
		};
		evt.preventDefault();
		console.log(editedRound);
		edit(editedRound);
	});
}

let rounds = [];

function edit(roundToLoad) {
	//AJAX
	console.log(roundToLoad);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/rounds/' + roundToLoad.id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let update = JSON.parse(xhr.response);
				console.log(update)
				init();
			} else {
				displayError('Error finding rounds...' + xhr.statusText);
			}
		}
	};
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(roundToLoad));
};

function deleteRound(toDelete) {
	console.log(toDelete);
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/rounds/' + toDelete);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				loadRounds();
			} else {
				displayError('No matching round ID' + xhr.status);
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
		let edit = document.createElement('button');
		let roundId = rounds[i].id;
		edit.textContent = "Edit";
		edit.id = rounds[i].id;
		let del = document.createElement('button');
		del.textContent = "Delete";
		del.id = rounds[i].id;

		edit.addEventListener('click', editRd);
		del.addEventListener('click', function(evt) {
			evt.preventDefault();
			let toDelete = del.id;
			deleteRound(toDelete);
		});


		let courseName = rounds[i].course;
		let par = rounds[i].score;
		let fee = rounds[i].greenFee;
		let balls = rounds[i].lostBalls;
		let bevs = rounds[i].beveragesConsumed;

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
		tableRow2.append(edit);
		tableRow2.append(del);

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
