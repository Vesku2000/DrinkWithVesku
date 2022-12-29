const form = document.querySelector('.form');
const playerList = document.querySelector('.player-list');

// Load any existing players from local storage
const players = JSON.parse(localStorage.getItem('players')) || [];
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




nameText.id = "";
p.id = "question-text";
const playerdiv = document.getElementById("attend-div");

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
/*
function getRandomPlayerAvatar() {
  let str = localStorage.getItem('players');
  console.log(str.length);
  // Parse the string value into a JavaScript array
  let array = JSON.parse(str);


  const countPlayers = array.length;
  const getRandomPlayer = Math.floor(Math.random() * countPlayers);
  const chosenOne = array[getRandomPlayer].avatar;
  console.log(chosenOne);
  return chosenOne;
}
*/

function getAvatar(name, data) {
  // Loop through the array
  for (const item of data) {
    // Check if the name matches the current item
    if (item.name === name) {
      // If it does, return the avatar value
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
  "What is your favorite movie?"
];

function shufleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

startGameButton.addEventListener("click", () => {
  elements.forEach((element) => {
    element.classList.add("hidden");
  });
  playerdiv.style.display = "block";
  document.body.style.backgroundColor = ""
  redCard.style.display = "block";
  const quest = questions.splice(0, 1)[0];
  p.textContent = quest;
  redCard.appendChild(p);
  nameText.textContent = getRandomPlayerName();
  console.log(nameText);
  redCard.appendChild(nameText);
  //getRandomPlayerAvatar();
  const data = JSON.parse(localStorage.getItem("players"));
  const ava = getAvatar(nameText.textContent, data)
  const playerElement = document.createElement('div');
  playerElement.classList.add('player');
  playerElement.innerHTML = `
      <img src="./img/${ava}" class="gameAvatar">
      <span>${name}</span>
    `;
  redCard.appendChild(playerElement);






  document.body.style.backgroundColor = selectedCategory.id;
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


