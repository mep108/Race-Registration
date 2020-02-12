let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 19;

if (age > 18 && early){
  (raceNumber += 1000)
  console.log(`Registration is at 9:00 AM and  your race number is ${raceNumber}`)
}
else if (age > 18 && !early){
  console.log(`Registration is at 11:00 AM and your race number is ${raceNumber}`)
}
else if (age < 18){
  console.log(`Registration is at 12:30 AM and your race number is ${raceNumber}`)
}

else{
  console.log ('Please see registration desk')
}
