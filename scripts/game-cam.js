const gameText = document.getElementById("game-text");
const choices = document.getElementById("choices");

const scenes = {

    startingScene: {
        text: "Brooke meets Cam over coffee.\n\nBrooke: How have you been! Do you have any fun life updates?",
        choices: [
            { text: "Continue", next: "scene1_continue" }
        ]
    },

    scene1_continue: {
        text: "Cam: I actually went out with friends a few weeks ago and met a girl named Jess. At the end of the night we went home together",
        choices: [
            { text: "Continue", next: "scene2" }
        ]
    },

    scene2: {
        text: "Brooke: Did you guys have sex?",
        choices: [
            { text: "Continue", next: "scene2_continue" }
        ]
    },

    scene2_continue: {
        text: "Cam: Yeah it was a fun night but I originally I wasn’t expecting my night to go that way.",
        choices: [
            { text: "Continue", next: "scene3" }
        ]
    },

    scene3: {
        text: "Brooke: Did you have a condom to use then?",
        choices: [
            { text: "Yes", next: "scene3_yes" },
            { text: "No", next: "scene3_no" }
        ]
    },

    scene3_yes: {
        text: "Thats great its always important to use a condom for safe sex and preventing STIs, but always know I’m here to help give advice about this stuff and here for support as your friend!",
        choices: [
            { text: "Continue", next: "yes_timeskip" }
        ]
    },

    yes_timeskip: {
        text: "Few weeks pass\nCam gets a text from a number: Hey Cam, it’s Jess. I recently got tested and was positive for Chlamydia, I’m not sure when I got it but I just wanted to let you know just in case it was when we met.",
        choices: [
            { text: "Continue", next: "yes_text1" }
        ] 
    },

    yes_text1: {
        text: "Cam -> Brooke: Hey do you know if there is anywhere I can get tested, I just got a text from Jess that she tested positive for chlamydia. I havent had anything that shows I have it and we used a condom but maybe I should just in case.",
        choices: [
            { text: "Continue", next: "yes_text2" }
        ]
    
    },

    yes_text2: { 
        text: "Brooke -> Cam: Hi! I just checked and they actually have a testing available this week, we can go whenever you are ready thank you for feeling comfortable to reach out!",
        choices: [
            { text: "Continue", next: "yes_doctors" }
        ]
    },

    yes_doctors: {
        text: "At the Doctors\nDoctor: Hello Cam,  I will be your doctor today and use she/her pronouns. If you don't mind me asking what is your sexual history since you have come in to get tested today?",
        choices: [ 
            { text: "Continue", next: "yes_doctors_continue" }
        ]
    },

    yes_doctors_continue: {
        text: "Cam: Hello, I go by he/him pronouns, and I came in today because I was recently informed by a past partner that they have chlamydia so I wanted to test just in case even though I used a condom.",
        choices: [
            { text: "Continue", next:  "yes_doctors_continue2" }
        ]
    },

    yes_doctors_continue2: {
        text: "Doctor: That’s a great decision and just know it’s always smart to get tested regularly when having multiple partners, because although some STIs may have symptoms chlamydia is a common STI people go on not knowing they have since many cases between about 50% and 70% can show no symptom.",
        choices: [
            { text: "Continue", next:  "yes_doctors_continue3" }
        ]
    },

    yes_doctors_continue3: {
        text: "Doctor: What type of sexual activity and what precautions did you take?",
        choices: [
            { text: "Continue", next:  "yes_doctors_continue4" }
        ]
    },

    yes_doctors_continue4: {
        text: "Cam: With the one that particularly reached out to me we just had sex but I have had oral as well with other partners, but used condoms for all.",
        choices: [
           { text: "Continue", next:  "yes_symptoms" }
        ]
    },

    yes_symptoms: {
        text: "Doctor: Have you had any of the following symptoms?",
        choices: [
            { text: "Continue", next: "yes_male_symptoms" }
        ]
    },

    yes_male_symptoms: {
        text: "Penile infection symptoms:\nPain while urinating\nDischarge from penis\nPain in testicles",
        choices: [
            { text: "Continue", next: "yes_gn_symptoms" }
        ]
    },

    yes_gn_symptoms: {
        text: "Anal infection symptoms:\nPain\nDischarge\nBleeding",
        choices: [ 
            { text: "Continue", next: "yes_doctors_continue5" }
        ]
    },

    yes_doctors_continue5: {
        text: "Cam: I have not had any of the symptoms which is why at first I never went to get tested since nothing changed in my body afterwards.",
        choices: [
           { text: "Continue", next:  "yes_doctors_continue6" }
        ]
    },

    yes_doctors_continue6: {
        text: "Doctor: That's very common and you taking the time to get tested is already a great first step!",
        choices: [
           { text: "Continue", next:  "yes_information"}
        ]
    },

    yes_information: {
        text: "Information:\nChlamydia is a STI where many cases go unreported due to the fact symptoms may not show but if untreated for long periods of time can lead to:",
        choices: [
            { text: "Continue", next: "yes_men_info" }
        ]
    },

    yes_men_info: {
        text: "Penile infection:\nPainful infection in testicles\nRare - Infertility",
        choices: [
            { text: "Continue", next: "yes_information2" }
        ]
    },

    yes_information2: {
        text: "This also can cause more transmission to future partners as well if left untreated and unknown of diagnosis.",
        choices: [
            { text: "Continue", next: "yes_women_info" }
        ]
    },

    yes_women_info: {
        text: "Vaginal infection:\nChange in discharge | Itching\nBleeding bewtween menstrual periods and sex\nPain or discomfort in lower abdomen | Burning when urinating",
        choices: [
            { text: "Continue", next: "yes_women_info2" }
        ]
    },
    
    yes_women_info2: {
        text: "If left untreated:\nDevelop Pelvic Inflammatory Disease (PID)\nAbdonimal and pelvic pain\nInfertility or Eptopic pregnancy in later stages",
        choices: [
            { text: "Continue", next: "yes_doctor_test" }
        ]
    },

    yes_doctor_test: {
        text: "Doctor: Okay so there are two different types of test you can receive:\nUrine or swab in either the cervix, vagina, throat or anus\nWhich would you prefer?",
        choices: [
            { text: "Urine", next: "cam_test_urine" },
            { text: "Swab", next: "cam_test_swab" }
        ]
    },

    cam_test_urine: {
        text: "Cam: I think a urine test is good",
        choices: [
            { text: "Continue", next: "cam_test" }
        ]
    },

    cam_test_swab: {
        text: "Cam: I would prefer a swab test",
        choices: [
            { text: "Continue", next: "cam_test" }
        ]
    },

    cam_test: {
        text: "Doctor: Okay these results will be available to you by tomorrow and based on them we can further discuss.",
        choices: [
            { text: "Continue", next: "yes_next_day" }
        ]
    },

    yes_next_day: {
        text: "Next day:\nResults show to be: Positive",
        choices: [
            { text: "Continue", next: "yes_doctors_message" }
        ]
    },

    yes_doctors_message: {
        text: "Doctors message: Hello! I want to assure you that there is no need to be worried about these results, come back to the clinic this week and we can discuss treatemnt and next steps.",
        choices: [
            { text: "Continue", next: "yes_next_clinic" }
        ]
    },

    yes_next_clinic: {
        text: "Doctor: Once tested positive for chlamydia there are two types of antibiotics you can take, doxycycline and azithromycin. For Doxyclycine you can take a single dose over  7-14 days and for Azithromycin it is just a single dose orally, but usually recommended for pregnant women.",
        choices: [
            { text: "Continue", next: "yes_next_clinic2" }
        ]
    },

    yes_next_clinic2: {
        text: "Doctor: Once you receive the medication you should take the full dose even if no symptoms appear or if symptoms you do develop go away. While taking these antibiotics stay clear of any sexual activity to prevent spreading and contact any previous sexual partners you’ve had about your diagnosis.",
        choices: [
            { text: "Continue", next: "yes_cam_confuse" }
        ]
    },

    yes_cam_confuse: {
        text: "Cam: I used a condom though, how did I get it?",
        choices: [
            { text: "Continue", next: "yes_condom" }
        ]
    },

    yes_condom: {
        text: "Doctor: When used correctly, condoms are 50-90% effecrtive at preventing chlamydia. If the condom breaks or is not used properly, STIs can still be transmitted. However, practicing safer sex and getting tested regularly are the most effective way to protect yourself and others from STIs.",
        choices: [
            { text: "Continue", next: "yes_condom2" }
        ]
    },

    yes_condom2: {
        text: "Doctor: On that note, I also recommend that we get you tested for other STIs just to be safe. Our clinic offers free testing every month and so do others in the area so I suggest to regularly get tested every month if possible when having multiple partners to keep you and the community safe!",
        choices: [
            { text: "Continue", next: "yes_advice" }
        ]
    },

    yes_advice: {
        text: "Cam: Thank you so much for all your help and advice. But, I’m worried I can't afford treatment so are there options that are affordable for someone younger like me or don’t want to contact my provider about this? Also how should I go about contacting other partners I’ve had I’m kinda nervous about that process.",
        choices: [
            { text: "Continue", next: "yes_advice2"}
        ]
    },

    yes_advice2: {
        text: "Doctor: That is a very normal feeling and don’t worry we are here to help you know your options and how to go from here. Usually your healthcare provider can help prescribe you antibiotics for treatment, however if you do not have insurance or want to look into different options for treatment some low-cost or free options are provided. Local clinics, family planning clinics, student health centers, or urgent care clinics can help offer testing and treatment.",
        choices: [
            { text: "Continue", next: "yes_advice3"}
        ]
    },

    yes_advice3: {
        text: "Doctor: GetTested is a great way to find clinics near you. For contacting previous sexual partners I think its best to be honest and they will appreciate the transparency so they themselves can also get tested. You can say, “Hello NAME, I recently tested positive for chlamydia and wanted to let you know just in case it was when we met and suggest to get tested to be safe” and maybe offer them options of how to get tested in order to encourage them to do so.",
        choices: [
            { text: "Continue", next: "yes_advice4"}
        ]
    },

    yes_advice4: {
        text: "Doctor: I also from now on recommend that when engaging in sexual activity always make sure to use a condom to prevent future transmissions and dental dams for oral sex. Try not to share any sex toys and make sure to always wash your hands after sexual activity to prevent hand to eye transmission which can happen with chlamydia. Stay precautious and safe! I recommend doing doxycycline since the CDC sees this method as more effective, I can help prescribe it for you if needed.",
        choices: [
            { text: "Continue", next: "yes_advice5"}
        ]
    },

    yes_advice5: {
        text: "Doctor: I hope your treatment goes smoothly and please let me know if you have any further questions!",
        choices: [
            { text: "Continue", next: "yes_advice6"}
        ]
    },

    yes_advice6: {
        text: "Cam: Thank you!!\n\nThe same day Cam contacted his previous sexual partners and in the future continued to get regularly tested as well as use protection during sexual activities.",
        choices: [
            { text: "Continue", next: "yes_advice7"}
        ]
    },

    yes_advice7: {
        text: "Your healthcare provider can prescribe antibiotics to cure gonorrhea and chlamydia. If you don't have insurance or want to see someone else for treatment, there are low-cost or free options. Testing and treatment are available at your local health department's clinic, family planning clinics, student health centers, or urgent care clinics. You can also find a clinic using GetTested and ask if they offer treatment for gonorrhea and chlamydia.",
        choices: [
        ]
    },

    scene3_no: {
        text: "Brooke: Have you met her before or was this the first time?",
        choices: [
            { text: "Continue", next: "scene3_no2" }    
        ] 
    },

    scene3_no2: {
        text: "Cam: I just met her that night but I didn’t have a condom so we just had sex without one",
        choices: [
            { text: "Continue", next: "scene3_no3" }    
        ] 
    },

    scene3_no3: {
        text: "Brooke: Well I understand that you probably didn’t have one since you didn’t expect the night to turn into that, but I think it would be safe to get tested just in case. Testing yourself regularly is a good way to stay safe for yourself and others when having multiple partners! I actually heard a clinic is doing free testing and was going to go myself but we could go together!",
        choices: [
            { text: "Continue", next: "scene3_no4" }    
        ] 
    },

    scene3_no4: {
        text: "Brooke: Well I understand that you probably didn’t have one since you didn’t expect the night to turn into that, but I think it would be safe to get tested just in case. Testing yourself regularly is a good way to stay safe for yourself and others when having multiple partners! I actually heard a clinic is doing free testing and was going to go myself but we could go together!",
        choices: [
            { text: "Continue", next: "no_timeskip" }    
        ] 
    },

    no_timeskip: {
        text: "Few weeks pass\nCam gets a text from a number: Hey Cam, it’s Jess. I recently got tested and was positive for Chlamydia, I’m not sure when I got it but I just wanted to let you know just in case it was when we met.",
        choices: [
            { text: "Continue", next: "no_text1" }
        ] 
    },

    no_text1: {
        text: "Cam -> Brooke: Hey do you know if there is anywhere I can get tested, I just got a text from Jess that she tested positive for chlamydia. I havent had anything that shows I have it but maybe I should just in case.",
        choices: [
            { text: "Continue", next: "no_text2" }
        ]
    },

    no_text2: { 
        text: "Brooke -> Cam: Hi! I just checked and they actually have a testing available this week, we can go whenever you are ready thank you for feeling comfortable to reach out!",
        choices: [
            { text: "Continue", next: "no_doctors" }
        ]
    },

    no_doctors: {
        text: "At the Doctors\nDoctor: Hello Cam,  I will be your doctor today and use she/her pronouns. If you don't mind me asking what is your sexual history since you have come in to get tested today?",
        choices: [ 
            { text: "Continue", next: "no_doctors_continue" }
        ]
    },

    no_doctors_continue: {
        text: "Cam: Hello, I go by he/him pronouns, and I came in today because I was recently informed by a past partner that they have chlamydia so I wanted to test for it since we didn’t use a condom at the time.",
        choices: [
            { text: "Continue", next:  "no_doctors_continue2" }
        ]
    },

    no_doctors_continue2: {
        text: "Doctor: That’s a great decision and just know it’s always smart to get tested regularly when having multiple partners, because although some STIs may have symptoms chlamydia is a common STI people go on not knowing they have since many cases between about 50% and 70% can show no symptom.",
        choices: [
            { text: "Continue", next:  "no_doctors_continue3" }
        ]
    },

    no_doctors_continue3: {
        text: "Doctor: What type of sexual activity and what precautions did you take?",
        choices: [
            { text: "Continue", next:  "no_doctors_continue4" }
        ]
    },

    no_doctors_continue4: {
        text: "Cam: With the one that particularly reached out to me we just had sex but I have had oral as well with other partners, however I did not use a condom witht he girl who contatced me.",
        choices: [
           { text: "Continue", next:  "no_doctors_continue5" }
        ]
    },

    no_doctors_continue5: {
        text: "Doctor: Thank you for being honest with me this allows me to have more information about your sexual history and no need to feel uncomfortable to tell me any details you feel are important to this appointment.",
        choices: [
           { text: "Continue", next:  "no_symptoms" }
        ]
    },

    no_symptoms: {
        text: "Doctor: Have you had any of the following symptoms?",
        choices: [
            { text: "Continue", next: "no_male_symptoms" }
        ]
    },

    no_male_symptoms: {
        text: "Penile infection symptoms:\nPain while urinating\nDischarge from penis\nPain in testicles",
        choices: [
            { text: "Continue", next: "no_gn_symptoms" }
        ]
    },

    no_gn_symptoms: {
        text: "Anal infection symptoms:\nPain\nDischarge\nBleeding",
        choices: [ 
            { text: "Continue", next: "no_doctors_continue5" }
        ]
    },

    no_doctors_continue5: {
        text: "Cam: I have not had any of the symptoms which is why at first I never went to get tested since nothing changed in my body afterwards.",
        choices: [
           { text: "Continue", next:  "no_doctors_continue6" }
        ]
    },

    no_doctors_continue6: {
        text: "Doctor: That's very common and you taking the time to get tested is already a great first step!",
        choices: [
           { text: "Continue", next:  "no_information"}
        ]
    },

    no_information: {
        text: "Information:\nChlamydia is a STI where many cases go unreported due to the fact symptoms may not show but if untreated for long periods of time can lead to:",
        choices: [
            { text: "Continue", next: "no_men_info" }
        ]
    },


    no_men_info: {
        text: "Penile infection:\nPainful infection in testicles\nRare - Infertility",
        choices: [
            { text: "Continue", next: "no_information2" }
        ]
    },

    no_information2: {
        text: "This also can cause more transmission to future partners as well if left untreated and unknown of diagnosis.",
        choices: [
            { text: "Continue", next: "no_women_info" }
        ]
    },

    no_women_info: {
        text: "Vaginal infection:\nChange in discharge | Itching\nBleeding bewtween menstrual periods and sex\nPain or discomfort in lower abdomen | Burning when urinating",
        choices: [
            { text: "Continue", next: "no_women_info2" }
        ]
    },
    
    no_women_info2: {
        text: "If left untreated:\nDevelop Pelvic Inflammatory Disease (PID)\nAbdonimal and pelvic pain\nInfertility or Eptopic pregnancy in later stages",
        choices: [
            { text: "Continue", next: "no_doctor_test" }
        ]
    },

    no_doctor_test: {
        text: "Doctor: Okay so there are two different types of test you can receive:\nUrine or swab in either the cervix, vagina, throat or anus\nWhich would you prefer?",
        choices: [
            { text: "Urine", next: "no_cam_test_urine" },
            { text: "Swab", next: "no_cam_test_swab" }
        ]
    },

    no_cam_test_urine: {
        text: "Cam: I think a urine test is good",
        choices: [
            { text: "Continue", next: "no_cam_test" }
        ]
    },

    no_cam_test_swab: {
        text: "Cam: I would prefer a swab test",
        choices: [
            { text: "Continue", next: "no_cam_test" }
        ]
    },

    no_cam_test: {
        text: "Doctor: Okay these results will be available to you by tomorrow and based on them we can further discuss.",
        choices: [
            { text: "Continue", next: "no_next_day" }
        ]
    },


    no_next_day: {
        text: "Next day:\nResults show to be: Positive",
        choices: [
            { text: "Continue", next: "no_doctors_message" }
        ]
    },

    no_doctors_message: {
        text: "Doctors message: Hello! I want to assure you that there is no need to be worried about these results, come back to the clinic this week and we can discuss treatemnt and next steps.",
        choices: [
            { text: "Continue", next: "no_next_clinic" }
        ]
    },

    no_next_clinic: {
        text: "Doctor: Once tested positive for chlamydia there are two types of antibiotics you can take, doxycycline and azithromycin. For Doxyclycine you can take a single dose over  7-14 days and for Azithromycin it is just a single dose orally, but usually recommended for pregnant women.",
        choices: [
            { text: "Continue", next: "no_next_clinic2" }
        ]
    },

    no_next_clinic2: {
        text: "Doctor: Once you receive the medication you should take the full dose even if no symptoms appear or if symptoms you do develop go away. While taking these antibiotics stay clear of any sexual activity to prevent spreading and contact any previous sexual partners you’ve had about your diagnosis.",
        choices: [
            { text: "Continue", next: "no_next_clinic3" }
        ]
    },

    no_next_clinic3: {
        text: "Doctor: I also recommend that we get you tested for other STIs just to be safe and our clinic offers free testing every month and so do others in the area. I suggest to regularly get tested every month if possible when having multiple partners to keep you and the community safe!",
        choices: [
            { text: "Continue", next: "no_advice" }
        ]
    },

    no_advice: {
        text: "Cam: Thank you so much for all your help and advice. But, I’m worried I can't afford treatment so are there options that are affordable for someone younger like me or don’t want to contact my provider about this? Also how should I go about contacting other partners I’ve had I’m kinda nervous about that process.",
        choices: [
            { text: "Continue", next: "no_advice2"}
        ]
    },

    no_advice2: {
        text: "Doctor: That is a very normal feeling and don’t worry we are here to help you know your options and how to go from here. Usually your healthcare provider can help prescribe you antibiotics for treatment, however if you do not have insurance or want to look into different options for treatment some low-cost or free options are provided. Local clinics, family planning clinics, student health centers, or urgent care clinics can help offer testing and treatment.",
        choices: [
            { text: "Continue", next: "no_advice3"}
        ]
    },

    no_advice3: {
        text: "Doctor: GetTested is a great way to find clinics near you. For contacting previous sexual partners I think its best to be honest and they will appreciate the transparency so they themselves can also get tested. You can say, “Hello NAME, I recently tested positive for chlamydia and wanted to let you know just in case it was when we met and suggest to get tested to be safe” and maybe offer them options of how to get tested in order to encourage them to do so.",
        choices: [
            { text: "Continue", next: "no_advice4"}
        ]
    },

    no_advice4: {
        text: "Doctor: I also from now on recommend that when engaging in sexual activity always make sure to use a condom to prevent future transmissions and dental dams for oral sex. Try not to share any sex toys and make sure to always wash your hands after sexual activity to prevent hand to eye transmission which can happen with chlamydia. Stay precautious and safe! I recommend doing doxycycline since the CDC sees this method as more effective, I can help prescribe it for you if needed.",
        choices: [
            { text: "Continue", next: "no_advice5"}
        ]
    },

    no_advice5: {
        text: "Doctor: I hope your treatment goes smoothly and please let me know if you have any further questions!",
        choices: [
            { text: "Continue", next: "no_advice6"}
        ]
    },

    no_advice6: {
        text: "Cam: Thank you!!\n\nThe same day Cam contacted his previous sexual partners and in the future continued to get regularly tested as well as use protection during sexual activities.",
        choices: [
            { text: "Continue", next: "no_advice7"}
        ]
    },

    no_advice7: {
        text: "Your healthcare provider can prescribe antibiotics to cure gonorrhea and chlamydia. If you don't have insurance or want to see someone else for treatment, there are low-cost or free options. Testing and treatment are available at your local health department's clinic, family planning clinics, student health centers, or urgent care clinics. You can also find a clinic using GetTested and ask if they offer treatment for gonorrhea and chlamydia.",
        choices: [
        ]
    }
}

function showScene(sceneId) {
    const scene = scenes[sceneId]
    gameText.innerText = scene.text;
    choices.innerHTML = ""; 

    scene.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => showScene(choice.next);
    choices.appendChild(button);
  });
}

// Start the story
showScene("startingScene");