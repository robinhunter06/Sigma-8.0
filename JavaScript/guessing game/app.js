const max = prompt("Enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }

    if (guess == random) {
        console.log("congratulation!, Your geuss is correct. A number is", random);
        break;
    } else if (guess < random) {
        guess = prompt("hint: your number was to small. please try again");
        break;
    } else {
        guess = prompt("hint:your number was to large. please try again");
    }
}