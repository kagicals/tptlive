function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let number = getRandomInt(10);

let guesses = 3

while (guesses > 0) {
    let guess = prompt("Sisesta �ks number 1-10-ni");
    if (guess == number) {
        console.log("Yay! Arvasid �ige numbri �ra!");
        break
    } else if (guess == number - 1 || guess == number + 1) {
        console.log("Ai, sa pakkusid v�ga l�hedale.");
        guesses -= 1;
    } else {
        console.log("Sorry, " + guess + " ei ole �ige number.");
        guesses -= 1;
    }
}