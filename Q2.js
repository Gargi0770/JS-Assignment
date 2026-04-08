function runQ2() {

let current = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));

// Repeat exactly 3 times
for (let i = 1; i <= 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

let result = "NO";

// Check if 3-digit number
if (current >= 100 && current <= 999) {

    let str = current.toString();
    let middle = parseInt(str[1]);

    if (middle === seed) {
        result = "YES";
    }
}

alert(result + ", " + current);

}
