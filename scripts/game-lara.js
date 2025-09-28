const gameText = document.getElementById("game-text");
const choices = document.getElementById("choices");

const scenes = {

    startingScene: {
        text: " Lara is catching up with a friend while shopping together. In a mall with her friend Brooke.",
        choices: [
            { text: "Continue", next: "scene1_continue" }
        ],
        background: "mall.png"
    },

    scene1_continue: {
        text: "Lara: It was actually really fun, their name is Jude. We went out to eat and got to walk around this little town afterwards.",
        choices: [
            { text: "Continue", next: "scene2" }
        ]
    },

    scene2: {
        text: "Brooke: Did anything else happen after the date?",
        choices: [
            { text: "Continue", next: "scene2_continue" }
        ]
    },

    scene2_continue: {
        text: "Lara: Well…. I did go back to their place after and we didn’t have sex but I did oral stuff.",
        choices: [
            { text: "Continue", next: "scene3" }
        ]
    },

    scene3: {
        text: "Brooke: Did you use a condom or dental dam?",
        choices: [
            { text: "Yes", next: "scene3_yes" },
            { text: "No", next: "scene3_no" }
        ]
    },


    scene3_yes: {
        text: "Lara: Yeah even though it was just oral we used a condom and dental dam just to be safe since it was my first time meeting them.",
        choices: [
            { text: "Continue", next: "scene3_yes2" }
        ]
    },

    scene3_yes2: {
        text: "Brooke: yeah that is smart just because you never know if they have an STI since some don’t show symptoms.",
        choices: [
            { text: "Continue", next: "yes_timeskip" }
        ]
    },
    yes_timeskip: {
        text: "Couple of weeks later\nLara gets a text: Hey, it's Jude, we hung out a couple weeks back and I wanted to let you know that I went to get tested and ended up being positive for gonorrhea. I know we used a condom but I wanted to let you know just in case and recommend you get tested.",
        choices: [
            { text: "Continue", next: "yes_text1" }
        ],
        background: "bedroom.png"
    },

    yes_text1: {
        text: "Lara -> Brooke: Hey so basically I got a text from Jude saying they tested positive for gonorrhea and I think I should get tested just in case even though we use a condom.",
        choices: [
            { text: "Continue", next: "yes_text2" }
        ]
    
    },

    yes_text2: { 
        text: "Brooke -> Lara: I also was meaning to get my monthly test soon anyways so I’m down to go together!",
        choices: [
            { text: "Continue", next: "yes_text3" }
        ]
    },

    yes_text3: { 
        text: "Lara -> Brooke: Yes thank you so much for the support.",
        choices: [
            { text: "Continue", next: "yes_doctors" }
        ]
    },

    yes_doctors: {
        text: "At the Doctors\nDoctor: Hello Lara, I am your doctor today and go by he/him pronouns, what can I help you with today?",
        choices: [ 
            { text: "Continue", next: "yes_doctors_continue" }
        ],
        background: "doctor_office.png"
    },

    yes_doctors_continue: {
        text: "Lara: Hi, I go by they/them, and I recently got a text from a partner I had that they tested positive for gonorrhea so I wanted to get tested as well.",
        choices: [
            { text: "Continue", next:  "yes_doctors_continue2" }
        ]
    },

    yes_doctors_continue2: {
        text: "Doctor: Okay sound I hear about your sexual history first? How many partners if you do have sex do you have, multiple or singular, and what activities have you engaged in with them as well as what precautions have you taken during them.",
        choices: [
            { text: "Continue", next:  "yes_doctors_continue3" }
        ]
    },

    yes_doctors_continue3: {
        text: "Lara: I’ve been on a dating app and seen multiple partners, some I’ve had sex with or we have done oral if we do anything, but every time I’ve used a condom. The person who contacted me we used a condom as well as only performed oral.",
        choices: [
            { text: "Continue", next:  "yes_doctors_continue4" }
        ]
    },

    yes_doctors_continue4: {
        text: "Doctor: Thank you for being honest with me! That is good you used a condom since that is a good way to protect against gonorrhea and other STIs.",
        choices: [
           { text: "Continue", next:  "yes_doctors_continue5" }
        ]
    },

    yes_doctors_continue5: {
        text: "Lara: How can we go from here?",
        choices: [
            { text: "Continue", next:  "yes_test" }
        ]
    },

    yes_test: {
        text: "Doctor: Okay we will have you take a swab test on the throat since you did oral on this partner who contacted you. We will let you know by tomorrow what your results are and any further steps we can take.",
        choices: [
            { text: "Continue", next: "yes_timeskip2" }
        ]
    },

    yes_timeskip2: {
        text: "The Next Day\nDoctor -> Lara: Hello Lara, the tests results came back and it is NEGATIVE for gonorrhea. Good thing you were able to get yourself tested and protected with a condom.",
        choices: [
            { text: "Continue", next: "next_day" }
        ]
    },

    next_day: {
        text: "Doctor -> Lara: So you tested negative for gonorrhea. IF you were to test positive ever in the future, Gonorrhea is usually treated in a single dose by injection of an antibiotic. Once received you should avoid sexual activity for at least one week and get tested again 3 months after treatment.",
        choices: [
            { text: "Continue", next: "next_day2" }
        ]
    },

    next_day2: {
        text: "Doctor -> Lara: I know it may seem scary but it is also best to contact any partners you've had in the past 60 days because they could have it too and not show symptoms.",
        choices: [
            { text: "Continue", next: "next_day3" }
        ]
    },

    next_day3: {
        text: "Doctor -> Lara: My advice to do this is just to shoot them a text saying, “Hey NAME, this is Lara. I just wanted to let you know that I tested positive for gonorrhea and am unsure of when I could’ve gotten it so I wanted to let you know just in case. If you need, I can offer clinics where you can receive testing and treatment.”",
        choices: [
            { text: "Continue", next: "next_day4" }
        ]
    },

    next_day4: {
        text: "Lara -> Doctor: How might I go about getting treatment IF I contracted it just so I know if any future incidences occur.",
        choices: [
            { text: "Continue", next: "next_day5" }
        ]
    },

    next_day5: {
        text: "Doctor -> Lara: We offer treatment for people here at a lower cost but other clinics do as well around the area,  GetTested is a great way to find clinics near you. I also recommend that from now on since you do have multiple partners to get regularly tested and also use the correct protection, such as dental dams and condoms, during any sexual activity and to not share any toys etc during.",
        choices: [
            { text: "Continue", next: "next_day6" }
        ]
    },

    next_day6: {
        text: "Doctor -> Lara: Doing both of these things can create the most effective prevention to STDs and practice safe sex practices. If you want and feel comfortable you can contact your local doctor about getting treatment as well.",
        choices: [
            { text: "Continue", next: "next_day7" }
        ]
    },

    next_day7: {
        text: "Lara -> Doctor: Okay thank you I think I would want to get the treatment here since you’ve created such a wonderful and comfortable environment here.",
        choices: [
            { text: "Continue", next: "next_day8" }
        ]
    },

    next_day8: {
        text: "Doctor -> Lara: Of course I’m glad we could do that for you! Just know to never be afraid to test for STDs because it is the best thing to do to keep yourself and the community safe by taking precautions before engaging in sexual activities. A little more information about gonorrhea is that it is caused by bacteria spread through oral, anal, vaginal sexual contact.",
        choices: [
            { text: "Continue", next: "next_day9" }
        ]
    },

    next_day9: {
        text: "Doctor -> Lara: Infections can cause no symptoms which is why it is important to get tested, such that up to 50% of those with a vagina may not experience symptoms and makes it easier to spread to multiple partners. Those with a penis may experience symptoms but still can only notice them several weeks after being exposed. Symptoms can look differently in different bodily parts.",
        choices: [
            { text: "Continue", next: "symptoms" }
        ]
    },

    symptoms: {
        text: "Penile infection symptoms:\nPain while urinating\nPus-like discharge from penis\nPain or swelling in one testicle",
        choices: [
            { text: "Continue", next: "symptoms2" }
        ]
    },

    symptoms2: {
        text: "Vaginal infection symptoms:\nIncreased discharge\nPainful urination\nVaginal bleeding between periods (Ex. after caginal intercourse)",
        choices: [
            { text: "Continue", next: "symptoms3" }
        ]
    },

    symptoms3: {
        text: "Vaginal infection symptoms continued:\nAbdominal or Pelvic pain\nThe urge to pee more than usual\nSymptoms may be less prominent / mistaken as a UTI",
        choices: [
            { text: "Continue", next: "symptoms4" }
        ]
    },

    symptoms4: {
        text: "Gender Neutral infection symptoms:\nRectal - itching, discharge, blood\nEyes - pain, light sensitivity, discharge\nThroat - sore throat, swollen lymph nodes\nJoint - warm, red, swollen",
        choices: [
            { text: "Continue", next: "symptoms5" }
        ]
    },

    symptoms5: {
        text: "Prevention:\nCondom use (vaginal, oral, anal)\nBe sure you and your partner are tested for STIs\nRegular screening is recommended for who men who have sex with men",
        choices: [
        ]
    },

}

function showScene(sceneId) {
    const scene = scenes[sceneId]
    gameText.innerText = scene.text;
    choices.innerHTML = ""; 

    if (scene.background) {
        const pageWrapper = document.querySelector('.page-wrapper');
        if (pageWrapper) {
            pageWrapper.style.backgroundImage = `url('assets/images/${scene.background}')`;
            pageWrapper.style.backgroundSize = 'cover';
            pageWrapper.style.backgroundPosition = 'center center';
        }
    }

    scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => showScene(choice.next);
    choices.appendChild(button);
  });
}

// Start the story
showScene("startingScene");