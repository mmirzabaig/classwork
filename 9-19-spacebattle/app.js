function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// Make a default class for Alien Ships/
class Alien {
  constructor() {
    this.hull = getRandomInt(3, 6);
    this.firepower = getRandomInt(2, 4);
    this.accuracy = getRandomArbitrary(.6, .8);
  }
}
// make an object for the player ship
let playerShip = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  missles: {count: 2, firepower: 7}
};


// make a array to hold all 6 aliens
let alienArray = [];
// start a for loop to push all 6 aliens in array
for (let i = 0; i < getRandomInt(4, 7); i++) {
  // set a variable to alien class
  let alienX = new Alien();
  // push the alien to alien array
  alienArray.push(alienX);
}

// start the battle between player and pc
var alienShip = 0;
for (let i = playerShip.hull; i > 0; i--) {
  let missle = 0;
  if (playerShip.missles.count > 0) {
  missle = prompt('If you chose to use a missle, Enter yes. or no');
  }
  // pop 1 alien object from array to prepare for battke

  if (confirm('would you like to chose a ship to target? Press OK to chose a ship or Cancel')) {
    let target = prompt('chose a ship to target from ' + alienArray.length + ' ships');
    alienShip = alienArray.splice(Number(target - 1), 1);
    alienShip = alienShip[0];
  } else {
    alienShip = alienArray.pop();
  }
  console.log(alienArray.length);
  alert('press ok to start battle');
  // duke it out between alien 1 and player
  for (let k = alienShip.hull; k > 0; k--) {

    if (playerShip.accuracy > alienShip.accuracy) {
      if(missle === 'yes') {
        playerShip.missles.count -= 1;
        console.log('USEED ' + playerShip.missles.count)
        alienShip.hull -= playerShip.missles.firepower;
      } else {
        alienShip.hull -= playerShip.firepower;
      }
    } else {
      playerShip.hull -= alienShip.firepower;
      playerShip.hull += getRandomInt(1, 2);
    }

    if ( alienShip.hull < 0 ) {
      break;
    }
  }
  if (playerShip.hull <= 0) {
    console.log('you lost');
    break;
  }
  if (alienArray.length === 0) {
    console.log('you won!');
    break;
  }
  console.log(playerShip.hull + ' player health');
  console.log(alienShip.hull + ' alien health');
  if (confirm('Do you want to retreat? Press OK. If not, press Cancel')) {
    console.log('you lose');
    break;
  }
}
