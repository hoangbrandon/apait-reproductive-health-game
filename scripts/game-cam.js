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

const yes_condom2 = {
    text: "Doctor: On that note, I also recommend that we get you tested for other STIs just to be safe. Our clinic offers free testing every month and so do others in the area so I suggest to regularly get tested every month if possible when having multiple partners to keep you and the community safe!",
    choices: [
        //{ text: "Continue", next: yes_condom2 }
    ]
}

const yes_condom = {
    text: "Doctor: When used correctly, condoms are 50-90% effecrtive at preventing chlamydia. If the condom breaks or is not used properly, STIs can still be transmitted. However, practicing safer sex and getting tested regularly are the most effective way to protect yourself and others from STIs.",
    choices: [
        { text: "Continue", next: yes_condom2 }
    ]
}

const yes_cam_confuse = {
    text: "Cam: I used a condom though, how did I get it?",
    choices: [
        { text: "Continue", next: yes_condom }
    ]
}

const yes_next_clinic2 = {
    text: "Doctor: Once you receive the medication you should take the full dose even if no symptoms appear or if symptoms you do develop go away. While taking these antibiotics stay clear of any sexual activity to prevent spreading and contact any previous sexual partners you’ve had about your diagnosis.",
    choices: [
        { text: "Continue", next: yes_cam_confuse }
    ]
}

const yes_next_clinic = {
    text: "Doctor: Once tested positive for chlamydia there are two types of antibiotics you can take, doxycycline and azithromycin. For Doxyclycine you can take a single dose over  7-14 days and for Azithromycin it is just a single dose orally, but usually recommended for pregnant women.",
    choices: [
        { text: "Continue", next: yes_next_clinic2 }
    ]
}

const yes_doctors_message = {
    text: "Doctors message: Hello! I want to assure you that there is no need to be worried about these results, come back to the clinic this week and we can discuss treatemnt and next steps.",
    choices: [
        { text: "Continue", next: yes_next_clinic }
    ]
}

const yes_next_day = {
    text: "Next day:\nResults show to be: Positive",
    choices: [
        { text: "Continue", next: yes_doctors_message }
    ]
}

const cam_test = {
    text: "Doctor: Okay these results will be available to you by tomorrow and based on them we can further discuss.",
    choices: [
        { text: "Continue", next: yes_next_day }
    ]
}

const cam_test_swab = {
    text: "Cam: I would prefer a swab test",
    choices: [
        { text: "Continue", next: cam_test }
    ]
}

const cam_test_urine = {
    text: "Cam: I think a urine test is good",
    choices: [
        { text: "Continue", next: cam_test }
    ]
}

const yes_doctor_test = {
    text: "Doctor: Okay so there are two different types of test you can receive:\nUrine or swab in either the cervix, vagina, throat or anus\nWhich would you prefer?",
    choices: [
        { text: "Urine", next: cam_test_urine },
        { text: "Swab", next: cam_test_swab }
    ]
}

const yes_women_info2 = {
    text: "If left untreated:\nDevelop Pelvic Inflammatory Disease (PID)\nAbdonimal and pelvic pain\nInfertility or Eptopic pregnancy in later stages",
    choices: [
        { text: "Continue", next: yes_doctor_test }
    ]
}

const yes_women_info = {
    text: "Vaginal infection:\nChange in discharge | Itching\nBleeding bewtween menstrual periods and sex\nPain or discomfort in lower abdomen | Burning when urinating",
    choices: [
        { text: "Continue", next: yes_women_info2 }
    ]
}

const yes_information2 = {
    text: "This also can cause more transmission to future partners as well if left untreated and unknown of diagnosis.",
    choices: [
        { text: "Continue", next: yes_women_info }
    ]
}

const yes_men_info = {
    text: "Penile infection:\nPainful infection in testicles\nRare - Infertility",
    choices: [
        { text: "Continue", next: yes_information2 }
    ]
}

const yes_information = {
    text: "Information:\nChlamydia is a STI where many cases go unreported due to the fact symptoms may not show but if untreated for long periods of time can lead to:",
    choices: [
        { text: "Continue", next: yes_men_info }
    ]
}

const yes_doctors_continue6 = {
    text: "Doctor: That's very common and you taking the time to get tested is already a great first step!",
    choices: [
       { text: "Continue", next:  yes_information}
    ]
}

const yes_doctors_continue5 = {
    text: "Cam: I have not had any of the symptoms which is why at first I never went to get tested since nothing changed in my body afterwards.",
    choices: [
       { text: "Continue", next:  yes_doctors_continue6 }
    ]
}

const yes_gn_symptoms = {
    text: "Anal infection symptoms:\nPain\nDischarge\nBleeding",
    choices: [ 
        { text: "Continue", next: yes_doctors_continue5 }
    ]
}


const yes_male_symptoms = {
    text: "Penile infection symptoms:\nPain while urinating\nDischarge from penis\nPain in testicles",
    choices: [
        { text: "Continue", next: yes_gn_symptoms }
    ]
}

const yes_symptoms = {
    text: "Doctor: Have you had any of the following symptoms?",
    choices: [
        { text: "Continue", next: yes_male_symptoms }
    ]
}

const yes_doctors_continue4 = {
    text: "Cam: With the one that particularly reached out to me we just had sex but I have had oral as well with other partners, but used condoms for all.",
    choices: [
       { text: "Continue", next:  yes_symptoms }
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
    text: "Brooke -> Cam: Hi! I just checked and they actually have a testing available this week, we can go whenever you are ready thank you for feeling comfortable to reach out!",
    choices: [
        { text: "Continue", next: yes_doctors }
    ]
}

const yes_text1 = {
    text: "Cam -> Brooke: Hey do you know if there is anywhere I can get tested, I just got a text from Jess that she tested positive for chlamydia. I havent had anything that shows I have it and we used a condom but maybe I should just in case.",
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