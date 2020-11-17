// TODO list on next cycle of improvements:
// - Make checkstreak function more modular and include if statement within it.
// - Enable colors in sequence array to change to atch wheel color
// - Tooltip component adivisng user to bet at streaks > 5
// - Design tidy: SpeechRecognitionResult, FAQ's, rejig the angle and advise the 5 streak maybe?
// - Add 0 to the wheel


// Arrays for streaks
let redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
let blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];

// Empty to be dynamically populated
let sequence = [];
let colorStreak = [];
let oddEvenStreak = [];
let overUnderStreak = [];
let result = "";

// Generates number and displays on index.html
function spinWheel(){
    result = Math.floor(Math.random() * 36) + 1;
    document.getElementById('number').innerHTML = result;
    sequence.push(result);


    // Change colour of number to match wheel
    if (redNumbers.includes(result)){
        document.getElementById('number').style.backgroundColor = "red";
    } else if (blackNumbers.includes(result)){
        document.getElementById('number').style.backgroundColor = "black";
    };

    // Show only the last 10 in sequence
    var lastTen = sequence.slice(-10).join(" ");
    document.getElementById('sequence').innerHTML = lastTen;


    // Streak counter for red or black + counter on index.html
    if (checkStreak(redNumbers) || checkStreak(blackNumbers)){
        colorStreak.push(result);
    } else {
        colorStreak = [];
    };

    var colorStreakNumber = colorStreak.length + 1;
    document.getElementById('color-streak').innerHTML = colorStreakNumber;


    // Streak counter for odd or even + counter on index.html
    if (checkStreak(oddNumbers) || checkStreak(evenNumbers)){
        oddEvenStreak.push(result);
    } else {
        oddEvenStreak = [];
    };

    var oddEvenStreakNumber = oddEvenStreak.length + 1;
    document.getElementById('odd-even-streak').innerHTML = oddEvenStreakNumber;


    // Streak counter for odd or even + counter on index.html
    if (sequence[sequence.length - 2] < 19 && sequence[sequence.length - 1] < 19 || sequence[sequence.length - 2] >= 19 && sequence[sequence.length - 1] >= 19 ){
        overUnderStreak.push(result);
    } else {
        overUnderStreak = [];
    };

    var overUnderStreakNumber = overUnderStreak.length + 1;
    document.getElementById('over-under-streak').innerHTML = overUnderStreakNumber;
};


// Checks if arr parameter is still a streak or not
function checkStreak(arr){
   return arr.includes(sequence[sequence.length - 2]) && arr.includes(sequence[sequence.length -1]);
};