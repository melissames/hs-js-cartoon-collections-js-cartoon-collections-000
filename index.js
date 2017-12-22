function dwarfRollCall(dwarves) {
  var listDwarves = ''

  for(var i = 0; i < dwarves.length; i++){
    listDwarves += `${i + 1}. ${dwarves[i]} `
  }
  return listDwarves
}

function summonCaptainPlanet(planeteerCalls){
  var summonPlaneteers = [];

  for(var i = 0; i < planeteerCalls.length; i++){
    var upperCasePlaneteers = planeteerCalls[i].toUpperCase()
    summonPlaneteers.push(`${upperCasePlaneteers}!`);
  }

  return summonPlaneteers;
}

function longPlaneteerCalls(words) {
  var long = false;

  for(var i = 0; i < words.length; i++){
    if(words[i].length > 4){
      long = true;
    }
  }
  return long;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];

  for(var i = 0; i < cheese.length; i++){
    if(foods.indexOf(cheese[i]) > -1){
      return `${cheese[i]}`;
    } else {
      return "no cheese!"
    }
  }
}
