function showScene(scene) {
  const textDiv = document.getElementById("game-text");
  const choicesDiv = document.getElementById("choices");

  textDiv.textContent = scene.text;
  choicesDiv.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => showScene(choice.next);
    choicesDiv.appendChild(btn);
  });
}
