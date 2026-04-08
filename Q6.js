function runQ6() {

let a = parseInt(prompt("Enter correct answers:"));
let b = parseInt(prompt("Enter partially correct:"));
let c = parseInt(prompt("Enter wrong answers:"));

// Step 1: calculate score
let score = 3 * a + b - 2 * c;

// Step 2: if negative → make 0
if (score < 0) {
    score = 0;
}

// Step 3: if total attempts > 50 → subtract 10
if (a + b + c > 50) {
    score -= 10;
}

// Step 4: decide result
let status;

if (score >= 60) {
    status = "PASS";
} else {
    status = "FAIL";
}

alert(score + ", " + status);

}
