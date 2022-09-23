function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let number = getRandomInt(10);

let guesses = 3

while (guesses > 0) {
    let guess = prompt("Sisesta üks number 1-10-ni");
    if (guess == number) {
        console.log("Yay! Arvasid õige numbri ära!");
        break
    } else if (guess == number - 1 || guess == number + 1) {
        console.log("Ai, sa pakkusid väga lähedale.");
        guesses -= 1;
    } else {
        console.log("Sorry, " + guess + " ei ole õige number.");
        guesses -= 1;
    }
}