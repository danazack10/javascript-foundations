function createVampire(name, pet){
  var vampire = {
    name: name,
    pet: "bat",
    thirsty: true,
    ouncesDrank: 0
  }
  if (pet != undefined){
    vampire.pet = pet
  }
  return vampire
}

function encounterDeliciousVictim(vampire){
  if (vampire.thirsty === false){
    return "No thanks, I am too full."
  } else {
    return "I WANT TO SUCK YOUR BLOOD!"
  }
}

function drink(vampire){
  if (vampire.ouncesDrank < 50){
  vampire.ouncesDrank = vampire.ouncesDrank + 10;
  }
  if (vampire.ouncesDrank > 40){
    vampire.thirsty = false
  }
  return vampire
}

function inquirePlace(locations, place){
  if (locations.includes(place)){
    return `Yes, I have spent some time in ${place}.`
  } else {
    return `No, I have never been to ${place}.`
  }
}

function findBatLovers(allVampires){
  var batLovers = [];
  for (var i = 0; i < allVampires.length; i++){
    if (allVampires[i].pet === "bat"){
      batLovers.push(allVampires[i].name);
    }
  }
  return batLovers
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}