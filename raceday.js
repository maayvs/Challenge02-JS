let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;

if (runnerAge > 17 && registeredEarly == true) {
    raceNumber += 1000;
}

if (runnerAge > 17 && registeredEarly == true) {
    console.log(`Corredor de n°${raceNumber} correrá às 09h30.`)
} else if (runnerAge > 17 && !registeredEarly) {
    console.log(`Corredor de n°${raceNumber} correrá às 11h00.`)
} else if (runnerAge < 18) {
    console.log(`Corredor de n°${raceNumber} correrá às 12h00.`);
}