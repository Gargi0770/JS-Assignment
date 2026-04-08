function runQ4() {

let base = parseInt(prompt("Enter base:"));
let distance = parseInt(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutesLate:"));
let seed = parseInt(prompt("Enter seed:"));

// Step 1
let fare = base + 7 * distance;

// Step 2
if (minutesLate > 15) {
    fare += 20;
}

// Step 3
if (distance > 10) {
    fare += Math.floor(fare * 0.10);
}

// Step 4
if (seed % 2 === 1) {
    fare -= seed;
} else {
    fare += seed;
}

// Step 5 (round up to nearest multiple of 5)
fare = Math.ceil(fare / 5) * 5;

alert(fare);

}
