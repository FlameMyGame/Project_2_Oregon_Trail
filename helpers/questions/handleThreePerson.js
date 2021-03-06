const inquirer = require("inquirer");

function threeOne() {
    console.log("Question 3.01");
    return inquirer.prompt([{
        name: "one",
        type: "list",
        message: "You only have three people left in your group and moral is low. How should you boost moral?",
        choices: ['Sing a song', 'Give the speech from Braveheart', 'Do nothing', ]
    }, ])
}
//point order -0, -2.5, -5 

function threeTwo() {
    console.log("Question 3.02");
    return inquirer.prompt([{
        name: "two",
        type: "list",
        message: "You burned your hand building a fire. What should you do?",
        choices: ['Apply something cold to the burn', 'run around screaming', 'stop, drop, and roll', ]
    }, ])
}
//point order -0, -5, -2.5 

function threeThree() {
    console.log("Question 3.03");
    return inquirer.prompt([{
        name: "three",
        type: "list",
        message: "There is a snake in your boot. What should you do?",
        choices: ['Put the boot on', 'Throw the boot away', 'Yell, "There is a snake in my boot!"', ]
    }, ])
}
//point order -5, -2.5, -0 

function threeFour() {
    console.log("Question 3.04");
    return inquirer.prompt([{
        name: "four",
        type: "list",
        message: "You meet a traveler on the road who wants to trade for some of your food. What should ask from him? ",
        choices: ['His lunchable', 'His whiskey', 'A story for bedtime', ]
    }, ])
}
//point order -2.5, -0, -2.5 

function threeFive() {
    console.log("Question 3.05");
    return inquirer.prompt([{
        name: "five",
        type: "list",
        message: "The traveler is starting to act funny. You realize he is turning into a zombie. What should you do?",
        choices: ['Kill or be killed', 'Wait to see if he gets better', 'Run away', ]
    }, ])
}
//point order -0, -5, -2.5 

function threeSix() {
    console.log("Question 3.06");
    return inquirer.prompt([{
        name: "six",
        type: "list",
        message: "You are very tired from traveling. What should you do?",
        choices: ['Stop right away and rest', 'Keep going, you can rest when you are dead', 'Rest at the next safe spot', ]
    }, ])
}
//point order -2.5, -5, -0 

function threeSeven() {
    console.log("Question 3.07");
    return inquirer.prompt([{
        name: "seven",
        type: "list",
        message: "You come to a fesh spring. What should you do?",
        choices: ['Fill your water jugs', 'Brush your teeth', 'Wait till the next one to do anything', ]
    }, ])
}
//point order -0, -2.5, -5 

function threeEight() {
    console.log("Question 3.08");
    return inquirer.prompt([{
        name: "eight",
        type: "list",
        message: "You find a stray dog. What should you do?",
        choices: ['Ignore it', 'Keep it as a pet', 'Eat it', ]
    }, ])
}
//point order -0, -2.5, -5 

function threeNine() {
    console.log("Question 3.09");
    return inquirer.prompt([{
        name: "nine",
        type: "list",
        message: "You have an upset stomach. Which of these roots will help settle stomach?",
        choices: ['Ginger', 'Fennel', 'Beet', ]
    }, ])
}
//point order -0, -2.5, -5 

function threeTen() {
    console.log("Question 3.10");
    return inquirer.prompt([{
        name: "ten",
        type: "list",
        message: "The sun is starting to burn you. What tree exudes a white powder that can be used as sunscreen?",
        choices: ['Cedar', 'Aspen', 'Oak', ]
    }, ])
}
//point order -5, -0, -2.5 

function threeEleven() {
    console.log("Question 3.11");
    return inquirer.prompt([{
        name: "eleven",
        type: "list",
        message: "You got stung by a bee. What is a natural way to help the bee sting?",
        choices: ['Your spit', 'Honey', 'Dirt', ]
    }, ])
}
//point order -5, -0, -2.5 

function threeTwelve() {
    console.log("Question 3.12");
    return inquirer.prompt([{
        name: "twelve",
        type: "list",
        message: "You notice you have a tick in your arm. How should you remove it?",
        choices: ['Pull it out by the tail', 'Pull it out by the head', 'Let it fall out on its own', ]
    }, ])
}
//point order -2.5, -0, -5 

function threeThirteen() {
    console.log("Question 3.13");
    return inquirer.prompt([{
        name: "thirteen",
        type: "list",
        message: "You have not been paying attention to how much food people have been eating and now you are low. What should you do?",
        choices: ['Keep a log of food', 'Make a ration chart', 'Just keep on keeping on', ]
    }, ])
}
//point order -2.5, -0, -5 

function threeFourteen() {
    console.log("Question 3.14");
    return inquirer.prompt([{
        name: "fourteen",
        type: "list",
        message: "You are noticing a plumb tree. What should you do?",
        choices: ['Can plumbs for later', 'Eat a bunch right now', 'Ignore it', ]
    }, ])
}
//point order -0, -2.5, -5 

module.exports = { threeOne, threeTwo, threeThree, threeFour, threeFive, threeSix, threeSeven, threeEight, threeNine, threeTen, threeEleven, threeTwelve, threeThirteen, threeFourteen };