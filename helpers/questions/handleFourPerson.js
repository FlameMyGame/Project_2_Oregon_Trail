const inquirer = require("inquirer");

function fourOne() {
    console.log("Question 4.01");
    return inquirer.prompt([{
        name: "one",
        type: "list",
        message: "You want to make a blade for survival and to look super cool. Which of the following is an essential tool to make a blade?",
        choices: ['Rocks', 'Branches', 'Fire', ]
    }, ])
}
//point order -0, -5, -2.5 

function fourTwo() {
    console.log("Question 4.02");
    return inquirer.prompt([{
        name: "two",
        type: "list",
        message: "You'll need to attach your emergency blade to some kind of handle. Which of these makes the best emergency rope?",
        choices: ['A vine', 'Tree bark', 'Your extra rope you take with you everywhere', ]
    }, ])
}
//point order -2.5, -5, -0 

function fourThree() {
    console.log("Question 4.03");
    return inquirer.prompt([{
        name: "three",
        type: "list",
        message: "It is another cold night. To avoid hypothermia, which of the following is a great way to generate heat?",
        choices: ['Drink sweet liquids', 'Wear tight clothes', 'Run a few miles', ]
    }, ])
}
//point order -0, -5, -2.5

function fourFour() {
    console.log("Question 4.04");
    return inquirer.prompt([{
        name: "four",
        type: "list",
        message: "You stepped in a puddle and now your feet are wet. If your feet stay wet for a prolonged period, you can develop immersion foot or:",
        choices: ['Athlete’s foot', 'Trench foot', 'Diabetic foot', ]
    }, ])
}
//point order -2.5, -0, -5 

function fourFive() {
    console.log("Question 4.05");
    return inquirer.prompt([{
        name: "five",
        type: "list",
        message: "You are turned around once again. What everyday object is used to signal for help in emergency situations?",
        choices: ['Toothbrush', 'Belt', 'Mirror', ]
    }, ])
}
//point order -5, -2.5, -0 

function fourSix() {
    console.log("Question 4.06");
    return inquirer.prompt([{
        name: "six",
        type: "list",
        message: "You are starting to hear voices again. What should you do?",
        choices: ['Do whatever they tell you', 'Tell someone you are not well', 'Ignore the voices', ]
    }, ])
}
//point order -5, -0, -2.5 

function fourSeven() {
    console.log("Question 4.07");
    return inquirer.prompt([{
        name: "seven",
        type: "list",
        message: "You need to make a fire but it is raining. Where can you find dry tinder?",
        choices: ['Under moss', 'Under leaves', 'On top of rocks', ]
    }, ])
}
//point order -0, -2.5, -5 

function fourEight() {
    console.log("Question 4.08");
    return inquirer.prompt([{
        name: "eight",
        type: "list",
        message: "As you set up camp for the night you spot a cougar. If it attacks you what should you do?",
        choices: ['Play dead', 'Scream', 'Fight back', ]
    }, ])
}
//point order -2.5, -5, -0 

function fourNine() {
    console.log("Question 4.09");
    return inquirer.prompt([{
        name: "nine",
        type: "list",
        message: "You cut your hand whittling. What percent of blood loss will likely cause death?",
        choices: ['40%', '2%', '25%', ]
    }, ])
}
//point order -0, -5, -2.5 

function fourTen() {
    console.log("Question 4.10");
    return inquirer.prompt([{
        name: "ten",
        type: "list",
        message: "You decide to go hunting. Do you tell your family your plan?",
        choices: ['Yes', 'No', 'Maybe so', ]
    }, ])
}
//point order -0, -5, -2.5 

function fourEleven() {
    console.log("Question 4.11");
    return inquirer.prompt([{
        name: "eleven",
        type: "list",
        message: "While hunting you spot a buck, you scare it off. What should you do next?",
        choices: ['Give chase', 'Watch and see where it goes', 'Start shooting as fast as you can at it', ]
    }, ])
}
//point order -2.5, -0, -5 

function fourTwelve() {
    console.log("Question 4.12");
    return inquirer.prompt([{
        name: "twelve",
        type: "list",
        message: "You have lost your direction while hunting. How should you try to find your sense of direction?",
        choices: ['Move quickly it any direction', 'Look around for something familiar', 'Curl up in a ball and rock back and forth', ]
    }, ])
}
//point order -2.5, -0, -5 

function fourThirteen() {
    console.log("Question 4.13");
    return inquirer.prompt([{
        name: "thirteen",
        type: "list",
        message: "You spot another deer in the distance, but it is getting late. What should you do?",
        choices: ['Return to your family and try again another day', 'Keep hunting', 'Start shooting at the far away deer', ]
    }, ])
}
//point order -0, -2.5, -5 

function fourFourteen() {
    console.log("Question 4.14");
    return inquirer.prompt([{
        name: "fourteen",
        type: "list",
        message: "You are a bad hunter and came back with nothing. How do you keep the morale up?",
        choices: ['Tell a funny story', 'Tell your family you miss 100% of the shots you don’t take', 'c', ]
    }, ])
}
//point order -2.5, -5, -0 

function fourFifteen() {
    console.log("Question 4.15");
    return inquirer.prompt([{
        name: "fifteen",
        type: "list",
        message: "While on your journey a family member breaks their leg and can no longer walk. What should you do?",
        choices: ['Leave them behind', 'Rest and create a plan', 'Tell them what doesn’t kill them will make them stronger', ]
    }, ])
}
//point order -5, -0, -2.5 

function fourSixteen() {
    console.log("Question 4.16");
    return inquirer.prompt([{
        name: "sixteen",
        type: "list",
        message: "There is a town nearby and you can rest and resupply. What should you do first?",
        choices: ['Find a hotel', 'Get a haircut', 'Get hammered drunk', ]
    }, ])
}
//point order -0, -2.5, -5 

function fourSeventeen() {
    console.log("Question 4.17");
    return inquirer.prompt([{
        name: "seventeen",
        type: "list",
        message: "Now that you are in a town again you think Oregon sounds overrated and overrun by hipsters. Do you keep heading to Oregon?",
        choices: ['Yes, it is the only place that I will be happy', 'No, Washington sounds better', 'Undecided, lets see how I feel tomorrow', ]
    }, ])
}
//point order -0, -5, -2.5 

function fourEighteen() {
    console.log("Question 4.18");
    return inquirer.prompt([{
        name: "eighteen",
        type: "list",
        message: "While in town you are challenged to a gentleman’s duel for insulting the barkeep's mother. What should you do?",
        choices: ['Meet for the duel and show the whole town you are not scared', 'Get your family and run for Oregon', 'Insult more people’s mothers so you can have multiple duels', ]
    }, ])
}
//point order -2.5, -0, -5 

module.exports = { fourOne, fourTwo, fourThree, fourFour, fourFive, fourSix, fourSeven, fourEight, fourNine, fourTen, fourEleven, fourTwelve, fourThirteen, fourFourteen, fourFifteen, fourSixteen, fourSeventeen, fourEighteen };