function createDragon(name, rider, temp){
  var dragon = {
    name: name,
    rider: rider,
    temperment: temp,
    timesEaten: 0,
    hungry: true
  }
  return dragon
}

function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}

function eat(dragon){
 dragon.timesEaten = dragon.timesEaten + 1
 if (dragon.timesEaten < 3){
  dragon.hungry = true
 } else {
  dragon.hungry = false
 }
 return dragon
}

function findFireBreathers(allDragons){
  var allFireBreathers = []
  for (var i = 0; i < allDragons.length; i++){
    if (allDragons[i].temperment === "aggressive"){
      allFireBreathers.push(allDragons[i])
    }
  }
  return allFireBreathers;
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}