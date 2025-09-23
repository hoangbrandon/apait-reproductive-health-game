const gameText = document.getElementById("game-text");
const choices = document.getElementById("choices");

function showScene(scene) {
  gameText.innerText = scene.text;
  choices.innerHTML = ""; // clear old buttons

  scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => showScene(choice.next);
    choices.appendChild(button);
  });
}

const scene3_yes = {
    text: "That’s great! Using protection helps prevent STIs.",
    choices: [] // End of this branch
};

const scene3_no = {
    text: "It’s still smart to get tested regularly.",
    choices: [] // End of this branch
};

const scene2 = {
    text: "Brooke: Did you guys have sex?",
    choices: [
        { text: "Yes", next: scene3_yes },
        { text: "No", next: scene3_no }
    ]
};

const scene1_continue = {
    text: "Cam: I actually went out with friends a few weeks ago and met a girl named Jess...",
    choices: [
        { text: "Continue", next: scene2 }
    ]
};

const startScene = {
    text: "Brooke meets Cam over coffee.\n\nBrooke: How have you been? Any fun life updates?",
    choices: [
        { text: "Continue", next: scene1_continue }
    ]
};

// Start the story
showScene(startScene);
