const form = document.querySelector('.form');
const playerList = document.querySelector('.player-list');


// Load any existing players from local storage
const players = JSON.parse(localStorage.getItem('players')) || [];
let arr = JSON.parse(localStorage.getItem("players"));

for (let i = 0; i < arr.length; i++) {
  arr[i].points = 0;
}
localStorage.setItem("players", JSON.stringify(arr));



players.forEach((player) => {
  const playerElement = document.createElement('div');
  playerElement.classList.add('player');
  playerElement.innerHTML = `
      <img src="./img/${player.avatar}" class="avatar">
      <span>${player.name}</span>
    `;
  playerList.appendChild(playerElement);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Add the new player to the list
  const name = form.elements.name.value;
  const avatar = form.elements.avatar.value;
  players.push({ name, avatar });

  const playerElement = document.createElement('div');
  playerElement.classList.add('player');
  playerElement.innerHTML = `
      <img src="./img/${avatar}" class="avatar">
      <span>${name}</span>
    `;
  playerList.appendChild(playerElement);

  // Save the players to local storage
  localStorage.setItem('players', JSON.stringify(players));

  form.reset();
});


let selectedPlayer;

playerList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('player')) {
    if (selectedPlayer === target) {
      // Deselect the player if it is already selected
      selectedPlayer = null;
      target.style.boxShadow = 'none';
    } else {
      if (selectedPlayer) {
        selectedPlayer.style.boxShadow = 'none';
      }
      selectedPlayer = target;
      target.style.boxShadow = '0 0 10px red';
    }
  }
});

const deleteButton = document.querySelector('#delete-button');
deleteButton.addEventListener('click', () => {
  // Delete the selected player from the list
  if (selectedPlayer) {
    const index = Array.from(playerList.children).indexOf(selectedPlayer);
    players.splice(index, 1);
    selectedPlayer.remove();
    selectedPlayer = null;
  }

  // Update the players in local storage
  localStorage.setItem('players', JSON.stringify(players));
});

const startGameButton = document.getElementById("start-game-button");
const redCard = document.getElementById("red-card");
const elements = document.querySelectorAll("body *");
const cardText = document.getElementById("card-text");
//creating elements inside game card
var p = document.createElement("p");
const nameText = document.createElement("p");
const avatarImg = document.createElement('img');
const pointText = document.createElement("p");






nameText.id = "";
p.id = "question-text";
const playerDiv = document.getElementById("attend-div");

// Load any existing players from local storage

players.forEach((player) => {
  const playerElement = document.createElement('div');
  playerElement.classList.add('playerPoints');

  playerElement.innerHTML = `
      <img src="./img/${player.avatar}" class="avatar">
      <span>${player.name}</span>
      <span class="points" id="points">${player.points}</span>
    `;
  playerDiv.appendChild(playerElement);
});


//getting random player name
function getRandomPlayerName() {
  let str = localStorage.getItem('players');
  console.log(str.length);
  // Parse the string value into a JavaScript array
  let array = JSON.parse(str);


  const countPlayers = array.length;
  const getRandomPlayer = Math.floor(Math.random() * countPlayers);
  const chosenOne = array[getRandomPlayer].name;
  return chosenOne;
}


function getAvatar(name, data) {
  // Loop through the array
  for (const item of data) {
    // Check if the name matches the current item
    if (item.name === name) {
      // If it does, return the avatar value
      console.log(item.avatar);
      return item.avatar;
    }
  }
  // If no matching item is found, return null
  return null;
}







