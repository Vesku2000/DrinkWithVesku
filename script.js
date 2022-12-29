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
var p = document.createElement("p");
p.id = "question-text";
const playerdiv = document.getElementById("attend-div");



const questions = [
  "What is your favorite color?",
  "What is your favorite food?",
  "What is your favorite hobby?",
  "What is your favorite movie?"
];

startGameButton.addEventListener("click", () => {
  elements.forEach((element) => {
    element.classList.add("hidden");
  });
  playerdiv.style.display = "block";
  document.body.style.backgroundColor = "#FFC0CB"
  redCard.style.display = "block";
  p.textContent = questions[Math.floor(Math.random() * questions.length)];
  redCard.appendChild(p);
  //addTextToRedCard(questions[Math.floor(Math.random() * 3)]);
  console.log(questions[Math.floor(Math.random() * questions.length)]);

  console.log(backgroundColor);

});




function addTextToRedCard(text) {
  var redCard = document.getElementById("red-card");
  redCard.innerHTML = text;
}

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
      const computedStyles = getComputedStyle(selectedCategory);
      const backgroundColor = getPropertyValue("background-color");
      selectedCategory.setAttribute("data-color", backgroundColor);
      console.log(backgroundColor);
      //taking bg color from category
      
    }
  }
});




