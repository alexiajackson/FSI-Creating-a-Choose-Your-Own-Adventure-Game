//Your Code here
let firstAnswer = window.prompt("Do you head left or right?")
console.log(firstAnswer)

if (firstAnswer === "left") {
    let secondAnswer = window.prompt("You encounter a dragon. Do you run or fight?")
    console.log(secondAnswer)

    if (secondAnswer === "run") {
        let thirdAnswer = window.prompt("you are safe and see a horse. ride or walk?")
        console.log(thirdAnswer)
        if (thirdAnswer === "ride") {
            console.log("You win!")
        } else if (thirdAnswer === "walk") {
            console.log("You lose.")
        } else {
            console.log("You didn't follow instructions. Game over.")
        }
    } else if (secondAnswer === "fight") {
        let thirdAnswer = window.prompt("You slayed the dragon. Leave or stay?")
        console.log(thirdAnswer)
        if (thirdAnswer === "leave") {
            console.log("You win!")
        } else if (thirdAnswer === "stay") {
            console.log("You lose.")
        } else {
            console.log("You didn't follow instructions. Game over.")
        }
    }
}

if (firstAnswer === "right") {
    let secondAnswer = window.prompt("You see a witch. Do you cast a spell or run to a cave?")
    console.log(secondAnswer)

    if (secondAnswer === "cast a spell") {
        let thirdAnswer = window.prompt("You win the duel. Do you continue to the castle or go home?")
        console.log(thirdAnswer)
        if (thirdAnswer === "continue to the castle") {
            console.log("You win!")
        } else if (thirdAnswer === "go home") {
            console.log("You lose.")
        } else {
            let wrongAnswer = window.prompt("error")
            console.log("You didn't follow instructions. Game over.")
        }
    } else if (secondAnswer === "run to a cave") {
        let thirdAnswer = window.prompt("You ecnounter a goblin. Do you club him or take a nap?")
        console.log(thirdAnswer)
        if (thirdAnswer === "club him") {
            console.log("You win!")
        } else if (thirdAnswer === "take a nap") {
            console.log("You lose.")
        } else {
            let wrongAnswer = window.prompt("error")
            console.log("You didn't follow instructions. Game over.")
        }
    }
}