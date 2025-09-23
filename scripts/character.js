const listContainer = document.getElementById("character-list");
const charImage = document.getElementById("char-image");
const charName = document.getElementById("char-name");
const charPronouns = document.getElementById("char-pronouns");
const charAge = document.getElementById("char-age");
const charSexuality = document.getElementById("char-sexuality");
const charDescription = document.getElementById("char-description");



const characters = [
    { id: 'char1', name: 'Alex', pronouns: 'he/him', age: 21, sexuality: 'Gay', description: 'A curious explorer, always seeking new knowledge.', image: 'assets/images/character1.png', gameStartPath: '/alex.html' },
    { id: 'char2', name: 'Cam', pronouns: 'he/him', age: 18, sexuality: 'Bisexual', description: 'Cam is outgoing and thoughtful. He’s in that stage of life where everything’s a bit new — figuring out relationships, responsibility, and what it means to take care of himself.', image: 'assets/images/character2.png', gameStartPath: '/cam.html' },
    { id: 'char3', name: 'Lara', pronouns: 'they/them', age: 20, sexuality: 'Pansexual', description: 'A brave guardian, strong and protective of their friends.', image: 'assets/images/character3.png', gameStartPath: '/lara.html' },
    { id: 'char4', name: 'Fin', pronouns: 'she/her', age: 19, sexuality: 'Gay', description: 'A wise scholar, with a vast understanding of the world.', image: 'assets/images/character4.png', gameStartPath: '/fin.html' },
    { id: 'char5', name: 'Brooke', pronouns: 'they/them', age: 21, sexuality: 'Lesbian', description: 'An adventurous spirit, ready for any challenge.', image: 'assets/images/character5.png', gameStartPath: '/brooke.html' },
];

const links = [];

characters.forEach((char, index) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = char.name;
    link.dataset.id = char.id;

    link.addEventListener("click", (e) => {
        e.preventDefault();

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        updateCharacterInfo(char);
        
    });

    listContainer.appendChild(link);
    links.push(link);
});

const startGame = document.createElement("a");
startGame.href = "#";
startGame.textContent = "Start Game";
startGame.id = "start-game";
listContainer.parentElement.appendChild(startGame);


links[0].classList.add("active");
updateCharacterInfo(characters[0]);

function updateCharacterInfo(char) {
    charImage.src = char.image;
    charImage.alt = char.name;
    charName.textContent = char.name;
    charPronouns.textContent = char.pronouns;
    charAge.textContent = char.age;
    charSexuality.textContent = char.sexuality;
    charDescription.textContent = char.description;
    startGame.href = char.gameStartPath;
}