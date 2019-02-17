let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 33;

//check if runner is adult and registered early
if (runnerAge >= 18 && registeredEarly === true) {
  raceNumber += 1000;
  //console.log(raceNumber);
}

// check age and registration time to determine race time
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Your race time is 9:30am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Your race time is 11:00am and your race number is ${raceNumber}.`);
} else if (runnerAge === 18){
  console.log('See the registration desk.')
} else {
  console.log(`Your race time is 12:30pm and your race number is ${raceNumber}.`)
}