
let cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];


let userInput = prompt("Enter a city:");


let index = cities.indexOf(userInput);


if (index !== -1) {
    console.log("Index of", userInput, "is", index);
} else {
    console.log("Not Found");
}
