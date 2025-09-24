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



const yes_doctors_continue4 = {
    text: "Cam: With the one that particularly reached out to me we just had sex but I have had oral as well with other partners, but used condoms for all.",
    choices: [
       // { text: "Continue", next:  yes_doctors_continue5 }
    ]
}

const yes_doctors_continue3 = {
    text: "Doctor: What type of sexual activity and what precautions did you take?",
    choices: [
        { text: "Continue", next:  yes_doctors_continue4 }
    ]
}

const yes_doctors_continue2 = {
    text: "Doctor: That’s a great decision and just know it’s always smart to get tested regularly when having multiple partners, because although some STIs may have symptoms chlamydia is a common STI people go on not knowing they have since many cases between about 50% and 70% can show no symptom.",
    choices: [
        { text: "Continue", next:  yes_doctors_continue3 }
    ]
}

const yes_doctors_continue = {
    text: "Cam: Hello, I go by he/him pronouns, and I came in today because I was recently informed by a past partner that they have chlamydia so I wanted to test just in case even though I used a condom.",
    choices: [
        { text: "Continue", next:  yes_doctors_continue2 }
    ]
}

const yes_doctors = {
    text: "At the Doctors\nDoctor: Hello Cam,  I will be your doctor today and use she/her pronouns. If you don't mind me asking what is your sexual history since you have come in to get tested today?",
    choices: [ 
        { text: "Continue", next: yes_doctors_continue }
    ]
}

const yes_text2 = { 
    text: "Brooke -> Cam: “Hi! I just checked and they actually have a testing available this week, we can go whenever you are ready thank you for feeling comfortable to reach out!",
    choices: [
        { text: "Continue", next: yes_doctors }
    ]
}

const yes_text1 = {
    text: "Cam -> Brooke: “Hey do you know if there is anywhere I can get tested, I just got a text from Jess that she tested positive for chlamydia. I havent had anything that shows I have it and we used a condom but maybe I should just in case.",
    choices: [
        { text: "Continue", next: yes_text2 }
    ]

}

const yes_timeskip = {
    text: "Few weeks pass\nCam gets a text from a number: Hey Cam, it’s Jess. I recently got tested and was positive for Chlamydia, I’m not sure when I got it but I just wanted to let you know just in case it was when we met.",
    choices: [
        { text: "Continue", next: yes_text1 }
    ] 
};

const scene3_no = {
    text: "It’s still smart to get tested regularly.",
    choices: [
        // { text: "Continue", next: no_timeskip }    
    ] 
};

const scene3_yes = {
    text: "Thats great its always important to use a condom for safe sex and preventing STIs, but always know I’m here to help give advice about this stuff and here for support as your friend!",
    choices: [
        { text: "Continue", next: yes_timeskip }
    ]
};

const scene3 = {
    text: "Brooke: Did you have a condom to use then?",
    choices: [
        { text: "Yes", next: scene3_yes },
        { text: "No", next: scene3_no }
    ]
};

const scene2_continue = {
    text: "Cam: Yeah it was a fun night but I originally I wasn’t expecting my night to go that way.",
    choices: [
        { text: "Continue", next: scene3 }
    ]
};

const scene2 = {
    text: "Brooke: Did you guys have sex?",
    choices: [
        { text: "Continue", next: scene2_continue }
    ]
};

const scene1_continue = {
    text: "Cam: I actually went out with friends a few weeks ago and met a girl named Jess. At the end of the night we went home together",
    choices: [
        { text: "Continue", next: scene2 }
    ]
};

const startingScene = {
    text: "Brooke meets Cam over coffee.\n\nBrooke: How have you been! Do you have any fun life updates?",
    choices: [
        { text: "Continue", next: scene1_continue }
    ]
};

// Start the story
showScene(startingScene);