const questions = [
  "What is your favorite color?",
  "What is your favorite food?",
  "What is your favorite hobby?",
  "What is your favorite movie?",
  "Have you ever had the worst hangover story?",
  "Have you ever kissed someone of the same gender while drunk?",
  "Have you ever sent a drunk text you regret?",
  "Have you ever fallen asleep somewhere strange while drunk?",
  "Have you ever thrown up while drunk?",
  "Have you ever done something embarrassing while drunk that you still remember?",
  "Have you ever woken up in a different location than where you fell asleep?",
  "Have you ever done something you swore you would never do while drunk?",
  "Have you ever hooked up with someone you barely knew while drunk?",
  "Have you ever called an ex while drunk?",
  "Have you ever forgotten something important that happened while drunk?",
  "Have you ever eaten something weird while drunk?",
  "Have you ever danced on a bar while drunk?",
  "Have you ever gotten into a fight while drunk?",
  "Have you ever stolen something while drunk (even if it was just a small item)?",
  "Have you ever gone skinny dipping while drunk?",
  "Have you ever gotten a tattoo while drunk?",
  "Have you ever made a prank call while drunk?",
  "Have you ever gone streaking while drunk?",
  "Have you ever tried to cook while drunk and ended up setting something on fire?",
  "Have you ever tried to play a sport while drunk and ended up hurting yourself?",
  "Have you ever tried to sing while drunk and ended up sounding terrible?",
  "Have you ever tried to play a musical instrument while drunk and ended up making a lot of noise?",
  "Have you ever tried to do karaoke while drunk and ended up making a fool of yourself?",
  "Have you ever tried to do stand-up comedy while drunk and ended up bombing?",
  "Have you ever tried to do a magic trick while drunk and ended up failing?",
  "Have you ever tried to play a video game while drunk and ended up losing miserably?",
  "Have you ever tried to play a board game while drunk and ended up cheating?",
  "Have you ever tried to do a puzzle while drunk and ended up giving up?",
  "Have you ever tried to do a science experiment while drunk and ended up causing a disaster?",
  "when you lost your virginity",
];
const questionsSport = ["Has any Finnish hockey player won the Stanley Cup?",
"Has any Finnish football player won the World Cup?",
"Who is the most successful Finnish hockey player of all time?",
"Who is the most successful Finnish football player of all time?",
"Have any Finnish hockey players won the Hart Trophy as NHL MVP?",
"Have any Finnish football players won the Ballon d'Or?",
"How many Finnish hockey players have been inducted into the Hockey Hall of Fame?",
"How many Finnish football players have been inducted into the Football Hall of Fame?",
"Have any Finnish hockey players won the Olympic gold medal in ice hockey?",
"Have any Finnish football players won the European Championship?",
     "Name one country that has won the most medals in the Winter Olympics.",
"Name one country that has won the most medals in the Summer Olympics.",
"Name one country that has the most World Cup victories in soccer.",
"Name one athlete who has won the most Grand Slams in tennis.",
"Name one athlete who has won the most NBA championships.",
"Name one athlete who has won the most Super Bowls.",
"Name one athlete who has won the most Olympic gold medals.",
"Name one athlete who has won the most Tour de France titles.",
"Name one athlete who has won the most Formula 1 championships.",
"Name one athlete who has won the most Wimbledon titles.",            
        ];
const questionsDrunk = ["What is the capital of Kazakhstan?",
"How many legs does a octopus have?",
"What is the highest mountain in the solar system?",
"Who wrote the book 'War and Peace'?",
"Who invented the lightbulb?",
"How many sides does a hexagon have?",
"What is the national animal of Scotland?",
"What is the largest ocean on Earth?",
"How many bones are in the human body?",
"What is the currency of Japan?",
"Who is the current Prime Minister of Canada?",
"What is the capital of Australia?",
"How many rings are on the Olympic flag?",
"What is the capital of Brazil?",
"What is the capital of South Africa?",
"How many planets are in the Solar System?",
"What is the capital of Russia?",
"What is the capital of France?",
"What is the capital of China?",
"What is the capital of India?",];
const questionsHomeParty = ["What is the definition of the word 'taboo'?",
"What are some common taboo topics in society?",
"What is the origin of the word 'taboo'?",
"What are some examples of taboo behaviors in different cultures?",
"What is the social or cultural significance of taboo?",
"What are some common taboo words or phrases?",
"What are some taboo subjects in the media?",
"What are some taboo topics in politics?",
"What are some taboo topics in religion?",
"What are some taboo topics in relationships?",
"What are some taboo topics in the workplace?",
"What are some taboo topics in education?",
"What are some taboo topics in health and medicine?",
"What are some taboo topics in science and technology?",
"What are some taboo topics in the arts?",
"What are some taboo topics in the environment and nature?",
"What are some taboo topics in sports?",
"What are some taboo topics in food and nutrition?",
"What are some taboo topics in fashion and beauty?",
"What are some taboo topics in finance and business?",];

function SelectQuestions(id){
  if(id == "#FFC0CB"){
    console.log("homeparty selected");
  }else if(id == "#ADD8E6"){
    console.log("party selected");
  }else if(id == "#F0E68C"){
    console.log("sport selected");
  }else if(id == "#FFE4E1"){
    console.log("tequila selected");
  }else{
    console.log("category not selected");
  }
}

function shufleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

const bgColor = "";
//start game
const PointsElement = document.getElementById("Points");

startGameButton.addEventListener("click", () => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].points = 0;
  }
  
  localStorage.setItem("players", JSON.stringify(arr));

  elements.forEach((element) => {
    element.classList.add("hidden");
  });
  shufleQuestions();
  showButton();
  PointsElement.style.display = "block";
  redCard.style.backgroundColor = "red";
  redCard.style.display = "block";
  playerDiv.style.display = "flex";
  const quest = questions.splice(0, 1)[0];
  p.textContent = quest;
  console.log(p.textContent.length);
  redCard.appendChild(p);
  nameText.textContent = getRandomPlayerName();
  console.log(nameText.textContent);
//adding points
for (let i = 0; i < arr.length; i++) {
  if (arr[i].name === nameText.textContent) {
    const RandomPoints = Math.floor(Math.random() * 5);
    arr[i].points += RandomPoints;
    console.log(RandomPoints);
   
    console.log(nameText);
    localStorage.setItem("players", JSON.stringify(arr));

  }
}
  localStorage.getItem("players");
  redCard.appendChild(nameText);
  const data = JSON.parse(localStorage.getItem("players"));
  const ava = getAvatar(nameText.textContent, data)

  if (selectedCategory == null) {
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = selectedCategory.id;
    SelectQuestions(selectedCategory.id);
  }

});





//selecting category
let selectedCategory;
const categoryList = document.querySelector('.categories');

categoryList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('category')) {
    if (selectedCategory === target) {
      // Deselect the category if it is already selected
      selectedCategory = null;
      target.style.boxShadow = 'none';
    } else {
      if (selectedCategory) {
        selectedCategory.style.boxShadow = 'none';
      }
      selectedCategory = target;
      target.style.boxShadow = '0 0 10px red';
    }
  }
});

document.getElementById("myButton").style.display = "none";

// Show the button when the game starts
function showButton() {
  document.getElementById("myButton").style.display = "block";
}

function updatepoints() {
  const attends = JSON.parse(localStorage.getItem("players"));
  const pointSpans = document.querySelectorAll("#points");
  if (pointSpans.length !== attends.length) {
    console.error("Number of point spans does not match number of players");
    return;
  }
  let i = 0;
  for (const player of attends) {
    const name = player.name;
    const points = player.points;
    pointSpans[i].innerHTML = points;
    i++;
  }
}





function updateRedCard() {
  updatepoints();
  showButton();
  //styling all right 
  PointsElement.style.display = "block";
  redCard.style.display = "block";
  playerDiv.style.display = "flex";
  //changing bg color
  const color = getRandomColor();
  redCard.style.backgroundColor = color;
  //chek is category selected or not
  if (selectedCategory == null) {
    document.body.style.backgroundColor = "yeallow";
  } else {
    document.body.style.backgroundColor = selectedCategory.id;
  }
  //selecting quest and deleting it from array
  const quest = questions.splice(0, 1)[0];
  p.textContent = quest;
  //checking the leng od the quest and rezise it to fit
  checkTheLongOfQuestion(p.textContent);
  redCard.appendChild(p);

  nameText.textContent = getRandomPlayerName();
//adding points
  for (let i = 0; i < arr.length; i++) {
  if (arr[i].name === nameText.textContent) {
    const RandomPoints = Math.floor(Math.random() * 5);
    arr[i].points += RandomPoints;
    console.log(RandomPoints);
    pointText.textContent = RandomPoints;
    localStorage.setItem("players", JSON.stringify(arr));

  }
}
  redCard.appendChild(nameText);
  redCard.appendChild(pointText);
  const oldPlayer = document.querySelectorAll(".player");
  oldPlayer.remove();


  

}

const button = document.getElementById("myButton");
button.addEventListener("click", updateRedCard);

function checkTheLongOfQuestion(question) {
  if (question.length >= 80) {
    const text = document.getElementById("question-text");
    text.style.fontSize = "20px";
  } else if (question.length >= 50) {
    const text = document.getElementById("question-text");
    text.style.fontSize = "32px";
  } else {
    const text = document.getElementById("question-text");
    text.style.fontSize = "40px";
  }
}

//ger random colorcode
function getRandomColor() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}







