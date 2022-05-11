const PUZZLE_SIZE = 3; 
let cardCount = 0
function createCard(appName, shuffle){
	cardCount++;
	let body = document.querySelector("body")
	let card = document.createElement("div");
	card.classList.add("card");
	let puzzle = document.createElement("div");
	card.classList.add("puzzle");
	puzzle.id = "c" + cardCount;
	let data = document.createElement("div");
	data.style.visibility = "hidden";
	let heading = document.createElement("h6");
	heading.innerHTML = appName;
	data.appendChild(heading);
	let monthRow = document.createElement("div");
	monthRow.classList.add("monthRow");


let colOne = document.createElement("p");
	colOne.innerHTML = "1";
	monthRow.appendChild(colOne);


let colTwo = document.createElement("p");
	colTwo.innerHTML = "2";
	monthRow.appendChild(colTwo);


let colThree = document.createElement("p");
	colThree.innerHTML = "3";
	monthRow.appendChild(colThree);

	data.appendChild(monthRow);
	card.appendChild(puzzle);
	card.appendChild(data);
	body.appendChild(card);
	createPuzzle(PUZZLE_SIZE, appName, cardCount, shuffle);
};


createCard("youtube", true);
createCard("amazon");
createCard("youtube");
createCard("youtube");

function createData(){

};

$.get("/Users/danielcajas/Desktop/final_data_visualization/The_api", function(data, status){
	console.log(data);
});